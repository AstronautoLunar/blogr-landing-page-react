import { 
  BackgroundPatternIntro, 
  LogoBlogr, 
  Navigation 
} from "./components";

import {
  Header,
  Background,
  ColumnHeader,
  Button,
  ContainerPresentation,
  Title,
  Text,
  AreaButtonsPresentation,
  Main,
  Section,
} from "./components/ui";

function App() {
  return (
    <div className="App">
      <Background>
        <Header>
          <ColumnHeader>
            <LogoBlogr />
            <Navigation />
          </ColumnHeader>
          <ColumnHeader>
            <Button>Login</Button>
            <Button type="CTA">Sign Up</Button>
          </ColumnHeader>
        </Header>
        <BackgroundPatternIntro />
        <ContainerPresentation>
          <Title>A modern publishing platform</Title>
          <Text>Grow your audience and build your online brand</Text>
          <AreaButtonsPresentation>
            <Button type="CTA" paddingStyle="11px 12px">
              Start for Free
            </Button>
            <Button type="ghost" paddingStyle="10px 16px">
              Learn More
            </Button>
          </AreaButtonsPresentation>
        </ContainerPresentation>
      </Background>
      <Main>
        <Section>
          <Title color="var(--very-dark-grayish-blue)" size={2}>
            Designed for the future
          </Title>
        </Section>
      </Main>
    </div>
  );
}

export default App;
