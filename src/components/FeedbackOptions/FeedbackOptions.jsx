import { Box } from 'components/Box/Box';
import { Btn } from './FeedbackOptions.style';
import PropTypes from 'prop-types';
export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Box m={-3}>
      {options.map(e => (
        <Btn type="button" name={e} key={e} onClick={onLeaveFeedback}>
          {e}
        </Btn>
      ))}
    </Box>
  );
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
