import dataNavHeader from "../../varGlobals/dataNavHeader";
import Item from "../ui/Item";
import Nav from "../ui/Nav";

const Navigation = () => (
    <Nav
        data={dataNavHeader}
        renderItems={({
            id,
            text
        }) => (
            <Item key={id}>
                {text}
            </Item>
        )}
    />
)

export default Navigation;