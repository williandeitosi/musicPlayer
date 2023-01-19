import "./cards.css";
import play from "../assets/play.png";
import pause from "../assets/pause.png";
import back from "../assets/play-back.png";
import next from "../assets/play-forward.png";
import music from "../assets/music/music.mp3";

function PlayMusic() {
  let music = document.getElementById("music");
  music.play();
}
function PauseMusic() {
  let music = document.getElementById("music");
  music.pause();
}

function Cards() {
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
            <h1>Emotional Mess</h1>
            <p>Amy Lynn & the Honey Men</p>
          </div>

          <audio id="music" src={music}></audio>

          <div className="controls">
            <img onClick={PauseMusic} src={back} alt="" />
            {/* apenas para testar o pause */}
            <img onClick={PlayMusic} src={play} alt="" />
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
        <div className="wrapper">
          <div className="info-wrapper">
            <img
              className="tumb"
              src="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img abstract"
            />
            <div className="info">
              <h1>Emotional Mess</h1>
              <p>Amy Lynn & the Honey Men</p>
            </div>
          </div>

          <div className="controls-mini">
            <img src={back} alt="" />
            <img src={pause} alt="" />
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

      <div id="player-3" className="player">
        <div className="wrapper">
          <div className="info-wrapper">
            <img
              className="tumb"
              src="https://images.unsplash.com/photo-1567359781514-3b964e2b04d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
              alt="img abstract"
            />
            <div className="info">
              <h1>Emotional Mess</h1>
              <p>Amy Lynn & the Honey Men</p>
            </div>
          </div>
          <div className="controls-mini">
            <img src={back} alt="" />
            <img src={play} alt="" />
            <img src={next} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Cards };
