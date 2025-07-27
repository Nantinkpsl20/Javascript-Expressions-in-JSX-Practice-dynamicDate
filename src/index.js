//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.
//E.g.
//Created by Angela Yu.
//Copyright 2019.
import React from "react";
import ReactDOM from "react-dom";

const fname = "Nantin";
const lname = "Kapsali";

/*second way */
const currentDate = new Date();
console.log(currentDate);
const year = currentDate.getFullYear();

const currentYear = new Date().getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {`${fname} ${lname}`}</p>
    <p>Copyright {currentYear}.</p>
    <p>Copyright {year} in 2 steps.</p>
  </div>,
  document.getElementById("root")
);
