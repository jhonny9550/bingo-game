import Layout from "./components/Layout";
import StateProvider from "./contexts/state.context";

function App() {
  return (
    <StateProvider>
      <Layout />
    </StateProvider>
  );
}

export default App;
