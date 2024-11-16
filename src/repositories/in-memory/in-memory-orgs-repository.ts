import { randomUUID } from 'node:crypto';
import type { Org, Prisma } from '@prisma/client';
import type { OrgsRepository } from '../orgs-repository';

export class InMemoryOrgsRepository implements OrgsRepository {
	private orgs: Org[] = [];

	async create(data: Prisma.OrgCreateInput): Promise<Org> {
		const newOrg: Org = {
			id: data.id ?? randomUUID(),
			name: data.name,
			address: data.address,
			phone: data.phone,
			email: data.email,
			password_hash: data.password_hash,
			createdAt: new Date(),
			updatedAt: new Date(),
		};
		this.orgs.push(newOrg);
		return newOrg;
	}

	async findByEmail(email: string) {
		const org = this.orgs.find((org) => org.email === email);

		if (!org) {
			return null;
		}

		return org;
	}
}
