import logo from './logo.svg';
import './App.css';
import { getByPlaceholderText } from '@testing-library/react';
import { useState } from 'react';

function App() {
  const friends = ['kamal','jamal','salma','asad']
  const products = [
    {name:'photoShop', price:'$90'},
    {name:'Illustrator', price:'$90'},
    {name:'photoShop', price:'$90'},
    {name:'photoShop', price:'$90'},
    {name:'photoShop', price:'$90'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
        <ul>
          {
            friends.map(fname => <li>{fname}</li>)
          }
        </ul>
        {
          products.map(pd => <Product prod={pd}></Product>)
        }
        
      </header>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return(
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={()=> setCount(count-1)}>Decrease</button>
    </div>
  )
}

function Product(props) {
  console.log(props);
  const productStyle={
    width:'300px',
    height:'200px',
    backgroundColor:'lightgray',
    boxShadow:'2px 2px 5px gray',
    color:'black',
    margin:'20px',
  }
  const {name,price} = props.prod;
  console.log(name,price);
  return(
    <div style={productStyle}>
      <h3>name:{name}</h3>
      <h2>Price:{price}</h2>
    </div>
  )
  
}


export default App;
