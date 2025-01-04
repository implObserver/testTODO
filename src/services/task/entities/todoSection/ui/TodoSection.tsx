import { Section } from '@/services/task/shared/ui/section'
import styles from './styles/TodoSection.module.css'

export const TodoSection = () => {
    return (
        <div className={styles.section}>
            <Section name={'Todo'} />
        </div>
    )
}