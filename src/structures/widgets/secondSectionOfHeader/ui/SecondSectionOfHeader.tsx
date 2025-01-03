import { Title } from "@/common/entities/title"
import styles from './styles/SecondSectionOfHeader.module.css'

export const SecondSectionOfHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <Title />
            </div>
        </div>
    )
}