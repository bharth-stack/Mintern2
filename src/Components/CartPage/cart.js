import React, { Fragment } from "react";
import styles from "./cart.module.css";
import { useSelector } from "react-redux";

export default function Cart() {
  const data = useSelector((state) => {
    return state.counter.Data2;
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
            </div>
          </div>
        ))}
      </div>
    </Fragment>
  );
}
