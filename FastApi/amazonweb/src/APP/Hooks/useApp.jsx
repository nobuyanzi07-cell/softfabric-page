import { useContext } from "react";
import AppContext from "../Provider/AppContext";

function useApp() {
  return useContext(AppContext);
}

export default useApp;