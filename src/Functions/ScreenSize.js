import { useState, useEffect } from 'react';

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: window.innerWidth>2000?0.4*window.innerWidth:window.innerWidth,
    height: .95*window.innerHeight,
    font: .02*window.innerHeight,
    verticalPadding: .02*window.innerHeight,
    horizontalPadding: window.innerWidth>2000?.05*window.innerHeight:.02*window.innerHeight
  });

  useEffect(() => {
    const handleResize = () => {

    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;