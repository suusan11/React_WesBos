import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
        {
          "city": "New York",
          "growth_from_2000_to_2013": "4.8%",
          "latitude": 40.7127837,
          "longitude": -74.0059413,
          "population": "8405837",
          "rank": "1",
          "state": "New York"
        },
        {
          "city": "Los Angeles",
          "growth_from_2000_to_2013": "4.8%",
          "latitude": 34.0522342,
          "longitude": -118.2436849,
          "population": "3884307",
          "rank": "2",
          "state": "California"
        },
        {
          "city": "Chicago",
          "growth_from_2000_to_2013": "-6.1%",
          "latitude": 41.8781136,
          "longitude": -87.6297982,
          "population": "2718782",
          "rank": "3",
          "state": "Illinois"
        },
        {
          "city": "Houston",
          "growth_from_2000_to_2013": "11.0%",
          "latitude": 29.7604267,
          "longitude": -95.3698028,
          "population": "2195914",
          "rank": "4",
          "state": "Texas"
        },
        {
          "city": "Philadelphia",
          "growth_from_2000_to_2013": "2.6%",
          "latitude": 39.9525839,
          "longitude": -75.1652215,
          "population": "1553165",
          "rank": "5",
          "state": "Pennsylvania"
        },
        {
          "city": "Phoenix",
          "growth_from_2000_to_2013": "14.0%",
          "latitude": 33.4483771,
          "longitude": -112.0740373,
          "population": "1513367",
          "rank": "6",
          "state": "Arizona"
        },
        {
          "city": "San Antonio",
          "growth_from_2000_to_2013": "21.0%",
          "latitude": 29.4241219,
          "longitude": -98.49362819999999,
          "population": "1409019",
          "rank": "7",
          "state": "Texas"
        },
        {
          "city": "San Diego",
          "growth_from_2000_to_2013": "10.5%",
          "latitude": 32.715738,
          "longitude": -117.1610838,
          "population": "1355896",
          "rank": "8",
          "state": "California"
        },
        {
          "city": "Dallas",
          "growth_from_2000_to_2013": "5.6%",
          "latitude": 32.7766642,
          "longitude": -96.79698789999999,
          "population": "1257676",
          "rank": "9",
          "state": "Texas"
        },
        {
          "city": "San Jose",
          "growth_from_2000_to_2013": "10.5%",
          "latitude": 37.3382082,
          "longitude": -121.8863286,
          "population": "998537",
          "rank": "10",
          "state": "California"
        },
        {
          "city": "Austin",
          "growth_from_2000_to_2013": "31.7%",
          "latitude": 30.267153,
          "longitude": -97.7430608,
          "population": "885400",
          "rank": "11",
          "state": "Texas"
        },
        {
          "city": "Indianapolis",
          "growth_from_2000_to_2013": "7.8%",
          "latitude": 39.768403,
          "longitude": -86.158068,
          "population": "843393",
          "rank": "12",
          "state": "Indiana"
        },
        {
          "city": "Jacksonville",
          "growth_from_2000_to_2013": "14.3%",
          "latitude": 30.3321838,
          "longitude": -81.65565099999999,
          "population": "842583",
          "rank": "13",
          "state": "Florida"
        },
        {
          "city": "San Francisco",
          "growth_from_2000_to_2013": "7.7%",
          "latitude": 37.7749295,
          "longitude": -122.4194155,
          "population": "837442",
          "rank": "14",
          "state": "California"
        },
        {
          "city": "Columbus",
          "growth_from_2000_to_2013": "14.8%",
          "latitude": 39.9611755,
          "longitude": -82.99879419999999,
          "population": "822553",
          "rank": "15",
          "state": "Ohio"
        }
      ],
    }
  }

  // componentDidMount() {
  //   const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
  //   fetch(endpoint)
  //     .then(blob => blob.json())
  //     .then((data) => {
  //       this.setState((state) => {
  //         return { cities: state.cities.push(...data) }
  //       });
  //     });
  //   console.log(this.state.cities);
  // }

  displayMatches = (e) => {
    const suggestions = document.querySelector('.suggestions');
    const matchArray = findMatches(e.target.value, this.state.cities);
    const html = matchArray.map(place => {
      const regex = new RegExp(e.target.value, 'gi');
      const cityName = place.city.replace(regex, `<span className="hl">${e.target.value}</span>`);
      const stateName = place.state.replace(regex, `<span className="hl">${e.target.value}</span>`);
      return `
        <li>
          <span className="name">${cityName}, ${stateName}</span>
          <span className="population">${numberWithCommas(place.population)}</span>
        </li>
      `;
    }).join('');
    suggestions.innerHTML = html;
  }

  render() {
    console.log(this.state.cities);

    return (
      <div>
        <form className="search-form">
          <input type="text" className="search" placeholder="City or State" onChange={this.displayMatches} onKeyUp={this.displayMatches} />
          <ul className="suggestions">
            <li>Filter for a city</li>
            <li>or a state</li>
          </ul>
        </form>
      </div>
    );
  }
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

function findMatches(wordToMatch, cities) {
  return cities.filter(place => {
    const regex = new RegExp(wordToMatch, 'gi');
    return place.city.match(regex) || place.state.match(regex)
  });
}

ReactDOM.render(<App />, document.querySelector('#root'));