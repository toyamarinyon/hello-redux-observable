import Ping from '../components/Ping';
import { ping } from '../redux/modules/ping';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  isPinging: state.isPinging
});

const mapDispachToProps = (dispatch) => ({
  ping: () => dispatch(ping())
});

const PingContainer = connect(
  mapStateToProps,
  mapDispachToProps
)(Ping);

export default PingContainer;
