import React, { FC } from 'react';
import { ListOfDiagramsProps } from '../../types/bookProps';
import Diagram from './Diagram';

const ListOfDiagrams: FC<ListOfDiagramsProps> = ({ diagrams }) => {
  const list = diagrams.map((data) => {
    return <Diagram diagram={data} />;
  });
  return <ul>{list}</ul>;
};

export default ListOfDiagrams;
