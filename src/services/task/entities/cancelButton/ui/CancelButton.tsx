import styles from './styles/CancelButton.module.css'
import { CrossButton } from '@/common/shared/ui/crossButton'

export const CancelButton = () => {
    return (
        <div className={styles.button}>
            <CrossButton></CrossButton>
        </div>
    )
}