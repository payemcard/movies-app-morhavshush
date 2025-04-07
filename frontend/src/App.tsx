import {Provider} from "react-redux";
import {store} from "./store/store";
import Routing from "./routes/app-routes";

function App() {
  return (
    <Provider store={store}>
      <div className="movies-app">
        <Routing />
      </div>
    </Provider>
  );
}

export default App;
