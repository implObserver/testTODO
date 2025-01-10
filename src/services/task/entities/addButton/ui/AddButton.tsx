import styles from './styles/AddButton.module.css'
import { Section } from '@/services/task/shared/ui/section'

export const AddButton = () => {
    return (
        <div className={styles.button}>
            <Section name={'Save'}></Section>
        </div>
    )
}