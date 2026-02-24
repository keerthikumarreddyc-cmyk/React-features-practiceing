import Img from "./components/Img";
import User from "./components/user";
import "./App.css";
import Profile from "./components/card";

function App() {
  return (
    <div>
      <Img />
      <User gname="chinnu" role="frontend" location="chicago" />
      <User name="pinnu" role="backend" location="newyork" />
      <User name="deepak" role="ui" location="france" />
      <User name="rakesh" role="fullstack" location="london" />

      <Profile name="chinnu" role="frontend" location="chicago" />
      <Profile name="pinnu" role="backend" location="newyork" />
      <Profile name="deepak" role="ui" location="france" />
    </div>
  );
}

export default App;
