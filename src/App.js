import logo from './logo.svg';
import './App.css';
import React from 'react';

var is_a_commie = false;

function AnswerFunc() {
  if (is_a_commie) {
    document.body.style.backgroundColor = "red";

    return (
      <div>
        <video id="bgvid" playsinline autoPlay muted loop disablePictureInPicture>
          <source src="https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v1467811.webm" type="video/webm" />
          <source src="https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v1467811.mp4" type="video/mp4" />
          <source src="https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v1467811.gif" type="video/gif" />
        </video>
        <div>
          <h1 class="commie">Yes</h1>
        </div>
        <div id="footer">
          <a class="commie" href="https://www.freestock.com/free-videos/realistic-3d-detailed-slow-motion-soviet-1467811">Image used under license from Freestock.com</a>
        </div>
      </div>
    );
  }
  else {
    document.body.style.backgroundColor = "blue";
    return (
      <div>
        <video id="bgvid" playsinline autoPlay muted loop disablePictureInPicture>
          <source src="https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v1467802.webm" type="video/webm" />
          <source src="https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v1467802.mp4" type="video/mp4" />
          <source src="https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v1467802.gif" type="video/gif" />
        </video>
        <div>
          <h1 class="not_commie">No</h1>
          <h2 class="not_commie">This is the best background video I've found lol</h2>
        </div>
        <div id="footer">
        <a href="https://www.freestock.com/free-videos/realistic-3d-detailed-slow-motion-radiation-1467802">Image used under license from Freestock.com</a>
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      {AnswerFunc()}
    </div>
  );
}

export default App;
