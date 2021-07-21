import { App, AppHeader, AppLink } from './styled';

const Home = () => {
  return (
    <App>
      <AppHeader>
        <p>
          Dino-War
        </p>
        <AppLink
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </AppLink>
      </AppHeader>
    </App>
  );
};

export default Home;
