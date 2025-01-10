import { useAppDispatch } from "@/common/shared/lib"
import { deleteTask } from "@/models/task";
import { RemoveButton } from "@/services/task/entities/removeButton";
import { useEditorTaskContext } from "@/services/task/shared/lib";

export const RemoveTask = () => {
    const dispatch = useAppDispatch();
    const context = useEditorTaskContext();
    const task = context.getState().task;

    const clickHandle = () => {
        if (confirm('Вы правда хотите удалить задачу?')) {
            dispatch(deleteTask(task));
            console.log('Задача удалена');
        } else {
            console.log('Вы не стали удалять задачу');
        }
    }

    return (
        <div onClick={clickHandle}>
            <RemoveButton></RemoveButton>
        </div>
    )
}