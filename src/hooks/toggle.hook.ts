import { useCallback, useState } from "react";

export const useToggle = (initialState: boolean) => {
  const [toggle, setToggle] = useState(initialState);

  const handleToggle = useCallback(() => {
    setToggle((v) => !v);
  }, []);

  return [toggle, handleToggle] satisfies [
    boolean,
    React.Dispatch<React.SetStateAction<boolean>>
  ];
};
