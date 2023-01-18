import classes from "./NewMovieForm.module.css"
import {useRef} from "react"

function NewMovieForm() {
    const titleInputRef=useRef();
    const imageInputRef=useRef();
    const imdbInputRef=useRef();
    const descriptionInputRef=useRef();

    function submitHandler(event){
        event.preventDefault();     // prevent default behaviour of Submit button

        const enteredTitle=titleInputRef.current.value
        const enteredImage=imageInputRef.current.value
        const enteredImdb=imdbInputRef.current.value
        const enteredDescription=descriptionInputRef.current.value

        const movieData={
            title:enteredTitle,
            imdb:enteredImdb,
            imageUrl:enteredImage,
            description:enteredDescription
        };
       // console.log(movieData)
       const baseURL="https://ec2-54-157-169-238.compute-1.amazonaws.com:8300/movie"

       fetch (baseURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"   
        },
        body:JSON.stringify(movieData)
       })
       .then((response)=>{
        alert("Movie added...")
       })
       .catch((error)=>{
        alert("Error")
       })

       titleInputRef.current.value="";
       imageInputRef.current.value="";
       imdbInputRef.current.value="";
       descriptionInputRef.current.value="";
    }

  return (
    <div className={classes.item}>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label>Movie Title</label>
          <input type="text" required id="title" ref={titleInputRef}/>
        </div>
        <div className={classes.control}>
          <label>Movie Image</label>
          <input type="url" required id="image" ref={imageInputRef}/>
        </div>    
        <div className={classes.control}>
          <label>IMDB</label>
          <input type="text" required id="imdb" ref={imdbInputRef}/>
        </div>
        <div className={classes.control}>
          <label>Movie Description</label>
          <textarea id="description" required rows="5" ref={descriptionInputRef}/>
        </div>
        <div className={classes.actions}>
            <button>Add Movie</button>
        </div>
      </form>
    </div>
  );
}

export default NewMovieForm;
