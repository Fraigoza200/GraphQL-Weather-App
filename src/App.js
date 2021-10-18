import './App.css';
import Home from './Pages/Home';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client'

function App() {
  return (
    <div className="App">
     <Home />
    </div>
  );
}

export default App;
