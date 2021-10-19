import React, { useState } from 'react';
import 'react-confirm-alert/src/react-confirm-alert.css';
const ToDoForm = ({addTask}) => {
    const [ userInput, setUserInput ] = useState('');
    const [userDue, setUserDue] = useState('');
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(userInput && userDue){
            addTask(userInput,userDue);
            setUserDue("")
            setUserInput("");
        }
    }
    const handleChangeDate = (e) => {
        setUserDue(e.currentTarget.value)
    }
    return (
        <form className="form" onSubmit={handleSubmit}>
            <button>Create</button>
            <div class="form-group">
                <input value={userInput} type="text" onChange={handleChange}
                    placeholder="Enter task..." className="input" />
            </div>
            <div class="form-group">
                <input type="datetime-local" value={userDue} onChange={handleChangeDate} name="due"
                className="input" id="due" style={{fontFamily:'monospace'}} required/>
            </div>
        </form>
    );
};
export default ToDoForm;
