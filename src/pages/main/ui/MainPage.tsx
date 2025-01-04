import { EditButton } from '@/services/task/entities/editButton'
import styles from './styles/MainPage.module.css'
import { RemoveButton } from '@/services/task/entities/removeButton'
import { CompleteSection } from '@/services/task/entities/completeSection'
import { InProgressSection } from '@/services/task/entities/inProgressSection'
import { TodoSection } from '@/services/task/entities/todoSection'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <EditButton></EditButton>
            <RemoveButton></RemoveButton>
            <CompleteSection></CompleteSection>
            <InProgressSection></InProgressSection>
            <TodoSection></TodoSection>
        </div>
    )
}