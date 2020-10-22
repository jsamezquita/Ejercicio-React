import React, { useState } from "react";
import Post from "./post";

const Posts = () =>{
    const [posts, setPost] = useState([
       {
           name:"Email",
           placeholder:"email placeholder",
           inputType:"email",
           value:"",
           id:1,
       }, 
       {
            name:"Username",
            placeholder:"username placeholder",
            inputType:"username",
            value:"",
            id:2,
       },  
       {
           name:"Password",
           placeholder:"password placeholder",
           inputType:"password",
           value:"",
           id:3,
       }
    ]);

    const refresh = (evt) =>{
        window.location.reload();
    }

    return (
        <div>
            {posts.map(p=>(<Post key={p.id} post={p}/>))}
            <br></br>
            <button onClick={refresh} type="submit" class="btn btn-primary">Submit</button>
        </div>
    )
};

export default Posts;