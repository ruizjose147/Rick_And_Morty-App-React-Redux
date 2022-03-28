import { Personajes } from './components/Personajes';

import { Provider } from 'react-redux';
import generateStore from './redux/store';
import NavBar from './components/NavBar';

function App() {
  
  const store = generateStore()

  return (
    <Provider store={store}>
      <NavBar/>
       <Personajes />
    </Provider>
  );
}

export default App;