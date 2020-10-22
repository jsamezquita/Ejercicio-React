import React,{useState} from "react";

const Post = (props) =>{

    const [name] = useState(props.post.name);
    const [placeholder] = useState(props.post.placeholder);
    const [inputType] = useState(props.post.inputType);
    const [value, setValue] = useState(props.post.value);
    const [id] = useState(props.post.id);
    const [error, setError] = useState(props.post.error);

    const verify = (pValue) =>{
        console.log("El valor es:");
        console.log(pValue);
        if(inputType==="email"){
            const re = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
            if(!re.test(pValue)){
                setError("Invalid email");
            }
            else{
                setError("");
            }
        }
        if(inputType==="password"){
            const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
            if(!re.test(pValue)){
                setError("Invalid password - The password must have at least eight characters, one number and an uppercase letter");
            }
            else{
                setError("");
            }
        }
        if(inputType==="username"){
            const re = /^(?=.{8,20}$).*/;
            if(!re.test(pValue)){
                setError("Invalid username - The username should be 8-20 characters long");
            }
            else{
                setError("");
            }
        }
    }

    const handleChange = (evt) =>{
        let pValue = evt.target.value;
        verify(pValue);
        setValue(pValue);
        console.log(value);
    }

    return(
            <div class="form-group">
                <label>{name}</label>
                <input onChange={handleChange} type={inputType} class="form-control" id={id} placeholder={placeholder}></input> 
                <p style={{color:"red"}}>{error}</p>
            </div>
     )
}
export default Post;