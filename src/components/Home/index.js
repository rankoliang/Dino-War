import { App, AppHeader, AppLink } from './styled';

const Home = () => {
  return (
    <App>
      <AppHeader>
        <p>
          Dino-War
        </p>
        <AppLink
          href="URL"
        >
          Battle!
        </AppLink>
        <AppLink
          href="URL"
        >
          About/How-To/Etc
        </AppLink>
      </AppHeader>
    </App>
  );
};

export default Home;
