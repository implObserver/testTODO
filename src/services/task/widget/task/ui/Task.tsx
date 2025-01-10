import { SelectStatus } from "@/services/task/features/selectStatus"
import { useEditorTaskContext } from "@/services/task/shared/lib"
import styles from './styles/Task.module.css'
import { Line } from "@/common/shared/ui/line"
import { RemoveTask } from "@/services/task/features/removeTask"
import { OpenEditorOfTask } from "@/services/task/features/openEditorOfTask"

export const Task = () => {
    const context = useEditorTaskContext();
    const task = context.getState().task;
    return (
        <>
            <div className={styles.task}>
                <div className={styles.cell}>
                    {task.number}
                </div>
                <div className={styles.cell}>
                    {task.name}
                </div>
                <div className={styles.cell}>
                    <SelectStatus></SelectStatus>
                </div>
                <div className={styles.cell}>
                    <OpenEditorOfTask></OpenEditorOfTask>
                </div>
                <div className={styles.cell}>
                    <RemoveTask></RemoveTask>
                </div>
            </div>
            <Line text={''}></Line>
        </>
    )
}