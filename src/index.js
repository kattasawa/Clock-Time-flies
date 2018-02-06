import React from "react"
import ReactDOM from "react-dom"
import "./index.css"

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval (
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date ()
    });
  }

  handleClickPause = () => {
    clearInterval(this.timerID)
  }

  handleClickRun = () => {
    this.timerID = setInterval (
      () => this.tick(),
      1000
    );
  }



  render() {
    return (
      <div>
        {/* <h1>Hello, world!</h1> */}
        <div className="clock-box" >
          <h1> {this.state.date.toLocaleTimeString()} </h1>
        </div>
        <div className="buttons-container">
          <button onClick={this.handleClickPause}>
            PAUSE
          </button>
          <button onClick={this.handleClickRun}>
            RUN
          </button>
        </div>
      </div>
    )
  }

}

ReactDOM.render(
  <Clock />,
  document.getElementById("root")
);
