import { SelectStatus } from '@/services/task/features/selectStatus'
import styles from './styles/TaskEditor.module.css'
import { TaskInput } from '@/services/task/entities/taskInput'
import { AddTask } from '@/services/task/features/addTask'
import { useCustomState } from '@/common/shared/lib'
import { EditorTaskContext, useEditorTaskContext } from '@/services/task/shared/lib'
import { EditTask } from '@/services/task/features/editTask'
import { CloseEditorOfTask } from '@/services/task/features/closeEditorOfTask'

export const TaskEditor = () => {
    const task = useEditorTaskContext().getState().task;

    return (
        <div className={styles.task}>
            <div className={styles.cell}>
                {task.number}
            </div>
            <div className={`${styles.cell} ${styles.edit__input}`}>
                <TaskInput></TaskInput>
            </div>
            <div className={styles.cell}>
                <SelectStatus></SelectStatus>
            </div>
            <div className={styles.cell}>
                <EditTask></EditTask>
            </div>
            <div className={styles.cell}>
                <CloseEditorOfTask></CloseEditorOfTask>
            </div>
        </div>
    )
}