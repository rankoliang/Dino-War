import { Rule, CloseButton } from './styled';
import { IoMdCloseCircle } from "react-icons/io";

const Rules = ({setShown}) => {

  return(
    <Rule id="modal">
      <h1>Dino-Battle!</h1>
      <CloseButton>
        <IoMdCloseCircle onClick={() => {setShown(false)}} />
      </CloseButton>

      <div className="text">
        <h2>
          Basic Rules:
        </h2>
        <p>
          The goal of the game is to solve the math equation for each side of the battlefield with correct answers giving you the highest possible score earning you a badge.
        </p>
        <h2>
          How to Play?
        </h2>
        <p>
          Each level will have a total points goal value that is achievable with a perfect score.
        </p><p>
          The player will use the Dinosaur legend on each side of the battlefield to understand the point value of a specific Dinosaur.
        </p><p>
          The equation may include Addition, Subtraction & Multiplication.
        </p><p>
          The player will adjust the input field to equal each teams total point value.
        </p><p>
          Once you are certain of your answer click Battle!
        </p>
        <h2>
          How is the score calculated?
        </h2>
        <p>
          The total points goal is the difference between the correct values for Team 1 & Team 2. This number will always be a positive number. ( I.E. Team 1 value is 20, Team 2 value is 30. Total points goal for the level is 10 points. )
        </p><p>
          Once the user starts the battle the game will determine if the player was correct with their answer for each teams total points value.
        </p><p>
          If the user had an incorrect answer the difference between the correct answer and the users answer will be subtracted from the total points goal value.
        </p><p>
          A perfect answer for each teams value will result in the total points goal being reached and a badge will be awarded.
        </p>
        <h2>
          Difficulty settings
        </h2>
        <p>
          Beginner mode: Maximum of three dino types for each team, single digit points goal.
        </p><p>
          Average mode: Maximum of four dino types for each team, double digit points goal.
        </p><p>
          Hard mode: Maximum of four dino types for each team, double digit points goal, fossil dinos added for subtraction.
        </p>
      </div>
    </Rule>
  )
};

export default Rules;