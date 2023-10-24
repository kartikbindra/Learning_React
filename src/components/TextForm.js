import React, { useState } from "react";

export default function TextForm(props) {

  const [Text, SetText] = useState("");

  const to_type = (event) => {
    SetText(event.target.value);
  };
  const upper_case = () => {
    let NewText = Text.toUpperCase();
    SetText(NewText);
  };
  const lower_case = () => {
    let NewText = Text.toLowerCase();
    SetText(NewText);
  };
  const clear = () => {
    
    SetText("");
  };

  return (
    <>
      <div className="form-floating container my-5 py-5">
        <h3 className={`text-${props.mode}`}>Enter text here : </h3>
        <textarea
          className="form-control my-3"
          placeholder="Leave a comment here"
          // id="floatingTextarea2"
          value={Text}
          onChange={to_type}
          rows={10}
        ></textarea>
        <button className={`btn btn-${props.mode} btn-sm`} onClick={upper_case}>
          UpperCase
        </button>
        <button className={`btn btn-${props.mode} mx-2 btn-sm`} onClick={lower_case}>
          LowerCase
        </button>
        <button className={`btn btn-${props.mode} btn-sm`} onClick={clear}>
          Clear
        </button>
      </div>
      <div className={`container text-${props.mode}`}>
        <h4>Text Summary :</h4>
        <p>{Text.split(" ").length} Words and {Text.length} Characters</p>

      </div>
    </>
  );
}
