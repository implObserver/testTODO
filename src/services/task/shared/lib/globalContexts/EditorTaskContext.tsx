import { createContext, useContext } from "react";

export const EditorTaskContext = createContext<undefined | StateHandler<EditorTaskContext>>(undefined);

export function useEditorTaskContext() {
    const props = useContext(EditorTaskContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a EditorTaskContext');
    }
    return props;
}