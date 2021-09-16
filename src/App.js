import logo from './logo.svg';
import './App.css';
import React from 'react';

var is_a_commie = true;

function AnswerFunc() {
  if (is_a_commie) {
    document.body.style.backgroundColor = "red";
    
    return (
      <div>
        <video id="bgvid" playsinline autoPlay muted loop disablePictureInPicture>
          <source src="https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v1467811.webm" type="video/webm" />
          <source src="https://s3.amazonaws.com/freestock-transcoded-videos-prod/transcoded/freestock_v1467811.mp4" type="video/mp4" />
        </video>
        <div>
        <h1>Yes</h1>
        <a href="https://www.freestock.com/free-videos/realistic-3d-detailed-slow-motion-soviet-1467811">Image used under license from Freestock.com</a>
        </div>
      </div>
    );
  }
  else {
    document.body.style.backgroundColor = "blue";
    return (<h1>No</h1>);
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
