/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  var pronoun = ["the", "our"];
  var adj = ["great", "big"];
  var noun = ["jogger", "racoon"];
  var punto = [".com", ".net", ".us", ".io", ".etc"];

  for (let i = 0; i < pronoun.length; i++) {
    for (let t = 0; t < adj.length; t++) {
      for (let m = 0; m < noun.length; m++) {
        for (let p = 0; p < punto.length; p++)
          console.log(pronoun[i] + adj[t] + noun[m] + punto[p]);
      }
    }
  }
};
