import { useState, useEffect } from 'react';

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

// import React from 'react'

// const GetWindoDimension = () => {
//     const { height, width } = useWindowDimensions();
//   return (
//     <div>
//        width: {width} ~ height: {height}
//     </div>
//   )
// }

// export default GetWindoDimension
