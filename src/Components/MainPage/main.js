import React, { Fragment, useEffect, useState } from "react";
import styles from "./main.module.css";
import { useSelector, useDispatch } from "react-redux";
import { cartData } from "../Store/CounterSlice";
export default function Main() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [1]);
  console.log(data);
  const dispatch = useDispatch();
  const overlayOpen = useSelector((state) => {
    return state.counter.Data;
  });
  return (
    <Fragment>
      <div className={styles.section}>
        {data.map((e, i) => (
          <div key={i} className={styles.section_2}>
            <img className={styles.Image} alt={"img"} src={e.image}></img>
            <div>
              <h2>{e.title}</h2>
              <h3>{e.price}</h3>
              {!overlayOpen.includes(i + 1) && (
                <button
                  onClick={() => {
                    dispatch(cartData(e.id));
                  }}
                >
                  Add To Cart
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
