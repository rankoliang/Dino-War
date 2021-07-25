import { useEffect } from "react";
import { Rule } from './styled';
import { IoMdCloseCircle } from "react-icons/io";

const Rules = () => {

  useEffect(() => {
    const closeBtn = document.querySelector(".close");
    const ruleModal = document.querySelector("#modal");

    closeBtn.addEventListener("click", () => {
      ruleModal.style.display = "none";
    })
  }, [])

  return(
    <Rule id="modal">
      <h1>Dino-Battle!</h1>
      <div className="close">
        <IoMdCloseCircle />
      </div>

      <div className="text">
        <h2>
          Basic Rules:
        </h2>
        The goal of the game is to solve the math equation for each side of the battlefield with correct answers giving you the highest possible score earning you a badge.
        <br /><br /><br />
        <h2>
          How to Play?
        </h2>
        Each level will have a total points goal value that is achievable with a perfect score.
        <br /><br />
        The player will use the Dinosaur legend on each side of the battlefield to understand the point value of a specific Dinosaur.
        <br /><br />
        The equation may include Addition, Subtraction & Multiplication.
        <br /><br />
        The player will adjust the input field to equal each teams total point value.
        <br /><br />
        Once you are certain of your answer click Battle!
        <br /><br /><br />
        <h2>
          How is the score calculated?
        </h2>
        The total points goal is the difference between the correct values for Team 1 & Team 2. This number will always be a positive number. ( I.E. Team 1 value is 20, Team 2 value is 30. Total points goal for the level is 10 points. )
        <br /><br />
        Once the user starts the battle the game will determine if the player was correct with their answer for each teams total points value.
        <br /><br />
        If the user had an incorrect answer the difference between the correct answer and the users answer will be subtracted from the total points goal value.
        <br /><br />
        A perfect answer for each teams value will result in the total points goal being reached and a badge will be awarded.
        <br /><br /><br />
        <h2>
          Difficulty settings
        </h2>
        Beginner mode: Maximum of three dino types for each team, single digit points goal.
        <br /><br />
        Average mode: Maximum of four dino types for each team, double digit points goal.
        <br /><br />
        Hard mode: Maximum of four dino types for each team, double digit points goal, fossil dinos added for subtraction.
      </div>
    </Rule>
  )
};

export default Rules;