import { createContext, useContext } from "react";

export const ItemPickerContext = createContext<undefined | StateHandler<Items>>(undefined);

export function useItemPickerContext() {
    const props = useContext(ItemPickerContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ItemPickerContext');
    }
    return props;
}