import { StyledCounters } from '../styled';
import ScoreResult from '../../ScoreResult';
import Counter from '../../Counter';

const Counters = ({
  onTransitionEnd,
  phase,
  countStores,
  actualScores,
  iterationInterval,
}) => {
  return (
    <StyledCounters onTransitionEnd={onTransitionEnd} phase={phase}>
      {phase === 'counting' || phase === 'results' ? (
        <>
          <ScoreResult
            phase={phase}
            score={countStores.red[0]}
            actualScore={actualScores.red}
            iterationInterval={iterationInterval}
            color="var(--red)"
          />
          <ScoreResult
            phase={phase}
            score={countStores.blue[0]}
            actualScore={actualScores.blue}
            iterationInterval={iterationInterval}
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
