import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import Detay from './Detay';

export default class List extends Component {
  state = { data: [] };
  componentWillMount() {
    Axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ data: response.data }));
  }
  componentDidMount() {

  }
  renderData() {
    return this.state.data.map((responseData, id) =>
      <Detay key={id} data={responseData} />
    );
  }
  render() {
    console.log(`gelen data = ${this.state}`);
    return (
      <ScrollView style={{ marginTop: 5 }}>
        {this.renderData()}
      </ScrollView>
    );
  }
}
