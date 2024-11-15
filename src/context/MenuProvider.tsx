import { ReactNode, useState, createContext } from "react";

type MenuContextType = {
  title: string;
  updateMenuTitle: (title: string) => void;
};

export const MenuContext = createContext<MenuContextType>({
  title: "Finder",
  updateMenuTitle: ()=>{console.warn("updateMenuTitle is called without a provider.");}
});

export function MenuProvider({ children }: { children: ReactNode }) {
  const [title, setTitle] = useState("Finder");

  const updateMenuTitle = (newTitle: string) => {
    setTitle(newTitle);
  };

  return (
    <MenuContext.Provider value={{ title, updateMenuTitle }}>
      {children}
    </MenuContext.Provider>
  );
}
