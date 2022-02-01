interface NavProps {
    data: Data[];
}

interface ItemProps {
    children?: ChildrenItemProps;
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

export type {
    NavProps,
    ItemProps,
    Data
}