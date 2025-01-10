import { CancelButton } from "@/services/task/entities/cancelButton";
import { useEditorTaskContext } from "@/services/task/shared/lib";

export const CloseEditorOfTask = () => {
    const context = useEditorTaskContext();
    const state = context.getState();

    const clickHandle = () => {
        context.setState({
            ...state,
            isEdit: false,
        });
    }

    return (
        <div onClick={clickHandle}>
            <CancelButton></CancelButton>
        </div>
    )
}