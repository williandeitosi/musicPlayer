import "./cards.css";
import hans from "../assets/hans.png";
import play from "../assets/play.png";
import back from "../assets/play-back.png";
import next from "../assets/play-forward.png";

export default function Cards() {
  return (
    <div id="app">
      <div id="player-1" className="player">
        <div className="wrapper">
          <img
            className="tumb"
            src="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
            alt="img abstract"
          />

          <div className="info">
            <h1>Acorda Devinho</h1>
            <p>Banda Rocketseat</p>
          </div>

          <div className="controls">
            <img src={back} alt="" />
            <img src={play} alt="" />
            <img src={next} alt="" />
          </div>

          <div className="track-time">
            <div className="tracker"></div>

            <div className="timer">
              <div className="total-time">03:20</div>
              <div className="last-time">00:12</div>
            </div>
          </div>
        </div>
      </div>

      <div id="player-2" className="player">
        {/* <div className="wrapper">
          <img
            src="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80"
            alt=""
          />
        </div> */}
      </div>

      <div id="player-3" className="player">
        {/* <div className="wrapper">
          <img
            src="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=536&q=80"
            alt=""
          />
        </div> */}
      </div>
    </div>
  );
}
