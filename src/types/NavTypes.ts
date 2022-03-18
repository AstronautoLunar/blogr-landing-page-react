interface NavProps {
    data: Data[];
    renderItems: RenderItemsTypes;
}

interface ItemProps {
    children?: ChildrenItemProps;
    setIcon?: SetIconTypes;
    href?: string;
}

type ChildrenItemProps = 
    JSX.Element 
    | 
    JSX.Element[]
    |
    string;

type Data = {
    id: string;
    text: string;
}

export type SetIconTypes = () => JSX.Element;

export type RenderItemsTypes = (value: Data, index: number, array: Data[]) => any

export type {
    NavProps,
    ItemProps,
    Data
}