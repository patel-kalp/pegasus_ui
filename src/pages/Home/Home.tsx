import Stack from "react-bootstrap/Stack";
import RedirectButton from "../../components/RedirectButton";
import yeti from '../../static/yeti.png';
import nessieSnake from '../../static/nessie_snake.png';
import "./Home.css";

const Home = () => (
  <div className="home-container">
    <Stack direction="vertical" gap={5}>
      <div className="p-2 home-title">
        <h1>Capital One Hackathon APIs</h1>
        <p>You're the bank. How will you reimagine?</p>
      </div>
      <div className="p-2">
        <h2>Hackthon APIs Overview</h2>
        <div className="home-subtitle">
        <p>
        Welcome Our Hackathon APIs give you access to a multitude of real public-facing data - such as ATM and bank branch locations - along with mock customer account data. Use HTTP requests to set up peer-to-peer transactions, simulate a weekly paycheck, or even schedule bills for customers! This is all structured in a way that resembles how we actually run things here at Capital One.
        </p>
      </div>
      </div>
      <hr />
      <Stack direction="horizontal" gap={2} className="home-text">
        <div className="p-2">
          <h2>What is Nessie?</h2>
          <p>
          Nessie is Capital One’s Hackathon REST API that gives you access to a multitude of real public-facing data - such as ATM and bank branch locations - along with mock customer account data. Use HTTP requests to set up peer-to-peer transactions, simulate a weekly paycheck, or even schedule bills for customers! This is all structured in a way that resembles how we actually run things here at Capital One.
          </p>
        </div>
        <div className="p-2">
          <img src={nessieSnake} alt="Yeti" />
        </div>
      </Stack>
      <hr />
      <Stack direction="horizontal" gap={2} className="home-text">
        <div className="p-2">
          <img src={yeti} alt="Yeti" />
        </div>
        <div className="p-2">
          <h2>What is Yeti?</h2>
          <p>
          Nessie is Capital One’s Hackathon REST API that gives you access to a multitude of real public-facing data - such as ATM and bank branch locations - along with mock customer account data. Use HTTP requests to set up peer-to-peer transactions, simulate a weekly paycheck, or even schedule bills for customers! This is all structured in a way that resembles how we actually run things here at Capital One.
          </p>
        </div>
      </Stack>
      <RedirectButton url={`/getStarted`} />
    </Stack>
  </div>
);

export default Home;