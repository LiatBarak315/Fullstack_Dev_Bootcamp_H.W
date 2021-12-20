import "./App.css";
import Buttons from "./Buttons";

function App() {
  return (
    <div className="App">
      <Buttons content="Important" bold="true" />
      <Buttons content="Not Important" />
    </div>
  );
}

export default App;
