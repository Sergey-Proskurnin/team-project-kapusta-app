import React from 'react';
import Loader from 'react-loader-spinner';

const OnLoader = () => {
  return (
    <Loader
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
      type="Circles"
      // type="Watch"
      color="#FFDAC0"
      height={100}
      width={100}
    />
  );
};

export default OnLoader;
