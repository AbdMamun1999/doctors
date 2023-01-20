import store from "@/app/store";
import { Provider } from "react-redux";
import Navbar from "../Navbar/Navbar";

const Layouts = ({ children }) => {
  return <Provider store={store}>
          <div>
            <Navbar />
              <main>{children}</main>
          </div>
        </Provider>;
};

export default Layouts;
