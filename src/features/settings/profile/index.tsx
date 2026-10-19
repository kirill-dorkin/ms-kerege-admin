import { ContentSection } from '../components/content-section'
import { ProfileForm } from './profile-form'

export function SettingsProfile() {
  return (
    <ContentSection
      title='Профиль'
      desc='Так вас увидят другие пользователи.'
    >
      <ProfileForm />
    </ContentSection>
  )
}
