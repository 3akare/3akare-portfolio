import MenuBar from "./components/MenuBar.tsx";
import Dock from "./components/Dock.tsx";
import { MenuProvider } from "./context/MenuProvider.tsx";
import Desktop from "./components/Desktop.tsx";

function App() {
  return (
    <MenuProvider>
      <MenuBar/>
      <main className={"fixed inset-0 h-screen w-screen bg-wallpaper"}>
        <Desktop/>
      </main>
      <Dock/>
    </MenuProvider>
  )
}

export default App
