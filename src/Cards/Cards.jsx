import "./cards.css";
import hans from "../assets/hans.png";
import play from "../assets/play.png";
import back from "../assets/play-back.png";
import next from "../assets/play-forward.png";

export default function Cards() {
  return (
    <div id="app">
      <div id="player-1" className="player">
        <img src={hans} alt="" />
        <div>
          <h1>Acorda Devinho</h1>
          <p>Banda Rocketseat</p>
        </div>
        <div>
          <img src={back} alt="" />
          <img src={play} alt="" />
          <img src={next} alt="" />
        </div>
        <div></div>
      </div>

      <div id="player-2" className="player">
        teste 2
      </div>

      <div id="player-3" className="player">
        teste3
      </div>
    </div>
  );
}
