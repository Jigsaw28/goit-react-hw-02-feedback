// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import { Container } from './App.styled';
import { Component } from 'react';
import { Statistics } from './Statistics/Statisctics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleCounterFeedback = ({ target: { name } }) => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.bad + this.state.good + this.state.neutral;
  };

  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) {
      return 0;
    }
    const positiveFeedback =
      (this.state.good * 100) / this.countTotalFeedback();
    return Math.round(positiveFeedback);
  };

  render() {
    return (
      <Container>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.handleCounterFeedback}
          />
        </Section>
        <Section title={'Statistics'}>
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback()}
              positivePercent={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'There is feedback'} />
          )}
        </Section>
      </Container>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func,
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercent: PropTypes.number.isRequired,
};
