import NavBar from "./components/NavBar";
import ThemeSwitchProvider from "./context/ThemeSwitchContext";

function App() {
  return (
    <ThemeSwitchProvider>
      <NavBar />
    </ThemeSwitchProvider>
  );
}

export default App;
