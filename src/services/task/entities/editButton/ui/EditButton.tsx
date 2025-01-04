import { PencilButton } from "@/common/shared/ui/pencilButton"
import styles from './styles/EditButton.module.css'

export const EditButton = () => {
    return (
        <div className={styles.button}>
            <PencilButton />
        </div>
    )
}