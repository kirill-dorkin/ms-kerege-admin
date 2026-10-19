import { ContentSection } from '../components/content-section'
import { AccountForm } from './account-form'

export function SettingsAccount() {
  return (
    <ContentSection
      title='Аккаунт'
      desc='Настройки аккаунта: язык и часовой пояс.'
    >
      <AccountForm />
    </ContentSection>
  )
}
