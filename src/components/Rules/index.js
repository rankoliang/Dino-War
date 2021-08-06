import { Rule, CloseButton } from './styled';
import { IoMdCloseCircle } from 'react-icons/io';

const Rules = ({ setShown }) => {
  return (
    <Rule id="modal">
      <h1>Dino-Battle!</h1>
      <CloseButton>
        <IoMdCloseCircle
          onClick={() => {
            setShown(false);
          }}
        />
      </CloseButton>

      <div className="text">
        <h2>Basic Rules:</h2>
        <p>
          The goal of the game is to solve the math equation for each side of
          the battlefield with correct answers earning you a badge.
        </p>
        <h2>How to Play?</h2>
        <p>
          The player will use the dinosaur legend on each side of the
          battlefield to understand the point value of a specific dinosaur.
        </p>
        <p>
          We encourage the player to group like dinosaurs together when adding
          up the totals. Using your imagination with addition or multiplication
          will make adding their values easier.
        </p>
        <p>
          Be careful! The game will add in subtraction dinosaurs as the
          difficulty increases.
        </p>
        <p>
          The player will adjust the input field to equal each teams total point
          value.
        </p>
        <p>Once you are certain of your answer click Battle!</p>
        <h2>How is the score calculated?</h2>
        <p>
          Once the user starts the battle, the game will count each dinosaurs
          value starting with the red team.
        </p>
        <p>
          The computer will place each teams total value in the actual count
          container.
        </p>
        <p>
          If atleast one of your answers is equal to the actual count value, you
          will be allowed to proceed to the next level.
        </p>
        <p>
          A perfect game will consist of two correct answers awarding you a
          badge!
        </p>
        <p>
          You can view your earned badge on the level select screen. ~To be
          implemetned
        </p>
        <h2>Difficulty settings</h2>
        <p>Beginner mode: Maximum of three dino types for each team.</p>
        <p>Average mode: Maximum of four dino types for each team.</p>
        <p>
          Hard mode: Maximum of four dino types for each team, fossil dinos
          added for subtraction.
        </p>
      </div>
    </Rule>
  );
};

export default Rules;
