import { useContext } from "react";

import { RouterStoreContext } from "./stores/RouterStore";
import { observer } from "mobx-react-lite";

export const Routes = observer(() => {
  const routerStore = useContext(RouterStoreContext);

  return null;
});
