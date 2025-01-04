import { Section } from '@/services/task/shared/ui/section'
import styles from './styles/InProgressSection.module.css'

export const InProgressSection = () => {
    return (
        <div className={styles.section}>
            <Section name={'In Progress'} />
        </div>
    )
}