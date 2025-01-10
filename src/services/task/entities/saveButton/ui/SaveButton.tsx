import { CheckMarkButton } from '@/common/shared/ui/checkMarkButton'
import styles from './styles/SaveButton.module.css'

export const SaveButton = () => {
    return (
        <div className={styles.button}>
            <CheckMarkButton></CheckMarkButton>
        </div>
    )
}