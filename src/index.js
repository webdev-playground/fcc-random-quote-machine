import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [
        {
          quote:
            'Life isn’t about getting and having, it’s about giving and being.',
          author: 'Kevin Kruse',
        },
        {
          quote:
            'Whatever the mind of man can conceive and believe, it can achieve.',
          author: 'Napoleon Hill',
        },
        {
          quote: 'Strive not to be a success, but rather to be of value.',
          author: 'Albert Einstein',
        },
        {
          quote:
            'Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.',
          author: 'Robert Frost',
        },
        {
          quote:
            'I attribute my success to this: I never gave or took any excuse.',
          author: 'Florence Nightingale',
        },
        {
          quote: 'You miss 100% of the shots you don’t take.',
          author: 'Wayne Gretzky',
        },
        {
          quote:
            'I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.',
          author: 'Michael Jordan',
        },
        {
          quote:
            'The most difficult thing is the decision to act, the rest is merely tenacity.',
          author: 'Amelia Earhart',
        },
        {
          quote: 'Every strike brings me closer to the next home run.',
          author: 'Babe Ruth',
        },
        {
          quote:
            'Definiteness of purpose is the starting point of all achievement.',
          author: 'W. Clement Stone',
        },
        {
          quote:
            'We must balance conspicuous consumption with conscious capitalism.',
          author: 'Kevin Kruse',
        },
        {
          quote:
            'Life is what happens to you while you’re busy making other plans.',
          author: 'John Lennon',
        },
        {
          quote: 'We become what we think about.',
          author: 'Earl Nightingale',
        },
      ],
      currQuote: {
        text: 'We become what we think about.',
        author: 'Earl Nightingale',
      },
      colors: [
        '#16a085',
        '#27ae60',
        '#2c3e50',
        '#f39c12',
        '#e74c3c',
        '#9b59b6',
        '#FB6964',
        '#342224',
        '#472E32',
        '#BDBB99',
        '#77B1A9',
        '#73A857',
      ],
    };
    this.changeQuote = this.changeQuote.bind(this);
    this.getNewQuote = this.getNewQuote.bind(this);
    this.changeColors = this.changeColors.bind(this);
  }

  changeQuote() {
    const newQuote = this.getNewQuote(this.state.quotes);
    this.setState({
      currQuote: {
        text: newQuote.quote,
        author: newQuote.author,
      },
    });

    this.changeColors();
  }

  changeColors() {
    // Generate random RGB color
    const newColor = this.state.colors[
      Math.floor(Math.random() * this.state.colors.length)
    ];
    document.body.style.background = newColor;
  }

  getNewQuote() {
    const idx = Math.floor(Math.random() * this.state.quotes.length);
    return this.state.quotes[idx];
  }

  componentDidMount() {
    this.changeQuote();
  }

  render() {
    return (
      <div id="quote-box" className="container">
        <Quote
          author={this.state.currQuote.author}
          text={this.state.currQuote.text}
        />
        <Actions
          author={this.state.currQuote.author}
          text={this.state.currQuote.text}
          changeQuote={this.changeQuote}
        />
      </div>
    );
  }
}

class Quote extends React.Component {
  render() {
    const text = this.props.text;
    const author = this.props.author;

    return (
      <div id="quote">
        <div id="text">
          <h1>
            <i className="fa fa-quote-left"></i>
            {text}
          </h1>
        </div>
        <div id="author">
          <p>- {author}</p>
        </div>
      </div>
    );
  }
}

Quote.defaultProps = {
  text: '',
  author: '',
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

class Actions extends React.Component {
  render() {
    const author = this.props.author;
    const text = this.props.text;
    const tweetLink = `https://twitter.com/intent/tweet?text="${text}" ${author}`;
    const changeQuote = this.props.changeQuote;

    return (
      <div id="actions">
        <div className="row">
          <div id="tweet" className="col-auto mr-auto">
            <a
              id="tweet-quote"
              href={tweetLink}
              target="_blank"
              rel="noopener noreferrer" // security reasons: https://mathiasbynens.github.io/rel-noopener/
            >
              <button className="btn btn-primary">
                <i class="fa fa-twitter"></i>
              </button>
            </a>
          </div>
          <div id="quote-button" className="col-auto">
            <button
              id="new-quote"
              onClick={changeQuote}
              className="btn btn-primary"
            >
              New quote
            </button>
          </div>
        </div>
      </div>
    );
  }
}

Actions.defaultProps = {
  author: '',
  text: '',
  changeQuote: function() {},
};

Actions.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  changeQuote: PropTypes.func.isRequired,
};

ReactDOM.render(<QuoteBox />, document.getElementById('root'));
