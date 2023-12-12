import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results) {
    return (
      <div className="Results">
        <div class="row">
          <div class="Word col-md-6">
            <h2>{props.results.word}</h2>
          </div>
          <div class="Sound col-md-6">
            <div>
              {props.results.phonetics.map(function (phonetics, index) {
                return (
                  <div key={index}>
                    <Phonetics phonetic={phonetics} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <section>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meaning meaning={meaning} />
              </div>
            );
          })}
        </section>
      </div>
    );
  } else {
    return null;
  }
}
