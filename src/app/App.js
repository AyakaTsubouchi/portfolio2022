import { Provider } from "react-redux";
import { store, persistor } from "app/store";
import { PersistGate } from "redux-persist/integration/react";
import _ from "lodash";

import "app/styles/App.css";
import Pages from "pages";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate
          loading={<div>loading persistor</div>}
          persistor={persistor}
        >
          <Pages />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
