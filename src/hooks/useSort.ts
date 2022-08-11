import { useEffect, useReducer, useState } from 'react';

type ExampleObj = Record<'key 1' | 'key 2' | 'key 3', string>;

function byAscending(a: ExampleObj, b: ExampleObj, key: keyof Pick<ExampleObj, 'key 1'>) {
  if (a[key] > b[key]) {
    return 1;
  }
  if (a[key] < b[key]) {
    return -1;
  }
  return 0;
}

type SortType = 'asc' | 'desc';
type SortKey = Extract<keyof ExampleObj, 'key 1'>;

type Sort = `${SortType} ${SortKey}` | 'noSort';

type Action = { type: Sort; payload: ExampleObj[] };

type InitialState = Record<Sort, boolean> & { sorted: any[] };

const initialState: InitialState = {
  'asc key 1': false,
  'desc key 1': false,
  'noSort': false,
  'sorted': [],
};

function reducer(state = initialState, action: Action) {
  switch (action.type) {
    case 'asc key 1':
      return {
        ...initialState,
        [action.type]: true,
        sorted: [...action.payload].sort((a, b) => byAscending(a, b, 'key 1')),
      };
    case 'desc key 1':
      return {
        ...initialState,
        [action.type]: true,
        sorted: [...action.payload].sort((a, b) => byAscending(a, b, 'key 1')),
      };

    case 'noSort':
      return {
        ...initialState,
        sorted: [...action.payload],
      };
  }
}

export default function useSort(data: ExampleObj[]) {
  const [rawData, setRawData] = useState(data);

  const [state, dispatch] = useReducer(reducer, initialState);
  // state.

  useEffect(() => {
    setRawData(data);
  }, [data]);

  useEffect(() => {
    noSort();
  }, [rawData]);

  function noSort() {
    dispatch({ type: 'noSort', payload: rawData });
  }

  const dispatcher = {
    ascByKey1: () => {
      if (state['asc key 1']) return noSort();
      dispatch({ type: 'asc key 1', payload: rawData });
    },
    descByKey1: () => {
      if (state['desc key 1']) return noSort();
      dispatch({ type: 'desc key 1', payload: rawData });
    },
  };

  return { state, dispatcher };
}
