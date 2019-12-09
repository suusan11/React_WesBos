import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      checkboxes: [],
      lastChecked: '',
    }
  }

  componentDidMount() {
    this.setState({
      checkboxes: document.querySelectorAll('.inbox input[type="checkbox"]')
    })
  }

  handleCheck = (e) => {
    console.log(e);
    const target = e.target;
    let inBetween = false;
    if (e.shiftKey && target.checked) {
      this.state.checkboxes.forEach(checkbox => {
        if (checkbox === target || checkbox === this.state.lastChecked) {
          inBetween = !inBetween;
        }
        if (inBetween) {
          checkbox.checked = true;
        }
      })
    }
    this.setState({ lastChecked: target });
  }

  render() {
    this.state.checkboxes.forEach(checkbox => checkbox.addEventListener('click', this.handleCheck));
    return (
      <div>
        <div className="inbox">
          <div className="item">
            <input type="checkbox" />
            <p>This is an inbox layout.</p>
          </div>
          <div className="item">
            <input type="checkbox" />
            <p>Check one item</p>
          </div>
          <div className="item">
            <input type="checkbox" />
            <p>Hold down your Shift key</p>
          </div>
          <div className="item">
            <input type="checkbox" />
            <p>Check a lower item</p>
          </div>
          <div className="item">
            <input type="checkbox" />
            <p>Everything in between should also be set to checked</p>
          </div>
          <div className="item">
            <input type="checkbox" />
            <p>Try to do it without any libraries</p>
          </div>
          <div className="item">
            <input type="checkbox" />
            <p>Just regular JavaScript</p>
          </div>
          <div className="item">
            <input type="checkbox" />
            <p>Good Luck!</p>
          </div>
          <div className="item">
            <input type="checkbox" />
            <p>Don't forget to tweet your result!</p>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));