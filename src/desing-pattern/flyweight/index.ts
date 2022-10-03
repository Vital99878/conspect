import React, { CSSProperties } from 'react';
class Image {
  constructor(url: string) {
    console.log('');
  }
}

type ImageProps = {
  type: number;
  position: CSSProperties;
};
class Snowflake {
  constructor(public type: number) {}

  render(x: number, y: number, angle: number): ImageProps {
    return {
      type: this.type,
      position: { left: `${x}px`, top: `${y}`, position: 'absolute' },
    };
  }
}

const hasOwnProperty = Object.prototype.hasOwnProperty;

export class SnowflakeFactory {
  cache: { [type: number]: Snowflake } = {};
  get(type: number): Snowflake {
    const cache = this.cache;
    let snowflake: Snowflake;
    if (hasOwnProperty.call(cache, type)) {
      snowflake = cache[type];
    } else {
      snowflake = new Snowflake(type);
      cache[type] = snowflake;
    }
    return snowflake;
  }
}

const SNOW_TYPES = [1, 2, 3];

export default class Sky {
  constructor(public width: number, public height: number) {}

  snow(factory: SnowflakeFactory, count: number): ImageProps[] {
    const stylesCount = SNOW_TYPES.length;
    const data: ImageProps[] = [];
    for (let i = 0; i < count; i++) {
      const style = SNOW_TYPES[getRandomInteger(stylesCount)];
      const snowflake = factory.get(style);
      const x = getRandomInteger(this.width);
      const y = getRandomInteger(this.height);
      const angle = getRandomInteger(60);
      data[i] = snowflake.render(x, y, angle);
    }
    return data;
  }
}

function getRandomInteger(max: number): number {
  return Math.floor(Math.random() * max);
}
