import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  Circle,
  CheckCircle,
  AlertCircle,
  Timer,
  HelpCircle,
  CircleOff,
} from 'lucide-react'

export const labels = [
  {
    value: 'bug',
    label: 'Ошибка',
  },
  {
    value: 'feature',
    label: 'Функция',
  },
  {
    value: 'documentation',
    label: 'Документация',
  },
]

export const statuses = [
  {
    label: 'Бэклог',
    value: 'backlog' as const,
    icon: HelpCircle,
  },
  {
    label: 'К выполнению',
    value: 'todo' as const,
    icon: Circle,
  },
  {
    label: 'В работе',
    value: 'in progress' as const,
    icon: Timer,
  },
  {
    label: 'Готово',
    value: 'done' as const,
    icon: CheckCircle,
  },
  {
    label: 'Отменена',
    value: 'canceled' as const,
    icon: CircleOff,
  },
]

export const priorities = [
  {
    label: 'Низкий',
    value: 'low' as const,
    icon: ArrowDown,
  },
  {
    label: 'Средний',
    value: 'medium' as const,
    icon: ArrowRight,
  },
  {
    label: 'Высокий',
    value: 'high' as const,
    icon: ArrowUp,
  },
  {
    label: 'Критический',
    value: 'critical' as const,
    icon: AlertCircle,
  },
]
