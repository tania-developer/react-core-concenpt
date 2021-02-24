import logo from './logo.svg';
import './App.css';
import { getByPlaceholderText } from '@testing-library/react';

function App() {
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
        {
          products.map(pd => <Product prod={pd}></Product>)
        }
        {/* <Person name='Sakib'></Person>
        <Person name='Sakib'></Person>
        <Person name='Sakib'></Person>
        <Person name='Sakib'></Person>
        <Person name='Sakib'></Person> */}
      </header>
    </div>
  );
}

function Product(props) {
  console.log(props);
  const productStyle={
    width:'200px',
    height:'200px',
    backgroundColor:'gray',
    boxShadow:'2px 2px 5px red',
    color:'black',
    margin:'20px'
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
