import { useCustomState } from "@/common/shared/lib";
import { useItemPickerContext } from "../lib/context/Context"
import { Dropdown, DropdownContext } from "@/common/shared/ui/dropdownElement";
import styles from './styles/ItemPicker.module.css'

export const ItemPicker = () => {
    const context = useItemPickerContext();
    const active = context.getState().active;
    const items = context.getState().items;

    const isDropdown = useCustomState();

    const dropDownContext: DropdownContextType = {
        state: isDropdown.getState(),
        margin: false,
    }

    const dropdownHandle = () => {
        isDropdown.toggle();
    }

    const clickHandle = (item: Item) => {
        const state = context.getState();
        context.setState({
            ...state,
            active: item,
        })
        isDropdown.setState(false);
    }

    const fill = () => {
        return items.map(item => {
            if (item.id !== active.id) {
                return (
                    <div key={item.id} className={styles.item} onClick={(() => clickHandle(item))}>
                        {item.node}
                    </div>
                )
            }
        })
    }
    return (
        <div>
            <div onClick={dropdownHandle}>
                {active.node}
            </div>

            <DropdownContext.Provider value={dropDownContext}>
                <Dropdown>
                    {fill()}
                </Dropdown>
            </DropdownContext.Provider>
        </div>


    )
}