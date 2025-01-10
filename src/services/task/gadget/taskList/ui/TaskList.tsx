import { selectTasks } from "@/models/task"
import { EditorTaskContext, TaskContext } from "@/services/task/shared/lib";
import { Task } from "@/services/task/widget/task";
import { useSelector } from "react-redux"
import styles from './styles/TaskList.module.css'
import { TaskContainer } from "../components/TaskContainer";
import { useCustomState } from "@/common/shared/lib";
import { TaskCreator } from "@/services/task/widget/taskCreator";

export const TaskList = () => {
    const tasks = useSelector(selectTasks);

    const fill = () => {
        return tasks.map((task, index) => {
            const newTask: Task = {
                ...task,
                number: index.toString(),
            }
            return (
                <div key={newTask.id}>
                    <TaskContext.Provider value={newTask}>
                        <TaskContainer />
                    </TaskContext.Provider>
                </div>
            )
        })
    }
    return (
        <div className={styles.list}>
            <div className={styles.header}>
                <div className={styles.cell}>#</div>
                <div className={styles.cell}>Task Name</div>
                <div className={styles.cell}>Status</div>
                <div className={styles.cell}>Edit</div>
                <div className={styles.cell}>Remove</div>
            </div>
            <div className={styles.tasks}>
                {fill()}
                <TaskCreator />
            </div>
        </div>
    )
}