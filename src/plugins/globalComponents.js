
import BaseNav from "../components/Navbar/BaseNav";

const GlobalComponents = {
  install(app) {
    app.component("base-nav", BaseNav);
  },
};

export default GlobalComponents;
