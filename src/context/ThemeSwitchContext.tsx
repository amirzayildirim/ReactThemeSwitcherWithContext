import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
export type ModeType = "dark" | "light";

export interface IThemeSwitcher {
  mode: ModeType;
  setMode: Dispatch<SetStateAction<ModeType>>;
}

const defaultState = {
  mode: "light",
  setMode: (mpde: ModeType) => {},
} as IThemeSwitcher;

export const ThemeSwitcherContext = createContext(defaultState);

type ChildNode = { children: ReactNode };

export default function ThemeSwitchProvider({ children }: ChildNode) {
  const [mode, setMode] = useState<ModeType>("light");

  return (
    <ThemeSwitcherContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeSwitcherContext.Provider>
  );
}
