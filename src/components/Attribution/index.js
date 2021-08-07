import { Attribution, CloseButton } from './styled';
import { IoMdCloseCircle } from 'react-icons/io';

const Attributions = ({ setAttributionShown }) => {
  return (
    <Attribution id="modal">
      <h1>Attributions</h1>
      <CloseButton>
        <IoMdCloseCircle
          onClick={() => {
            setAttributionShown(false);
          }}
        />
      </CloseButton>

      <div className="text">
        <div>
          Dino1-Dino10 Icons made by{' '}
          <a
            href="https://www.flaticon.com/packs/dinosaurs-9?k=1627147411949"
            title="Darius Dan"
          >
            Darius Dan
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>

        <div>
          Dino11-Dino15 Icons made by{' '}
          <a
            href="https://www.flaticon.com/packs/jurassic-3?word=fossil"
            title="Smashicons"
          >
            Smashicons
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>

        <div>
          Badge Icons made by{' '}
          <a
            href="https://www.flaticon.com/free-icon/badge_1498841?related_id=1498841&origin=search"
            title="Freepik"
          >
            Freepik
          </a>{' '}
          from{' '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </div>

        <div>
          Background design created by{' '}
          <a href="https://github.com/qrohlf/trianglify" title="Trianglify">
            Trianglify
          </a>
        </div>

        <div>
          Button Icons used in app designed by:{' '}
          <a href="https://fontawesome.com/" title="FontAwesome">
            FontAwesome
          </a>{' '}
          &{' '}
          <a href="https://ionic.io/ionicons" title="Ionic">
            Ionic
          </a>
        </div>
      </div>
    </Attribution>
  );
};

export default Attributions;
