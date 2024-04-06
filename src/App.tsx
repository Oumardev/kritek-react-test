import { Provider } from 'react-redux';
import { store } from './store';
import Article from './page/article';

function App() {

  return (
    <Provider store={store}>
      <Article />
    </Provider>
  )
}

export default App
