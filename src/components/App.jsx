import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
import { SubTitle } from './SubTitle/Subtitle';
import { useState } from 'react';

import {
  countPositiveFeedbackPercentage,
  countTotal,
} from './Utils/CalculateFeedback';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleChoose = e => {
    const { name } = e.currentTarget;
    switch (name) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const total = countTotal(good, neutral, bad);
  const options = ['good', 'neutral', 'bad'];
  const positiveFeedback = countPositiveFeedbackPercentage(total, good);
  return (
    <Section title="Please leave your feedback">
      <FeedbackOptions options={options} onLeaveFeedback={handleChoose} />
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
