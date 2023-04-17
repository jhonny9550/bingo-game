import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import StateProvider from "./contexts/state.context";
import NewGamePage from "./pages/NewGamePage";
import GamePage from "./pages/GamePage";

function App() {
  return (
    <BrowserRouter>
      <StateProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<NewGamePage />} />
            <Route path="/game" element={<GamePage />} />
          </Route>
        </Routes>
      </StateProvider>
    </BrowserRouter>
  );
}

export default App;
