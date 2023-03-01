import React, { useState } from "react";
import "./App.css";
import Cart from "./Components/CartPage/cart";
import Main from "./Components/MainPage/main";
import { useSelector, useDispatch } from "react-redux";
import { cartData, data2Cart } from "./Components/Store/CounterSlice";
function App() {
  const dispatch = useDispatch();
  const [dataSet, setDataSet] = useState([]);
  const data = useSelector((state) => {
    return state.counter.Data;
  });

  const [value, setValue] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setValue(!value);
          // useEffect(() => {
          data.map((e, i) =>
            fetch(`https://fakestoreapi.com/products/+${e}`)
              .then((res) => res.json())
              .then((json) => {
                dataSet.push(json);
                setDataSet(dataSet);
              })
          );
          console.log(1);
          dispatch(data2Cart(dataSet));
          // }, [1]);
        }}
      >
        Cart
      </button>
      {value && <Main></Main>}

      {!value && <Cart></Cart>}
    </div>
  );
}

export default App;
