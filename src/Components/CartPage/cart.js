import React, { Fragment, useState, useEffect } from "react";
import styles from "./cart.module.css";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const [dataSet, setDataSet] = useState([]);
  const data = useSelector((state) => {
    return state.counter.Data2;
  });
  // useEffect(() => {
  //   data.map((e, i) =>
  //     fetch(`https://fakestoreapi.com/products/+${e}`)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         dataSet.push(json);
  //         setDataSet(dataSet);
  //       })
  //   );
  // }, [1]);
  // console.log(dataSet);
  return (
    <Fragment>
      <div className={styles.section}>
        {data.map((e, i) => (
          <div key={i} className={styles.section_2}>
            <img className={styles.Image} alt={"img"} src={e.image}></img>
            <div>
              <h2>{e.title}</h2>
              <h3>{e.price}</h3>
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
