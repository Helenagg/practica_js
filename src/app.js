/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  console.log("Hello Rigo from the console!");
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let excuse;
  let selectWho = who[Math.floor(Math.random() * 4)];
  let selectWhat = what[Math.floor(Math.random() * 4)];
  let selectWhen = when[Math.floor(Math.random() * 4)];
  excuse = selectWho + " " + selectWhat + " " + selectWhen;
  document.querySelector("#excuse").innerHTML = excuse;
};
