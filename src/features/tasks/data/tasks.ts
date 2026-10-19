import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(12345)

// MicroStudio demo: readable task titles instead of lorem ipsum.
const TITLES = [
  'Fix rounding of order totals on the checkout page',
  'Add CSV export to the customers table',
  'Write onboarding guide for new support agents',
  'Cache product images on the CDN',
  'Show delivery date estimate in the cart',
  'Migrate invoices to the new PDF template',
  'Document the refunds API endpoint',
  'Add two-factor authentication for admins',
  'Reduce dashboard load time below one second',
  'Translate email notifications into Russian and Kyrgyz',
  'Fix broken sorting by date in the orders list',
  'Add WhatsApp link to order confirmation',
  'Update privacy policy page',
  'Set up weekly sales report email',
  'Fix avatar upload on Safari',
  'Add bulk status change for tasks',
  'Describe the warehouse sync process',
  'Validate phone numbers in the sign-up form',
  'Add low-stock alerts for products',
  'Clean up unused feature flags',
  'Fix timezone of appointment reminders',
  'Add filters by manager to the deals board',
  'Write release notes for version 2.4',
  'Improve contrast of disabled buttons',
  'Track promo code usage per campaign',
]
const NOTES = [
  'Reported by the sales team after last week\'s release.',
  'Customer feedback from the support inbox; reproduce on mobile first.',
  'Needed before the holiday campaign starts.',
  'Agreed in the planning meeting; keep the change small and covered by tests.',
  'Check analytics after release and compare with the previous month.',
]

export const tasks = Array.from({ length: 100 }, () => {
  const statuses = [
    'todo',
    'in progress',
    'done',
    'canceled',
    'backlog',
  ] as const
  const labels = ['bug', 'feature', 'documentation'] as const
  const priorities = ['low', 'medium', 'high'] as const

  return {
    id: `TASK-${faker.number.int({ min: 1000, max: 9999 })}`,
    title: faker.helpers.arrayElement(TITLES),
    status: faker.helpers.arrayElement(statuses),
    label: faker.helpers.arrayElement(labels),
    priority: faker.helpers.arrayElement(priorities),
    createdAt: faker.date.past(),
    updatedAt: faker.date.recent(),
    assignee: faker.person.fullName(),
    description: faker.helpers.arrayElement(NOTES),
    dueDate: faker.date.future(),
  }
})
