import PropTypes from 'prop-types';

import './Statistics.css';
import Notification from '../Notification'

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
    return <>
        {total > 0 && (
    <div>
        <p>Good: {good }</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad }</p>
        <p>Total: { total}</p>
        <p>Positive Percentage: { positivePercentage}%</p>
    </div>
        )}
        {total === 0 && <Notification message="No feedback given"/>}
            
        </>
}
    
Statistics.propTypes = {
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
    total: PropTypes.number,
    positivePercentage: PropTypes.number,

}

export default Statistics;
