import React from "react";
import { useState } from "react";

export const Events = () => {
  const [change, setChange] = useState("");

  let message = "EVENT BASED PROGRAM";

  const handleClick = () => {
    alert("Btn Clicked");
  };
  const handleClear = (msg) => {
    alert(msg);
  };

  const handleChange = (setChange) => {
    console.log(setChange.target);

    message = "REACT";
  };

  return (
    <div className="container text-center mt-4">
      <h1>{message}</h1>
      <button onClick={handleClick} className="btn btn-success">
        Click
      </button>
      <button
        onClick={() => handleClear("Clear Btn Clicked")}
        className="btn btn-danger"
      >
        Clear
      </button>
      <button onClick={handleChange} className="btn btn-dark">
        Change
      </button>
    </div>
  );
};

export default Events;

//! message console'da guncellendigini ancak DOM'da guncellenmedigini gorduk.
//* Bunun sebebi REACT'in aksi belirtilmedigi surece elementleri
//* static olarak kabul etmesinden kaynaklanir.

//* React bunu DOM islemlerini minimize etmek icin yapmaktadir.
//* REACT'a hangi elementleri interaktif oldugu belirtilmelidir.
//! React'a elementlerin interaktif oldugunu belirtmek icin state'ler kullanilir.
//! State, elementlerin degisiklik durumlarini tutan nesnelerdir.
//? ReactJs'de state'leri kullanmak icin  2 ayri Component yapisi bulunmaktadir.
//? 1. Statefull Classes (Class Components).
//? 2. Hooks (Functional Components).

//?Biz su ana kadar uygulamalarimizda Fonksiyonel Component'leri kullandik.
//? Yaygin kullanim Fonksiyonel Component'lerdir.


