import React from 'react';

type CheckBoxItemProps = {
  item: [string, boolean];
  updateFilter: (label: string) => void;
};

const CheckBoxItem: React.FC<CheckBoxItemProps> = (props) => {
  const { item, updateFilter } = props;
  const [key, value] = item;

  return (
    <label>
      <input type="checkbox" checked={value} value={key} onChange={() => updateFilter(key)} />
      {key}
    </label>
  );
};
export default CheckBoxItem;
