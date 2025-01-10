import { useAppDispatch, useCustomState } from "@/common/shared/lib"
import { SpinnerLoader } from "@/common/shared/ui/spinnerLoader";
import { addTask } from "@/models/task";
import { AddButton } from "@/services/task/entities/addButton"
import { useEditorTaskContext } from "@/services/task/shared/lib";
import { nanoid } from "nanoid";

export const AddTask = () => {
    const dispatch = useAppDispatch();
    const context = useEditorTaskContext();
    const state = context.getState();
    const task = context.getState().task;
    const loading = useCustomState();

    const clickHandle = async () => {
        loading.setState(true);
        if (task.name.length > 0) {

            const newTask: Task = {
                ...task,
                id: nanoid(),
            }

            const defaultState: Task = {
                id: null,
                name: '',
                number: null,
                status: 'todo'
            }

            
            await dispatch(addTask(newTask));
            
            context.setState({
                ...state,
                task: defaultState,
            })
        } else {
            alert('Имя не должно быть пустым')
        }
        loading.setState(false);
    }

    return (
        <div onClick={clickHandle}>
            {loading.getState()
                ? <SpinnerLoader />
                : <AddButton></AddButton>}
        </div>
    )
}