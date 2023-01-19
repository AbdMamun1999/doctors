import store from "@/app/store";
import { Provider } from "react-redux";

const Layouts = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Layouts;
