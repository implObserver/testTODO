import { EditButton } from "@/services/task/entities/editButton";
import { useEditorTaskContext } from "@/services/task/shared/lib";

export const OpenEditorOfTask = () => {
    const context = useEditorTaskContext();
    const state = context.getState();

    const clickHandle = () => {
        context.setState({
            ...state,
            isEdit: true,
        });
    }

    return (
        <div onClick={clickHandle}>
            <EditButton></EditButton>
        </div>
    )
}