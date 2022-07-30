import PropTypes from 'prop-types';
export const SubTitle = ({ title }) => <h2>{title}</h2>;
SubTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
