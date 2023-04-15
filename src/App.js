
import './App.css';
import pizzaImage from './image/pizza.png'
import { useReducer, useMemo } from 'react'; // imprtando o useReducer

/* useReducer. 
   UseReducer é uma forma de implementar um redutor sem precisamos de toda a implementação que o Redux traz com ele.
*/

const stateInicial = { // array dados que será adicionado em state no reducer
  numeroPessoas: 0,
  fatiasPorPessoa: 0,
  fatiasPorPizza: 0,
};

const reducer = (state=stateInicial,action) => { // state recebe a array state inicial 
  
  switch(action.type){ 

    case "NUMEROS_PESSOAS_CHANGE": // se 
    return {
      ...state,
      numeroPessoas: action.payload,
    };

    case "FATIAS_POR_PESSOAS_CHANGE":
    return {
      ...state,
      fatiasPorPessoa: action.payload,
    };


    case "FATIAS_POR_PIZZA_CHANGE":
    return {
      ...state,
      fatiasPorPizza: action.payload,
    };


    default:
      return state;
  }

}


function App() {

  const [ state, dispatch ] = useReducer( reducer, stateInicial) // chamando o reducer e a array stateInicial

  console.log(state)

  const calcularResultado = useMemo(() => {

    const resultado = Math.ceil(state.numeroPessoas * state.fatiasPorPessoa) / state.fatiasPorPizza  // somando as states e dividindo por fatiasporPizza e retornando numero inteiro na const resultado

    if(isNaN(resultado) || resultado === Infinity){
      return;

    }
    return resultado;

  },[state.numeroPessoas, state.fatiasPorPessoa, state.fatiasPorPizza])

  return (
    <div className="App">
      <div className='container'>
        
        <div className='container-image'> 
          <img src={pizzaImage} alt="#" />
          <h1>Pizza Calculator App</h1>
        </div>
        
        <div className='container-inputs'>
          <h1>{`${calcularResultado} pizzas needed`}</h1>
          <label>Numero de Pessoas</label>
          <input 
            type='number' 
            min="1"
            max="50"
            placeholder='Numero de Pessoas' 
            value={state.numeroPessoas || 0} 
            onChange={(event) => 
              dispatch({
                type:"NUMEROS_PESSOAS_CHANGE", 
                payload: +event.target.value
              })
            }
          />

          <label>Fatias por Pessoas</label>
          <input 
            type='number'
            min="1"
            max="50"
            placeholder='Fatias por Pessoas'  
            value={state.fatiasPorPessoa || 0}
            onChange={(event) => 
              dispatch({
                type:"FATIAS_POR_PESSOAS_CHANGE", 
                payload: +event.target.value
              })
            }
          />

          <label>Total de fatias de Pizza</label>
          <input 
            type='number'
            min="1"
            max="50"
            placeholder='Total fatias de Pizza'  
            value={state.fatiasPorPizza  || 0} 
            onChange={(event) => 
              dispatch({
                type:"FATIAS_POR_PIZZA_CHANGE", 
                payload: +event.target.value
              })
            }
          />
        </div>
      </div>
    </div>
  );
}

export default App;
