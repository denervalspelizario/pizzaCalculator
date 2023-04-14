
import './App.css';
import pizzaImage from './image/pizza.png'
import { useReducer } from 'react';

const stateInicial = {
  numeroPessoas: 0,
  fatiasPorPessoa: 0,
  fatiasPorPizza: 0,
};

const reducer = (state=stateInicial,action) => {
  
  switch(action.type){ 

    //case "NUMBER_OF_PEOPLE_CHANGE"
  }

}


function App() {

  const { state, dispatch } = useReducer( reducer, stateInicial)

  return (
    <div className="App">
      <div className='container'>
        
        <div className='container-image'> 
          <img src={pizzaImage} alt="#" />
          <h1>Pizza Calculator App</h1>
        </div>
        
        <div className='container-inputs'>
          <h1>1 pizza needed</h1>
          <label>Numero de Pessoas</label>
          <input 
            type='number' 
            min="1"
            max="50"
            placeholder='Numero de Pessoas'  
          />

          <label>Fatias por Pessoas</label>
          <input 
            type='number'
            min="1"
            max="50"
            placeholder='Fatias por Pessoas'  
          />

          <label>Total de fatias de Pizza</label>
          <input 
            type='number'
            min="1"
            max="50"
            placeholder='Total fatias de Pizza'  
          />
        </div>
      </div>
    </div>
  );
}

export default App;
