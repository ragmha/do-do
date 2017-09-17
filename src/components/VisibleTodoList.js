import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleTodo } from '../actions';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers';

const mapStateToProps = (state, { match }) => ({
  todos: getVisibleTodos(state, match.params.filter || 'all'),
});

/*
const mapDispatchToProps = dispatch => ({
  onTodoClick(id) {
    dispatch(toggleTodo(id));
  },
});
*/

const VisibleTodoList = withRouter(
  connect(mapStateToProps, { onTodoClick: toggleTodo })(TodoList)
);

export default VisibleTodoList;
