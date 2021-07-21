import logo from '../../logo.svg';
import { App, AppHeader, AppLogo, AppLink } from './styled';

const Home = () => {
  return (
    <App>
      <AppHeader>
        <AppLogo src={logo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
