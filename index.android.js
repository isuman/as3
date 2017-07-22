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
    name: 'CAMT',
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

    fetch('http://api.openweathermap.org/data/2.5/weather?q=' + name + '&appid=' + appid)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({
          name: name,
          weather: responseJSON.weather[0].main,
          icon: 'openweathermap.org/img/w/' + responseJSON.weather[0].icon + '.png'
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
        <Text style={{ fontSize: 18, color: "green" }}>
          Your name
                </Text>
        <TextInput style={{ width: 100 }} onSubmitEditing={(event) => this._handleName(event)} />
        <Text style={styles.welcome}>
          Hello {this.state.name}
        </Text>
        <Text>
          {this.state.weather}
        </Text>
        <Image source={{ uri: 'http://' + this.state.icon, isStatic: true }}
          style={{ width: 300, height: 200 }} resizeMode='cover'>
        </Image>

        <TouchableHighlight onPressIn={(event) => this._onPressIn(event)}
          onPressOut={(event) => this._onPressOut(event)}>
          <View>
            <Text style={styles.button}>
              {this.state.buttonText ? '...' : 'Touch me here'}
            </Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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
    textAlign:'center'
  },
  blue: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center'
  }
});

AppRegistry.registerComponent('as3', () => as3);
