import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { SubTitle } from './SubTitle/Subtitle';

const initialValue = {
  good: 0,
  neutral: 0,
  bad: 0,
};
class App extends Component {
  state = { ...initialValue };
  handleChoose = e => {
    const { name } = e.currentTarget;
    this.setState(p => ({ [name]: p[name] + 1 }));
  };
  countTotalFeedback = () =>
    Object.values(this.state).reduce(
      (previousvalue, currentValue) => previousvalue + currentValue,
      0
    );
  countPositiveFeedbackPercentage = (total, opinion) =>
    total === 0 ? '0%' : `${Math.floor((opinion / total) * 100)}%`;

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = this.countPositiveFeedbackPercentage(total, good);
    return (
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleChoose}
        />
        <SubTitle title="Statistics" />

        {total === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positiveFeedback}
          />
        )}
      </Section>
    );
  }
}
export default App;
