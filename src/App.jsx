import React, { useContext } from "react"
import { ThemeContext } from "./context/ThemeContext";
import ThemeToggler from "./ThemeToggler";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`App ${theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'} min-h-screen`}>
      <header className="App-header p-4">
        <h1 className="text-2xl font-bold mb-4">Theme Toggler</h1>
        <ThemeToggler />
      </header>
    </div>
  )
}
export default App