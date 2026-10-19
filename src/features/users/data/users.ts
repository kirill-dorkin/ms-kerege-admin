import { fakerRU as faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(67890)

export const users = Array.from({ length: 500 }, () => {
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()
  return {
    id: faker.string.uuid(),
    firstName,
    lastName,
    // Latin logins and emails, Kyrgyz-style phone numbers for the demo.
    username: `user_${faker.string.alphanumeric({ length: 6, casing: 'lower' })}`,
    email: `${faker.string.alphanumeric({ length: 8, casing: 'lower' })}@example.com`,
    phoneNumber: `+996 ${faker.helpers.arrayElement(['700', '555', '777', '502'])} ${faker.string.numeric(3)} ${faker.string.numeric(3)}`,
    status: faker.helpers.arrayElement([
      'active',
      'inactive',
      'invited',
      'suspended',
    ]),
    role: faker.helpers.arrayElement([
      'superadmin',
      'admin',
      'cashier',
      'manager',
    ]),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
  }
})
