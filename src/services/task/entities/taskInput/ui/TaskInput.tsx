import { useEditorTaskContext, useTaskContext } from '@/services/task/shared/lib'
import styles from './styles/TaskInput.module.css'

export const TaskInput = () => {
    const context = useEditorTaskContext();
    const state = context.getState();
    const task = context.getState().task;
    console.log(task)
    const inputHandle = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTask: Task = {
            ...task,
            name: e.target.value,
        }
        context.setState({
            ...state,
            task: newTask,
        });
    }

    return (
        <div>
            <input
                className={styles.input}
                type="text"
                maxLength={40}
                minLength={1}
                placeholder="Task name..."
                onChange={inputHandle}
                value={task.name}
            />
        </div>
    )
}