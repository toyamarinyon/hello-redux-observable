import Ping from '../components/Ping';
import { ping } from '../redux/modules/ping';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    isPinging: state.isPinging
  };
};

const mapDispachToProps = (dispatch) => {
  return {
    ping: () => dispatch(ping())
  };
};

const PingContainer = connect(
  mapStateToProps,
  mapDispachToProps
)(Ping);

export default PingContainer;
