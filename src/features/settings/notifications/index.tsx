import { ContentSection } from '../components/content-section'
import { NotificationsForm } from './notifications-form'

export function SettingsNotifications() {
  return (
    <ContentSection
      title='Уведомления'
      desc='Настройте, как получать уведомления.'
    >
      <NotificationsForm />
    </ContentSection>
  )
}
