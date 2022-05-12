import './App.css';
import CreateCard from './components/CreateCard';
import Header from './components/Header';


//IMPORTAÇAO DOS COMPONENTS QUE SERAO USADOS NA PRIMEIRA PAGINA.


function App() {
  return (
    <div className="App">
      <Header />
      <CreateCard />
    </div>
  );
}

export default App;
