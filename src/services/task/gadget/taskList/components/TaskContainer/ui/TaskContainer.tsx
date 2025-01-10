import { useCustomState } from "@/common/shared/lib"
import { EditorTaskContext, useTaskContext } from "@/services/task/shared/lib";
import { Task } from "@/services/task/widget/task";
import { TaskEditor } from "@/services/task/widget/taskEditor";


export const TaskContainer = () => {
    const task = useTaskContext();
    const state = useCustomState({
        isEdit: false,
        task,
    })

    return (
        <div>
            <EditorTaskContext.Provider value={state}>
                {state.getState().isEdit
                    ? <TaskEditor />
                    : <Task></Task>
                }
            </EditorTaskContext.Provider>
        </div>
    )
}