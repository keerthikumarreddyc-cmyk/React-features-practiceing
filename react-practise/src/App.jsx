import User from "./components/user";
import user1 from "./assets/user1.png";
import user2 from "./assets/user2.avif";
import user3 from "./assets/user3.jpg";
import "./App.css";

function App() {
  return (
    <header>
      <div>
        <h1>Team Member</h1>
        <div className="user-container">
          <User img={user1} name="chinnu" role="devloper" status="active" />
          <User img={user2} name="pinnu" role="automation" status="active" />
          <User img={user3} name="deepu" role="analayst" status="inactive" />
        </div>
      </div>
    </header>
  );
}
export default App;
