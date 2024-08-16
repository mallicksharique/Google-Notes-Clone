import React, { useState } from "react";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CNote = (props) => {

    const [expand,setexpand]=useState(false);
    
    const expandit=()=>{
        setexpand(true);    
    }
    const backExpand =()=>{
        setexpand(false);
    }
    
    const [CData, setCData] = useState({
        title: "",
        content: "",
    });

    const InputEvent = (event) => {
        const { name, value } = event.target;

        setCData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        // Note: This might log outdated CData because of async state update
    };

    const addEvent = (event) => {
        event.preventDefault(); // Prevents the form from submitting the traditional way
        props.passNote(CData); // Pass the current CData to the parent component
        setCData({
            title: "",
            content: "",
        }); // Reset the form fields
    };

    return (
        <div className="Main" >
            <form onSubmit={addEvent} onDoubleClick={backExpand}>
               {expand?
                <input
                    onChange={InputEvent}
                    name="title"
                    type="text"
                    value={CData.title} // Controlled component
                    placeholder="Title"
                    autoComplete="off"
                /> :null}
                <textarea
                    name="content"
                    value={CData.content} // Controlled component
                    onChange={InputEvent}
                    placeholder="Write here..."
                    onClick={expandit} 
                ></textarea>
              {  expand?
                <Button type="submit">
                    <AddIcon className="plus-sign" />
                </Button>:null}
            </form>
        </div>
    );
};

export default CNote;
