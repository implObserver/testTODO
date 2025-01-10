interface Items {
    active: Item,
    items: Item[];
}

interface Item {
    node: React.ReactNode,
    id: string,
} 