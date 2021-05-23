import React, { FC } from 'react';
import classes from './Diagram.module.css';
import { DiagramProps } from '../../types/bookProps';

const Diagram: FC<DiagramProps> = ({ diagram }) => {
  const columns = diagram.map((data) => {
    const height = { height: `${data * 4}px` };
    return <li className={classes.column} style={height} />;
  });
  return <ul className={classes.diagram}>{columns}</ul>;
};

export default Diagram;
