import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import bg from './bg.jpeg';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      colorValue: '#ffc600',
      name: '',
      style: '',
    }
  }

  handleUpdate = (e) => {
    const target = e.target;
    const suffix = target.dataset.sizing || '';

    this.setState({
      value: target.value,
      colorValue: target.value,
      name: `--${target.name}`,
      style: (target.value + suffix),
    })

    document.documentElement.style.setProperty(this.state.name, this.state.style);
  }

  render() {
    return (
      <div>
        <h2>Update CSS Variables with <span className='hl'>JS</span></h2>

        <div className="controls">
          <label htmlFor="spacing">Spacing:</label>
          <input id="spacing" type="range" name="spacing" min="10" max="200" value={this.state.value} data-sizing="px" onChange={this.handleUpdate} />

          <label htmlFor="blur">Blur:</label>
          <input id="blur" type="range" name="blur" min="0" max="25" value={this.state.value} data-sizing="px" onChange={this.handleUpdate} />

          <label htmlFor="base">Base Color</label>
          <input id="base" type="color" name="base" value={this.state.colorValue} onChange={this.handleUpdate} onMouseMove={this.handleUpdate} />
        </div>

        <img src={bg} alt="background" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));