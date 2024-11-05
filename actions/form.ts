'use server';

import prisma from '@/lib/prisma';

class UserNotFoundErr extends Error {}

const user = {
	id: '38asdf9asdf12789371asdf289asdf',
};

export async function GetFormStats() {
	if (!user) {
		throw new UserNotFoundErr();
	}

	const stats = await prisma.form.aggregate({
		where: {
			userId: user.id,
		},
		_sum: {
			visits: true,
			submissions: true,
		},
	});

	const visits = stats._sum.visits || 0;
	const submissions = stats._sum.submissions || 0;

	let submissionRate = 0;

	if (visits > 0) {
		submissionRate = (submissions / visits) * 100;
	}

	const bounceRate = 100 - submissionRate;

	return {
		visits,
		submissions,
		submissionRate,
		bounceRate,
	};
}

export type CreateFormProps = {
	name: string;
	description: string | undefined;
};
export async function CreateForm({ name, description }: CreateFormProps) {
	const validation = name !== '';

	if (!validation) {
		throw new Error('Form not valid');
	}

	if (!user) {
		throw new UserNotFoundErr();
	}

	const form = await prisma.form.create({
		data: {
			userId: user.id,
			name,
			description,
		},
	});

	if (!form) {
		throw new Error('Something went wrong');
	}

	return form.id;
}

export async function GetForms() {
	if (!user) {
		throw new UserNotFoundErr();
	}

	return await prisma.form.findMany({
		where: {
			userId: user.id,
		},
		orderBy: {
			createdAt: 'desc',
		},
	});
}

export async function GetFormById(formId: number) {
	if (!user) {
		throw new UserNotFoundErr();
	}

	return await prisma.form.findUnique({
		where: {
			userId: user.id,
			id: formId,
		},
	});
}

export async function UpdateFormContent(id: number, jsonContent: string) {
	if (!user) {
		throw new UserNotFoundErr();
	}

	return await prisma.form.update({
		where: {
			userId: user.id,
			id,
		},
		data: {
			content: jsonContent,
		},
	});
}

export async function PublishForm(id: number) {
	if (!user) {
		throw new UserNotFoundErr();
	}

	return await prisma.form.update({
		where: {
			userId: user.id,
			id,
		},
		data: {
			published: true,
		},
	});
}

export async function GetFormContentByUrl(formUrl: string) {
	return await prisma.form.update({
		select: {
			content: true,
		},
		data: {
			visits: {
				increment: 1,
			},
		},
		where: {
			sharedUrl: formUrl,
		},
	});
}

export async function SubmitForm(formUrl: string, content: string) {
	return await prisma.form.update({
		data: {
			submissions: {
				increment: 1,
			},
			FormSubmition: {
				create: {
					content,
					createdAt: new Date(),
				},
			},
		},
		where: {
			sharedUrl: formUrl,
			published: true,
		},
	});
}

export async function GetFormWithSubmissions(id: number) {
	if (!user) {
		throw new UserNotFoundErr();
	}

	return await prisma.form.findUnique({
		where: {
			id,
		},
		include: {
			FormSubmition: true,
		},
	});
}
