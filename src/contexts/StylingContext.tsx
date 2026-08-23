import { useState, createContext, ReactNode } from "react";

interface StylesContextType {
  allowScroll: boolean;
  setAllowScroll: React.Dispatch<React.SetStateAction<boolean>>;
}

export const StylesContext = createContext<StylesContextType>({
  allowScroll: false,
  setAllowScroll: () => {},
});

const StylingContextProvider = ({
  children,
  allowScrollInitially = false,
}: {
  children: ReactNode;
  allowScrollInitially?: boolean;
}) => {
  const [allowScroll, setAllowScroll] = useState(allowScrollInitially);

  return (
    <StylesContext.Provider value={{ allowScroll, setAllowScroll }}>
      {children}
    </StylesContext.Provider>
  );
};

export default StylingContextProvider;
