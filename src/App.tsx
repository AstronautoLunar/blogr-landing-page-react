import { 
  Header, 
  Logo,
  Background,
  Image
} from "./components";

function App() {
  return (
    <div className="App">
      <Background>
        <Header>
          <Logo
            src={require("./assets/logo.svg").default}
            alt="logo"
          />
        </Header>
        <Image
          src={require("./assets/bg-pattern-intro-desktop.svg").default}
          alt="background image illustration"
          isBackground={true}
          positionElement={{
            right: "0",
            top: "50%",
            bottom: "none",
            left: "none"
          }}
          width="1000px"
        />
      </Background>
    </div>
  );
}

export default App;
