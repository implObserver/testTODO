import { createContext, useContext } from "react";

export const TaskContext = createContext<undefined | Task>(undefined);

export function useTaskContext() {
    const props = useContext(TaskContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a TaskContext');
    }
    return props;
}