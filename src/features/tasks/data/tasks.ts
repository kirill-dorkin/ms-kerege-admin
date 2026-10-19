import { faker } from '@faker-js/faker'

// Set a fixed seed for consistent data generation
faker.seed(12345)

// MicroStudio demo: readable task titles instead of lorem ipsum.
const TITLES = [
  'Исправить округление суммы заказа в корзине',
  'Добавить экспорт клиентов в CSV',
  'Написать инструкцию для новых операторов поддержки',
  'Кэшировать фото товаров на CDN',
  'Показывать ожидаемую дату доставки в корзине',
  'Перенести счета на новый шаблон PDF',
  'Описать API возвратов',
  'Добавить двухфакторный вход для администраторов',
  'Ускорить загрузку дашборда до одной секунды',
  'Перевести письма-уведомления на кыргызский',
  'Исправить сортировку заказов по дате',
  'Добавить ссылку на WhatsApp в подтверждение заказа',
  'Обновить страницу политики конфиденциальности',
  'Настроить еженедельный отчёт о продажах',
  'Исправить загрузку аватара в Safari',
  'Массовая смена статуса задач',
  'Описать процесс синхронизации склада',
  'Проверять номер телефона в форме регистрации',
  'Уведомлять о малом остатке товара',
  'Удалить неиспользуемые флаги функций',
  'Исправить часовой пояс в напоминаниях о записи',
  'Фильтр по менеджеру на доске сделок',
  'Написать описание релиза 2.4',
  'Повысить контраст неактивных кнопок',
  'Считать использование промокодов по кампаниям',
]
const NOTES = [
  'Сообщили из отдела продаж после прошлого релиза.',
  'Отзыв клиента из поддержки; сначала воспроизвести на телефоне.',
  'Нужно до старта праздничной кампании.',
  'Договорились на планировании; изменение небольшое, покрыть тестами.',
  'После релиза сравнить аналитику с прошлым месяцем.',
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
