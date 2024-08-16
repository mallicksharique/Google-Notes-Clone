import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import CNote from "./CreateNote";
import Notes from "./note";
import { Note } from "@mui/icons-material";



const NClone=()=>{
    const OnDelete = (id) => {
        setAddItem((oldData) => oldData.filter((_, indx) => indx !== id));
      };
    const [addItem,setAddItem]=useState([])
    const AddNote=(CData)=>{
     setAddItem((oldData)=>{
        return[...oldData, CData]
     })
     
    };

    return <div>
        <Header/>
       <CNote passNote= {AddNote} />
       <Footer/>
       {addItem.map((val, index)=>{
        return <Notes
        key={index}
        id={index}
        title={val.title}
        content={val.content}
        deleteItem={OnDelete}

        />
     })};
       
       
    </div>
}
export  default NClone;