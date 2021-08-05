import { DinoIcon, Points, DinoWrapper, PointsWrapper } from '../styled';
import { dinoTransform } from '../helpers';

const Dino = ({
  dino: { Component, animating, points, scaleX },
  dino,
  setDino,
}) => {
  const handleAnimationEnd = () => {
    setDino((dino) => {
      return { ...dino, animating: false };
    });
  };

  return (
    <DinoWrapper style={{ transform: dinoTransform(dino) }}>
      <DinoIcon as={Component} style={{ transform: `scaleX(${scaleX})` }} />
      {animating && (
        <PointsWrapper>
          <Points
            onAnimationEnd={handleAnimationEnd}
            style={{
              transform: dinoTransform(dino),
              color: points >= 0 ? 'var(--green)' : 'var(--red)',
            }}
          >
            {points}
          </Points>
        </PointsWrapper>
      )}
    </DinoWrapper>
  );
};

export default Dino;
