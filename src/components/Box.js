import React from "react"

export default function Box(props) {
    console.log("this is props from box.js", props)    
    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
        color: props.on ? "#FFFFFF" : "black"
    }
    
    return (
        <div 
            style={styles} 
            className="box"
            onClick={()=>props.toggle(props.id)}
        >
            <p>id: {props.id}</p>
            <p>on: {JSON.stringify(props.on)}</p>
        </div>
    )
}