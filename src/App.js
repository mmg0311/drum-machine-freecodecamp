import React from "react";
import "./styles.css";

const bankOne = [
  {
    keyCode: 81,
    keyTrigger: "Q",
    id: "Heater-1",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
  },
  {
    keyCode: 87,
    keyTrigger: "W",
    id: "Heater-2",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
  },
  {
    keyCode: 69,
    keyTrigger: "E",
    id: "Heater-3",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
  },
  {
    keyCode: 65,
    keyTrigger: "A",
    id: "Heater-4",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
  },
  {
    keyCode: 83,
    keyTrigger: "S",
    id: "Clap",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
  },
  {
    keyCode: 68,
    keyTrigger: "D",
    id: "Open-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
  },
  {
    keyCode: 90,
    keyTrigger: "Z",
    id: "Kick-n'-Hat",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
  },
  {
    keyCode: 88,
    keyTrigger: "X",
    id: "Kick",
    url: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
  },
  {
    keyCode: 67,
    keyTrigger: "C",
    id: "Closed-HH",
    url: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      id: ""
    };
  }
  playSound(soundId) {
    console.log(soundId);
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
  }
  clicked = index => {
    console.log("this", bankOne[index]);
    this.setState({
      ...this.state,
      note: bankOne[index],
      id: bankOne[index].id
    });
    let soundId = bankOne[index].keyTrigger;
    this.playSound(soundId);
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }
  handleKeyPress = e => {
    bankOne.map(note2 => {
      if (note2.keyCode === e.keyCode) {
        this.setState({
          ...this.state,
          note: note2,
          id: note2.id
        });
        let soundId = this.state.note.keyTrigger;
        this.playSound(soundId);
      }
      return note2;
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <div id="drum-machine">
          <div id="display">
            {this.state.note == null ? "" : this.state.note.id}
          </div>
          <div className="pads">
            {bankOne.map((item, index) => {
              return (
                <div
                  className="drum-pad"
                  key={index}
                  id={item.id}
                  onClick={() => this.clicked(index)}
                >
                  <audio className="clip" id={item.keyTrigger} src={item.url} />
                  {item.keyTrigger}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
