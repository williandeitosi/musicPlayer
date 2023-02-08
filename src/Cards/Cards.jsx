import "./cards.css";
import play from "../assets/play.png";
import pause from "../assets/pause.png";
import back from "../assets/play-back.png";
import next from "../assets/play-forward.png";
import music from "../assets/music/music.mp3";
import { useState } from "react";

function Cards() {
  const [imagem, setimagem] = useState(play);
  // criei uma variável iniciando com null
  let interval = null;
  const [totalTime, setTotalTime] = useState("03:40");
  const [musicDuration, setMusicDuration] = useState("00:00");

  function segundosParaMinutos(segundos) {
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;

    if (campoSegundos < 10) {
      campoSegundos = "0" + campoSegundos;
    }
    return campoMinutos + ":" + campoSegundos;
  }

  function progressBar() {
    let tracker = document.getElementById("trackers");
    let tracker2 = document.getElementById("trackers2");
    // pego o elemento audio...
    const music = document.getElementById("music");

    setTotalTime(segundosParaMinutos(Math.floor(music.duration)));

    setInterval(() => {
      setMusicDuration(segundosParaMinutos(Math.floor(music.currentTime)));
    }, 100);

    // verifico se a variável é null
    // se for é porque estamos iniciando o audio dando play
    // então quero q a barra comece a ser repetida
    if (interval == null) {
      interval = setInterval(() => {
        let meuCalculoFormatado =
          Math.floor((music.currentTime / music.duration) * 100) + "%";

        tracker.style.width = meuCalculoFormatado;

        tracker2.style.width = meuCalculoFormatado;
      }, 100);

      console.log(music.currentTime);
      console.log(music.duration);
    } else {
      // caso não seja null eu quero remover o interval
      // sinal que dei pause então não quero que a barra aumente
      clearInterval(interval);
    }
  }

  function changeImg() {
    progressBar();
    const music = document.getElementById("music");
    setimagem((img) => (img === play ? pause : play));

    // let tempoDecorrido = document.getElementsByClassName("last-time");
    // tempoDecorrido.textContent = music.currentTime;

    return music.paused ? music.play() : music.pause();
  }

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
            <img src={back} alt="back" />
            <img onClick={changeImg} src={imagem} alt="Play and Pause" />
            <img src={next} alt="next" />
          </div>

          <div className="track-time">
            <div className="tracker"></div>
            <div id="trackers" className="trackers tracker-att"></div>

            <div className="timer">
              <div className="last-time">{musicDuration}</div>
              <div className="total-time">{totalTime}</div>
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
            <img src={back} alt="back" />
            <img onClick={changeImg} src={imagem} alt="Play and Pause" />
            <img src={next} alt="next" />
          </div>

          <div className="track-time">
            <div className="tracker-2"></div>
            <div id="trackers2" className="tracker-att"></div>

            <div className="timer">
              <div className="last-time">{musicDuration}</div>
              <div className="total-time">{totalTime}</div>
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
            <img onClick={changeImg} src={imagem} alt="" />
            <img src={next} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export { Cards };
