import { InMemoryOrgsRepository } from '@/repositories/in-memory/in-memory-orgs-repository';
import { compare } from 'bcryptjs';
import { beforeEach, describe, expect, it } from 'vitest';
import { CreateOrgUseCase } from './create-org';

let orgRepository: InMemoryOrgsRepository;
let sut: CreateOrgUseCase;

describe('Create Org Use Case', () => {
	beforeEach(() => {
		orgRepository = new InMemoryOrgsRepository();
		sut = new CreateOrgUseCase(orgRepository);
	});

	it('should be able to create a new org', async () => {
		const { org } = await sut.execute({
			name: 'Example Org',
			address: '123 Example St',
			phone: '555-1234',
			email: 'example@example.com',
			password: '123456',
		});

		expect(org.id).toEqual(expect.any(String));
		expect(org.email).toEqual('example@example.com');
	});

	it('should not be able to create an org with an existing email', async () => {
		const email = 'org@example.com';

		await sut.execute({
			name: 'Example Org',
			address: '123 Example St',
			phone: '555-1234',
			email,
			password: '123456',
		});

		await expect(() =>
			sut.execute({
				name: 'Example Org',
				address: '123 Example St',
				phone: '555-1234',
				email,
				password: '123456',
			}),
		).rejects.toBeInstanceOf(Error);
	});

	it('should hash org password upon creation', async () => {
		const { org } = await sut.execute({
			name: 'Example Org',
			address: '123 Example St',
			phone: '555-1234',
			email: 'org@example.com',
			password: '123456',
		});

		const isPasswordHashValid = await compare('123456', org.password_hash);

		expect(isPasswordHashValid).toBe(true);
	});
});
