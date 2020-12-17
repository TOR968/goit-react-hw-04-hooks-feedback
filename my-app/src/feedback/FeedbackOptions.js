import PropTypes from 'prop-types';

function FeedbackOptions({ options, onLeaveFeedback }) {
  return Object.keys(options).map(item => (
    <button type="button" name={item} key={item} onClick={onLeaveFeedback}>
      {item[0].toUpperCase() + item.slice(1)}
    </button>
  ));
}
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
