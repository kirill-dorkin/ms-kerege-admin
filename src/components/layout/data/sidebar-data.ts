import {
  Construction,
  LayoutDashboard,
  Monitor,
  Bug,
  ListTodo,
  FileX,
  Lock,
  Bell,
  Package,
  Palette,
  ServerOff,
  Settings,
  Wrench,
  UserCog,
  UserX,
  Users,
  MessagesSquare,
  ShieldCheck,
  AudioWaveform,
  Command,
  GalleryVerticalEnd,
} from 'lucide-react'
import { type SidebarData } from '../types'

export const sidebarData: SidebarData = {
  user: {
    name: 'Демо-менеджер',
    email: 'demo@example.com',
    avatar: '/avatars/shadcn.jpg',
  },
  teams: [
    {
      name: 'Kerege Admin',
      logo: Command,
      plan: 'Демо · MicroStudio',
    },
    {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    {
      name: 'Acme Corp.',
      logo: AudioWaveform,
      plan: 'Startup',
    },
  ],
  navGroups: [
    {
      title: 'Основное',
      items: [
        {
          title: 'Дашборд',
          url: '/',
          icon: LayoutDashboard,
        },
        {
          title: 'Задачи',
          url: '/tasks',
          icon: ListTodo,
        },
        {
          title: 'Приложения',
          url: '/apps',
          icon: Package,
        },
        {
          title: 'Чаты',
          url: '/chats',
          badge: '3',
          icon: MessagesSquare,
        },
        {
          title: 'Пользователи',
          url: '/users',
          icon: Users,
        },
      ],
    },
    {
      title: 'Страницы',
      items: [
        {
          title: 'Вход',
          icon: ShieldCheck,
          items: [
            {
              title: 'Вход',
              url: '/sign-in',
            },
            {
              title: 'Вход (2 колонки)',
              url: '/sign-in-2',
            },
            {
              title: 'Регистрация',
              url: '/sign-up',
            },
            {
              title: 'Восстановление пароля',
              url: '/forgot-password',
            },
            {
              title: 'Код подтверждения',
              url: '/otp',
            },
          ],
        },
        {
          title: 'Ошибки',
          icon: Bug,
          items: [
            {
              title: 'Нужен вход',
              url: '/errors/unauthorized',
              icon: Lock,
            },
            {
              title: 'Нет доступа',
              url: '/errors/forbidden',
              icon: UserX,
            },
            {
              title: 'Не найдено',
              url: '/errors/not-found',
              icon: FileX,
            },
            {
              title: 'Ошибка сервера',
              url: '/errors/internal-server-error',
              icon: ServerOff,
            },
            {
              title: 'Техработы',
              url: '/errors/maintenance-error',
              icon: Construction,
            },
          ],
        },
      ],
    },
    {
      title: 'Прочее',
      items: [
        {
          title: 'Настройки',
          icon: Settings,
          items: [
            {
              title: 'Профиль',
              url: '/settings',
              icon: UserCog,
            },
            {
              title: 'Аккаунт',
              url: '/settings/account',
              icon: Wrench,
            },
            {
              title: 'Оформление',
              url: '/settings/appearance',
              icon: Palette,
            },
            {
              title: 'Уведомления',
              url: '/settings/notifications',
              icon: Bell,
            },
            {
              title: 'Отображение',
              url: '/settings/display',
              icon: Monitor,
            },
          ],
        },
      ],
    },
  ],
}
