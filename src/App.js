import React, { useState } from "react";
import "./styles.css";

const listaDePriyanshu =
  "https://open.spotify.com/playlist/6P74XKbFXo4mrAXR3JonRr?si=mTE5Jh6oQESlh-jHsNWA6Q";

const desiRaps =
  "https://open.spotify.com/playlist/3YAdiTBUQsSgw8PcQmXcDc?si=_Sq8I7fuR2660fD8g-yiGw";

const priyanshu = "https://devpriyanshu.netlify.app";

const songs = {
  hindi: [
    {
      name: "Kadam",
      artist: "Prateek Kuhad",
      link:
        "https://open.spotify.com/track/6q7bXTv3yBedHblKRoC5uu?si=Lavsn1_VTFGmcUPAMOYRFA"
    },
    {
      name: "Chamba Kitni Durr",
      artist: "Akansha Bhandari",
      link:
        "https://open.spotify.com/track/0ZwygHOeb6Y8keze2QUQMJ?si=KE4WRpHSSXeivcE7d8aRdQ"
    },
    {
      name: "Rung",
      artist: "Shamoon Ismail",
      link:
        "https://open.spotify.com/track/5qlsGohL4JSjYFYnCsljHM?si=s8RiRxOoQGuQE1JcznD-NA"
    }
  ],
  western: [
    {
      name: "Twisted",
      artist: "Missio",
      link:
        "https://open.spotify.com/track/4TQcARE7Fd58akNhr3N7AE?si=5aD9LaYaSmGT5xaZjcPvTw"
    },
    {
      name: "Panic Room",
      artist: "Au/Ra",
      link:
        "https://open.spotify.com/track/7uUahoeqGNRMbpdeiLj1rS?si=vo9hrqTCT8imKZR6epsHrQ"
    },
    {
      name: "If I Killed Someone For You",
      artist: "Alec Benjamin",
      link:
        "https://open.spotify.com/track/0WHi11uzahqpEtPGYCW6oQ?si=n8Zhg5d7RjSiBj-DV-n_6Q"
    }
  ],
  raps: [
    {
      name: "101",
      artist: "Seedhe Maut",
      link:
        "https://open.spotify.com/track/1oLlXjLd8oopIxpoWu6bHN?si=ly44UOPOR_i9-oCtUES1yg"
    },
    {
      name: "Untitled",
      artist: "KR$NA",
      link:
        "https://open.spotify.com/track/2Yrl9A9VQg7QoCxeR9ktnn?si=R2GGZgR9T0SCUvZngkidqQ"
    },
    {
      name: "Shanti",
      artist: "Sammad",
      link:
        "https://open.spotify.com/track/6nyVcDNICXdPard01xPKIi?si=PzZ2sSENTTOkSNZhAcvp7w"
    }
  ]
};

const songsRecommended = Object.keys(songs);

export default function App() {
  let [songName, setSongName] = useState("hindi");
  function btnClickHandler(genre) {
    setSongName(genre);
  }

  return (
    <div className="App">
      <header>
        <h1 className="heading">
          <span role="img" aria-label="music">
            🎶
          </span>
          Good Music
        </h1>
        <h2 className="description">
          Everyone needs a friend who can recommend some good music, I'll be
          that one for you!
        </h2>
      </header>
      <div className="container">
        {songsRecommended.map(function (genre) {
          return (
            <button className="buttons" onClick={() => btnClickHandler(genre)}>
              {genre}
            </button>
          );
        })}
      </div>
      <div>
        <ul className="result">
          {songs[songName].map(function (song) {
            return (
              <li>
                <h2>{song.name}</h2>
                <h4>{song.artist}</h4>
                <p>
                  <a href={song.link} target="_blank" rel="noopener noreferrer">
                    Listen Here
                  </a>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <footer>
        <p>I manage some spotify playlists, heart them.</p>
        <button className="buttons">
          <a href={desiRaps}>desi raps</a>
        </button>
        <button className="buttons">
          <a href={listaDePriyanshu}>lista de Priyanshu</a>
        </button>
        <p>
          Made with{" "}
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          but coded by
          <a href={priyanshu}>Priyanshu</a>.
        </p>
      </footer>
    </div>
  );
}
