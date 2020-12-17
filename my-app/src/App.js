import React, { useState } from 'react';
import Section from './feedback/Section';
import './feedback/feedback.css';
import FeedbackOptions from './feedback/FeedbackOptions';
import Statistics from './feedback/Statistics';
import Notification from './feedback/Notification';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const valueKeys = { good, neutral, bad };

  const changeValueState = e => {
    const name = e.target.name;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };
  const countTotalFeedback = () => {
    return Object.values(this.state).reduce((a, b) => a + b, 0);
  };
  const countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };
  // render() {
  //   const { good, neutral, bad } = this.state;
  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={changeValueState}
        ></FeedbackOptions>
      </Section>
      <Section title="Statistics">
        {this.countTotalFeedback() === 0 ? (
          <Notification message="No feedback given"></Notification>
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          ></Statistics>
        )}
      </Section>
    </>
  );
  // }
}

export default App;
