import { createStore} from 'redux';
import reducer from './reducer';
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  const { rules } = store.getState();
  localStorage.setItem('ferengi', JSON.stringify(rules))
});
export default store