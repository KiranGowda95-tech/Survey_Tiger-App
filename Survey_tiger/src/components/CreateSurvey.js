import Options from "./Options";
import Question from "./Question";
import TypeSelector from "./TypeSelector";
import { useState } from "react";

const CreateSurvey = ({ squestions, setSquestions }) => {
  const getRandom = () => {
    return Math.floor(Math.random() * 1000 + 1);
  };

  const [qText, setQtext] = useState("");
  const [qType, setQtype] = useState(0);
  const [options, setOptions] = useState([
    { uid: getRandom(), value: "" },
    { uid: getRandom(), value: "" },
  ]);

  const addOptions = () => {
    let newOption = {
      uid: getRandom(),
      value: "",
    };
    let updatedOptions = [...options];
    updatedOptions.push(newOption);
    setOptions(updatedOptions);
  };

  const deleteOptions = () => {
    if (options.length === 2) {
      alert("Error: A select type question should have atleast 2 options");
    } else {
      let updatedOptions = [...options];
      updatedOptions.pop();
      setOptions(updatedOptions);
    }
  };

  const updateOptionText = (id, text) => {
    let updatedOptions = [...options];
    let changeIndex = updatedOptions.findIndex((x) => x.uid === id);
    updatedOptions[changeIndex].value = text;
    setOptions(updatedOptions);
  };

  const updateSurveyQuestion = () => {
    let newSurveyQuestion = [...squestions];
    let newQ = {
      qText: qText,
      qType: qType,
      options: options,
    };
    newSurveyQuestion.push(newQ);
    setSquestions(newSurveyQuestion);
  };

  return (
    <>
      <TypeSelector qtype={qType} setQtype={setQtype} />
      {qType !== 0 ? (
        <>
          <Question onTextUpdate={setQtext} />
          {options.map((opt, key) => (
            <Options
              key={key}
              uid={opt.uid}
              addOptions={addOptions}
              deleteOptions={deleteOptions}
              updateText={updateOptionText}
            />
          ))}
          <button
            className="btn btn-primary m-1"
            onClick={() => updateSurveyQuestion()}
          >
            Add Question
          </button>
          <button className="btn btn-primary m-1">Publish </button>
        </>
      ) : null}
    </>
  );
};
export default CreateSurvey;
