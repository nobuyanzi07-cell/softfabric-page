import { Toaster } from "react-hot-toast";
import AppProvider from "./Provider";
import AppRoutes from "./Routes";

function App() {
  return (
    <AppProvider>
      <Toaster />
      <AppRoutes />
    </AppProvider>
  );
}

export default App;