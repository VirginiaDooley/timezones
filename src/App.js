import React from 'react';
import './App.css';

class App extends React.Component {

  state = {
    current_timezone: 'London',
    timezones_list: []
  }

  componentDidMount() {
    this.getTimeZones()
  }

  getTimeZones = () => {
      fetch('http://api.timezonedb.com/v2/list-time-zone?key=XWSLLPX5RMIZ&format=json&zone=Europe\/*')
        .then(function(response) {
          return response.json()
        })
        .then((response) => {
          this.setState({
            timezones_list: response.zones
          })
        })
    }

    renderTimeZones = () => {
      let {timezones_list} = this.state
      const list = timezones_list.map((timezone, index) => {
        return (
          <li key={index} onClick={() => this.onClick(timezone.zoneName)}>{timezone.zoneName}</li>
        )
      })
      return list
    }

    onClick = (zone) => {

      this.setState({
        current_timezone: zone

      })
    }


  render () {
      console.log(this.state.timezones_list)
    return (
      <div>
        {this.state.current_timezone}
        <ol>
          {this.renderTimeZones()}
        </ol>
      </div>
    )

  }
}

export default App;
