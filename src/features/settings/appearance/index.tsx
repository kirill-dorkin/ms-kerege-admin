import { ContentSection } from '../components/content-section'
import { AppearanceForm } from './appearance-form'

export function SettingsAppearance() {
  return (
    <ContentSection
      title='Оформление'
      desc='Настройте внешний вид приложения: автоматическое переключение дневной и ночной темы.'
    >
      <AppearanceForm />
    </ContentSection>
  )
}
