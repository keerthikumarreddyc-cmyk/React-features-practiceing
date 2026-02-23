import Img from "./components/Img";
import User from "./components/user";
import "./App.css";

function App() {
  return (
    <div>
      <Img />
      <User name="chinnu" role="frontend" location="chicago" />
      <User name="pinnu" role="backend" location="newyork" />
      <User name="deepak" role="ui" location="france" />
      <User name="rakesh" role="fullstack" location="london" />
    </div>
  );
}

export default App;
