import React, { useState } from 'react';


const Contact = ()=>{
    const [data, setData] = useState({
        fullname:"",
        phone:"",
        email:"",
        pass:"",
    
    });
    const InputEvent=(event)=>{
        const {name, value} = event.target;
        setData((prev)=>{
            return{
                ...prev,
                [name]:value,
            };
        });
    };
    const fonrmSubmit =(e)=>{
        e.preventDefault();
        alert( `My name is ${data.fullname}, email is ${data.email}, phone is ${data.phone}, and password is ${data.pass}`);
    };
    return(
        <>  
        <div  id="header">
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="col-md-6 col-10 mx-auto">
                <form onSubmit={fonrmSubmit}>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1">Full Name</label>
                        <input onChange={InputEvent} value={data.fullname} name="fullname" placeholder="enter your full name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1">Email</label>
                        <input value={data.email} onChange={InputEvent} name="email" placeholder="example@example.com" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputEmail1">Phone</label>
                        <input value={data.phone} onChange={InputEvent} name="phone" placeholder="enter your phone number" type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    </div>
                    <div className="form-group mb-3">
                        <label for="exampleInputPassword1">Password</label>
                        <input onChange={InputEvent} type="password" className="form-control" id="exampleInputPassword1"
                            value={data.pass} name="pass" placeholder="enter your password"
                        />
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Submit</button>
                </form>
                </div>
            </div>
        </div>    
        </>
    );
};

export default Contact;