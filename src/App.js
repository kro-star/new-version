import {useState} from 'react';
import './App.css';
import ProductList from './components/ProdList/ProdList';
import ItemField from './components/itemFields/ItemField';
import { useDispatch } from 'react-redux';
import { addProduct } from './store/productSlice';

function App() {
  const [namePr, setNamePr] = useState('');
  const [price, setPrice] = useState(0);

  const dispatch = useDispatch();

  const addProd = () => {
    dispatch(addProduct({namePr, price}));
    setNamePr('');
    setPrice(0);
  }

  return (
    <>
      <ItemField price={price} namePr={namePr} setPrice={setPrice} setNamePr={setNamePr} addProduct={addProd}/>
      <ProductList setPrice={setPrice} setNamePr={setNamePr} />
    </>
  );
}

export default App;
