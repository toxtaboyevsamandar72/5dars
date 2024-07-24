import { useState } from "react";
import './index.css'



function User() {
    const [info, setInfo] = useState([]);
    const [value, setValue] = useState("");

    function handleChange(value) {
        if (value.trim() !== "") {
          setInfo((t) => [...t, value]);
          setValue("");
        }
        console.log(info);
        setValue("");
      }
    
      function deleteTodo(index) {
        const uptadedTodo = info.filter((_, i) => i !== index);
        setInfo(uptadedTodo);
      }

      const handleButtonClick = () => {
        setInfo('');
        
      };


  return (
    <>
      <div className="user_container">
        <h1 className="todo">Todo App</h1>
        <div className="text_user" onChange={(e) => setValue(e.target.value)}>
          <input className="input" type="text" />
          <button className="button" onClick={() => handleChange(value)}>+</button>
        </div>
        {info.map((item, index) => {
          return (
            <div className="info">
              <h3>{item}</h3>
              <button className="btn" onClick={() => deleteTodo(index)}>Del</button>
            </div>
            
          );
        })}
        <button className="clear" onClick={handleButtonClick}>clear</button>
      </div>
    </>
  )
}

export default User