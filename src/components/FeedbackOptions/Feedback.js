import PropTypes from 'prop-types';
import './Feedback.css';

const FeedBackButton = ({ feedback, onLeaveFeedback }) => {
    return (
            
        <button className="Button" type='button' data-feedback={feedback} onClick={onLeaveFeedback}>
            {feedback}
        </button>
    );
}

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return options.map((option) => <FeedBackButton key={option.toString()} feedback={option} onLeaveFeedback={onLeaveFeedback}/>)
}
   
FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string),
    onLeaveFeedback: PropTypes.func.isRequired,
}


export default FeedbackOptions;
