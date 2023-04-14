import { RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import StateProvider from "./contexts/state.context";
import router from "./router/Router";

function App() {
  return (
    <StateProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </StateProvider>
  );
}

export default App;
