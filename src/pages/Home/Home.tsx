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
        <p>You're the bank. How will you reimagine</p>
      </div>
      <div className="p-2">
        <h2>Hackthon APIs Overview</h2>
        <div className="home-subtitle">
        <p>
          If you're visiting this page, you're likely here because you're
          searching for a random sentence. Sometimes a random word just isn't
          enough, and that is where the random sentence generator comes into
          play. By inputting the desired number, you can make a list of as many
          random sentences as you want or need. Producing random sentences can
          be helpful in a number of different ways.
        </p>
      </div>
      </div>
      <hr />
      <Stack direction="horizontal" gap={2} className="home-text">
        <div className="p-2">
          <h2>What is Nessie?</h2>
          <p>
            If you're visiting this page, you're likely here because you're
            searching for a random sentence. Sometimes a random word just isn't
            enough, and that is where the random sentence generator comes into
            play. By inputting the desired number, you can make a list of as
            many random sentences as you want or need. Producing random
            sentences can be helpful in a number of different ways.
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
            If you're visiting this page, you're likely here because you're
            searching for a random sentence. Sometimes a random word just isn't
            enough, and that is where the random sentence generator comes into
            play. By inputting the desired number, you can make a list of as
            many random sentences as you want or need. Producing random
            sentences can be helpful in a number of different ways.
          </p>
        </div>
      </Stack>
      <RedirectButton url={`/getStarted`} />
    </Stack>
  </div>
);

export default Home;