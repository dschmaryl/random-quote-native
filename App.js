import React from 'react';
import axios from 'axios';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert
} from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: 'Retrieving a random quote...',
      author: ''
    };
  }

  fetchQuote() {
    const url = 'https://andruxnet-random-famous-quotes.p.mashape.com';
    const config = {
      headers: {
        'X-Mashape-Key': 'SmLRUtwLsPmshE0v9lpkDNiikRdup1qnUJRjsn6Mt75bdzkRfz',
        'Content-Type': 'application/x-www-form-urlencoded',
        Accept: 'application/json'
      }
    };
    axios.get(url, config).then(response => {
      this.setState({
        quote: response.data.quote,
        author: '- ' + response.data.author
      });
    });
  }

  componentDidMount() {
    this.fetchQuote();
  }

  render() {
    const color = [
      '#6b5a7a',
      '#7a92a9',
      '#536896',
      '#6f2828',
      '#05729b',
      '#175053',
      '#17324f',
      '#4f0d3c',
      '#5e114c'
    ][Math.floor(Math.random(0, 3) * 9)];

    return (
      <View style={[styles.container, { backgroundColor: color }]}>
        <View style={styles.quoteBox}>
          <Text style={[styles.quoteText, { color: color }]}>
            {this.state.quote}
          </Text>
          <Text style={[styles.authorText, { color: color }]}>
            {this.state.author}
          </Text>
          <TouchableHighlight onPress={() => this.fetchQuote()}>
            <View style={[styles.newQuoteButton, { backgroundColor: color }]}>
              <Text style={styles.newQuoteButtonText}>New Quote</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  quoteBox: {
    width: 340,
    padding: 10,
    paddingBottom: 30,
    backgroundColor: '#fff',
    borderRadius: 6,
    alignItems: 'center'
  },
  quoteText: {
    fontSize: 30
  },
  authorText: {
    fontSize: 24,
    fontStyle: 'italic',
    paddingTop: 20,
    paddingBottom: 50
  },
  newQuoteButton: {
    padding: 10,
    borderRadius: 4
  },
  newQuoteButtonText: {
    color: '#fff',
    fontSize: 20
  }
});
