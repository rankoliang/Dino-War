import { App, AppHeader, AppLink } from './styled';

const Home = () => {
  return (
    <App>
      <AppHeader>
        <p>
          Dino-War
        </p>
        <AppLink
          href="#"
        >
          Level 1
        </AppLink>
        <AppLink
          href="#"
        >
          About/How-To/Etc
        </AppLink>
      </AppHeader>
    </App>
  );
};

export default Home;