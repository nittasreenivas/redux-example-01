import "./styles.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Counter from "./Components/Counter";
import Phone from "./Components/Phone";
export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Counter />
        <Phone />
      </div>
    </Provider>
  );
}
