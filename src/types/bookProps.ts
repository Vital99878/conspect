export interface BookProps {
  title: string;
  page: number;
  children: [];
}

export interface testProps {
  title: string;
  page: number;
}

export type DiagramData = [number, number, number, number, number, number]

export type DiagramProps = {
  diagram: DiagramData;
};

export type ListOfDiagramsProps = { diagrams: DiagramData[] };
