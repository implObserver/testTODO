import { Section } from '@/services/task/shared/ui/section'
import styles from './styles/CompleteSection.module.css'

export const CompleteSection = () => {
    return (
        <div className={styles.section}>
            <Section name={'Completed'}></Section>
        </div>
    )
}