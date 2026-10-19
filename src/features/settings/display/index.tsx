import { ContentSection } from '../components/content-section'
import { DisplayForm } from './display-form'

export function SettingsDisplay() {
  return (
    <ContentSection
      title='Отображение'
      desc="Включите или выключите пункты, которые показываются в приложении."
    >
      <DisplayForm />
    </ContentSection>
  )
}
