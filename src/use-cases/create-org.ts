import type { Org } from '@prisma/client';
import { hash } from 'bcryptjs';
import type { OrgsRepository } from '../repositories/orgs-repository';

interface CreateOrgUseCaseRequest {
	name: string;
	address: string;
	phone: string;
	email: string;
	password: string;
}

interface CreateOrgUseCaseResponse {
	org: Org;
}

export class CreateOrgUseCase {
	constructor(private orgsRepository: OrgsRepository) {}

	async execute({
		name,
		address,
		phone,
		email,
		password,
	}: CreateOrgUseCaseRequest): Promise<CreateOrgUseCaseResponse> {
		const password_hash = await hash(password, 6);

		const orgWithSameEmail = await this.orgsRepository.findByEmail(email);

		if (orgWithSameEmail) {
			throw new Error('Email already in use');
		}

		const org = await this.orgsRepository.create({
			name,
			address,
			phone,
			email,
			password_hash,
		});

		return { org };
	}
}
