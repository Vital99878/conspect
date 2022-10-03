import React, { CSSProperties, useEffect, useState } from 'react';
import Sky, { SnowflakeFactory } from '../../flyweight';
import './FlyweightTest.scss';
import Snowflake from '../../../components/Snowflake';

export const FlyweightTest: React.FC = () => {
  const sky = new Sky(500, 500);

  const [snow, setSnow] = useState(sky.snow(new SnowflakeFactory(), 1500));

  return (
    <div className="flyweight">
      {snow.map((snowData, index) => {
        return <Snowflake type={snowData.type} style={{...snowData.position, maxWidth: '6px', color: 'blue'}} key={index} />;
      })}
    </div>
  );
};

export default FlyweightTest;
