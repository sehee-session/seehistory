import React from 'react';

export const useToggle = (
  initialValue: boolean = false,
): [boolean, () => void] => {
  const [toggle, setToggle] = React.useState<boolean>(initialValue);

  const onToggle = () => setToggle((prev) => !prev);

  return [toggle, onToggle];
};
