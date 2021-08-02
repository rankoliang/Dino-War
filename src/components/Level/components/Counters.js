import { StyledCounters } from '../styled';
import ScoreResult from '../../ScoreResult';
import Counter from '../../Counter';

const Counters = ({
  onTransitionEnd,
  transitioning,
  counting,
  countStores,
  actualScores,
}) => {
  return (
    <StyledCounters
      onTransitionEnd={onTransitionEnd}
      transitioning={transitioning}
      counting={counting}
    >
      {counting ? (
        <>
          <ScoreResult
            score={countStores.red[0]}
            actualScore={actualScores.red}
            color="var(--red)"
          />
          <ScoreResult
            score={countStores.blue[0]}
            actualScore={actualScores.blue}
            color="var(--blue)"
            reversed
          />
        </>
      ) : (
        <>
          <Counter store={countStores.red} color="var(--red)" />
          <Counter store={countStores.blue} color="var(--blue)" reversed />
        </>
      )}
    </StyledCounters>
  );
};

export default Counters;
