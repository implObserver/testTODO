import { useAppDispatch } from "@/common/shared/lib";
import { editTask } from "@/models/task";
import { SaveButton } from "@/services/task/entities/saveButton";
import { useEditorTaskContext } from "@/services/task/shared/lib";

export const EditTask = () => {
    const dispatch = useAppDispatch();
    const context = useEditorTaskContext();
    const state = context.getState();
    const task = context.getState().task;

    const clickHandle = () => {
        dispatch(editTask(task));
        context.setState({
            ...state,
            isEdit: false,
        })
    }

    return (
        <div onClick={clickHandle}>
            <SaveButton></SaveButton>
        </div>
    )
}