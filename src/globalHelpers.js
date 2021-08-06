import { useRef, useEffect, useState } from 'react';
import trianglify from 'trianglify';

export const randBetween = (low, high) => {
  return Math.floor(low + Math.random() * (high - low));
};

export const usePattern = () => {
  const [pattern] = useState(
    trianglify({
      cellSize: 100,
      height: 3840,
      width: 2160,
      xColors: 'YlGn',
      colorFunction: trianglify.colorFunctions.shadows(),
    })
      .toSVGTree()
      .toString()
  );

  return pattern;
};

export const usePrevious = (value) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};
