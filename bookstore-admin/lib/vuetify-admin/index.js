import Admin from "./components/Core/Admin";
import Resource from "./components/Core/Resource";

import List from "./components/Actions/List";
import Show from "./components/Actions/Show";
import Create from "./components/Actions/Create";
import Edit from "./components/Actions/Edit";

import { Datagrid, TextField } from "./components/UI";

const components = [
  Admin,
  Resource,
  List,
  Show,
  Create,
  Edit,
  Datagrid,
  TextField
];

export default {
  install(Vue) {
    components.forEach(component => {
      Vue.component(`Va${component.name}`, component);
    });
  }
};
