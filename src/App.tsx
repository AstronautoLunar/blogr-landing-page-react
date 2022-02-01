import { 
  Header, 
  Logo,
  Background,
  Image,
  Nav,
  ColumnHeader
} from "./components";

function App() {
  const dataNavHeader = [
    {
      id: "01",
      text: "Product"
    },
    {
      id: "02",
      text: "Company"
    },
    {
      id: "03",
      text: "Connect"
    }
  ];

  return (
    <div className="App">
      <Background>
        <Header>
          <ColumnHeader>
            <Logo
              src={require("./assets/logo.svg").default}
              alt="logo"
            />
            <Nav
              data={dataNavHeader}
            />
          </ColumnHeader>
        </Header>
        <Image
          src={require("./assets/bg-pattern-intro-desktop.svg").default}
          alt="background image illustration"
          isBackground={true}
          positionElement={{
            right: "-800px",
            top: "40%",
            bottom: "none",
            left: "none"
          }}
          width="2500px"
          zIndex="-2"
        />
      </Background>
    </div>
  );
}

export default App;
