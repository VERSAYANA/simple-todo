import { connect } from 'react-redux';
import More from './More';
import { toggleCompletedFilter, clearCompleted } from '../../actionCreators';

const mapStateToProps = state => ({
	filter: state.filter
});

const mapDispatchToProps = {
	toggleCompletedFilter: () => toggleCompletedFilter(),
	clearCompleted: () => clearCompleted()
};

export default connect(mapStateToProps, mapDispatchToProps)(More);
