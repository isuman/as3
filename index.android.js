import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableHighlight
} from 'react-native';

export default class as3 extends Component {

  state = {
    name: '',
    message: "n/a",
    icon: 'openweathermap.org/img/w/10d.png',
    buttonText: false
  };

  _log() {
    console.log(this.state)
  }

  _handleName(event) {
    var name = event.nativeEvent.text;
    var appid = '2542a00155296171106963b93753fac7';

    fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + name + '&appid=' + appid)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          name: name,
          date1: responseJSON.list[0].dt_txt,
          weather1: responseJSON.list[0].weather[0].main,
          icon1: 'openweathermap.org/img/w/' + responseJSON.list[0].weather[0].icon + '.png',
          description1: responseJSON.list[0].weather[0].description,
          temp1: responseJSON.list[0].main.temp / 10,

          date2: responseJSON.list[9].dt_txt,
          weather2: responseJSON.list[9].weather[0].main,
          icon2: 'openweathermap.org/img/w/' + responseJSON.list[9].weather[0].icon + '.png',
          description2: responseJSON.list[9].weather[0].description,
          temp2: responseJSON.list[9].main.temp / 10,

          date3: responseJSON.list[18].dt_txt,
          weather3: responseJSON.list[18].weather[0].main,
          icon3: 'openweathermap.org/img/w/' + responseJSON.list[18].weather[0].icon + '.png',
          description3: responseJSON.list[18].weather[0].description,
          temp3: responseJSON.list[18].main.temp / 10,

          date4: responseJSON.list[27].dt_txt,
          weather4: responseJSON.list[27].weather[0].main,
          icon4: 'openweathermap.org/img/w/' + responseJSON.list[27].weather[0].icon + '.png',
          description4: responseJSON.list[27].weather[0].description,
          temp4: responseJSON.list[27].main.temp / 10,

          date5: responseJSON.list[36].dt_txt,
          weather5: responseJSON.list[36].weather[0].main,
          icon5: 'openweathermap.org/img/w/' + responseJSON.list[36].weather[0].icon + '.png',
          description5: responseJSON.list[36].weather[0].description,
          temp5: responseJSON.list[36].main.temp / 10

        });
        console.log(this.state.weather)
      })
      .catch((error) => {
        console.warn(error);
      });

    this.setState({
      name: name,
    },
      this._log
    );

  }

  _onPressIn(event) {
    this.setState({
      buttonText: true
    })
  }

  _onPressOut(event) {
    this.setState({
      buttonText: false
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ fontSize: 18, color: "green" }}>
            Weather City of
                </Text>
          <TextInput style={{ width: 100 }} onSubmitEditing={(event) => this._handleName(event)} />
          <Text style={styles.welcome}>
            {this.state.name}
          </Text>
          <Text>
            {this.state.date1}
          </Text>
          <Text>
            {this.state.weather1}
          </Text>
          <Image source={{ uri: 'http://' + this.state.icon, isStatic: true }}
            style={{ width: 75, height: 50 }} resizeMode='cover'>
          </Image>
          <Text>
            {this.state.description1}
          </Text>
          <Text>
            {this.state.temp1}
          </Text>

        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  button: {
    width: 200,
    height: 200,
    backgroundColor: 'green',
    justifyContent: 'center',
    textAlign: 'center'
  },
  blue: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('as3', () => as3);
