import React, { Component } from 'react';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import { Feedback_Options } from './components/FeedbackOptions/data';
import Statistics from './components/Statistics';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  handleFeedback = ({ target }) => {
    const { feedback } = target.dataset;
    this.setState((prevState) => ({ [feedback]: prevState[feedback] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    return total ? Math.round((good / total) * 100) : 0;
  }
    
    
  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    
  
    return (
      <div>
        <Section title='Please leave feedback'> 
        <FeedbackOptions options={Feedback_Options} onLeaveFeedback={this.handleFeedback} />
      </Section>
       
      <Section title='Statistics:'>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage} />
        </Section>
        
      </div>
     );
  }
}


export default App;

// options={} onLeaveFeedback={}

/* <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics> */