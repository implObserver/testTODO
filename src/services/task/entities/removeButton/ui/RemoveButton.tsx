import styles from './styles/RemoveButton.module.css'
import { TrashButton } from "@/common/shared/ui/trashButton"

export const RemoveButton = () => {
    return (
        <div className={styles.button}>
            <TrashButton />
        </div>
    )
}