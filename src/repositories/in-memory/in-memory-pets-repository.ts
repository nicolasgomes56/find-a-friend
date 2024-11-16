import type { Pet, Prisma } from '@prisma/client';
import type { PetsRepository } from '../pets-repository';

export class InMemoryPetsRepository implements PetsRepository {
	private pets: Pet[] = [];

	create(data: Prisma.PetCreateInput): Promise<Pet> {
		throw new Error('Method not implemented.');
	}
}
