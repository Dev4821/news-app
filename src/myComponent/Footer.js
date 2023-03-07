import React, { useState } from "react";

const Footer=()=>  {
       const[submit,setSubmit]=useState(false);
     const [form,setForm]=useState({});
     const[data,setData]=useState({});
        const handleForm=(e)=>{
          
          setForm({
            ...form,
            [e.target.name]:e.target.value
          })
        }
       const handleSubmit= async (e)=>{
          e.preventDefault();
        const response = await fetch('http://localhost:8080/contact',{
            method:'POST',
            body:JSON.stringify(form),
            headers:{
              'content-Type':'application/json'
            }
          })
          const data = await response.json();

          setData(data);
          setSubmit(true);
       }
    return (
      <div>
        <div className="card text-center bg-dark text-muted">
          <div className="card-header ">CONTACT US</div>
          <form  onSubmit={handleSubmit} >
          
            <div className="container text-center">
            <div className="row align-items-center">
          <div className=" col-md-3 offset-md-1">
           <input type="text" onChange={handleForm}className="form-control" name ="username" placeholder="Enter your name"/>
            
            </div>
             <div className="col-md-3 offset-md-1">
             <input type="email" onChange={handleForm} className="form-control" name="email" placeholder="Enter your email" />
            
             </div>
             <button className="btn btn-sm btn-success col-md-1 offset-md-1"  type="submit">submit</button>
             </div>
             </div>
             
             </form>
              {submit&&<div>Hi {data.username},Our team will contact you soon!</div>}
          <div className="card-body">
            <h5 className="card-title">My Feed , My News</h5>
            <p className="card-text">Provides you most recently news here.</p>
          </div>
          <div className="card-footer text-muted">
            Developed By:
            <a
              href={"https://github.com/Dev4821"}
              className="link-light text-decoration-none"
              target="_blank"
              rel="noreferrer"
            >
              Divyansh
            </a>
          </div>
        </div>
      </div>
    );
  
}

export default Footer;
