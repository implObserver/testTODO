import { ItemPicker, ItemPickerContext } from "@/common/entities/ItemPicker"
import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { editTask, getTasks } from "@/models/task"
import { CompleteSection } from "@/services/task/entities/completeSection"
import { InProgressSection } from "@/services/task/entities/inProgressSection"
import { TodoSection } from "@/services/task/entities/todoSection"
import { useEditorTaskContext, useTaskContext } from "@/services/task/shared/lib"
import { useEffect } from "react"
import styles from './styles/SelectStatus.module.css'

export const SelectStatus = () => {
    const context = useEditorTaskContext();
    const dispatch = useAppDispatch();
    const state = context.getState();
    const task = context.getState().task;

    const itemPickerContext: Items = {
        items: [
            {
                id: 'complete',
                node: <CompleteSection />,
            },
            {
                id: 'todo',
                node: <TodoSection />,
            },
            {
                id: 'inProgress',
                node: <InProgressSection />,
            },
        ],
        active: {
            id: `${task.status}`,
            node: task.status === 'complete'
                ? <CompleteSection />
                : task.status === 'todo'
                    ? <TodoSection />
                    : <InProgressSection />,
        },
    }

    const itemPickerState = useCustomState(itemPickerContext);
    const active = itemPickerState.getState().active;

    useEffect(() => {
        const newTask: Task = {
            ...task,
            status: active.id,
        }
        dispatch(editTask(newTask));
        context.setState({
            ...state,
            task: newTask,
        })
    }, [active])

    return (
        <div className={styles.container}>
            <ItemPickerContext.Provider value={itemPickerState}>
                <ItemPicker></ItemPicker>
            </ItemPickerContext.Provider>
        </div>
    )
}