import { 
  Header, 
  Logo,
  Background,
  Image,
  Nav,
  ColumnHeader,
  Button,
  ContainerPresentation,
  Title,
  Text,
  AreaButtonsPresentation
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
          <ColumnHeader>
            <Button>
              Login
            </Button>
            <Button type="CTA">
              Sign Up
            </Button>
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
          zIndex="-1"
        />
        <ContainerPresentation>
          <Title>
            A modern publishing platform
          </Title>
          <Text>
            Grow your audience and build your online brand
          </Text>
          <AreaButtonsPresentation>
            <Button 
              type="CTA" 
              paddingStyle="11px 12px"
            >
              Start for Free
            </Button>
            <Button 
              type="ghost"
              paddingStyle="10px 16px"
            >
              Learn More
            </Button>
          </AreaButtonsPresentation>
        </ContainerPresentation>
      </Background>
    </div>
  );
}

export default App;
