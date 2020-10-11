import { useState } from "react"
import React  from 'react'
import { NavLink } from "react-router-dom";

const SignUp=()=>{

        const [fullName,setFullName]=useState(
           { username:"",
             email:""   
           }
        )
    const inputEvent=(event)=>{
        const value=event.target.value;
        const name=event.target.name;

        setFullName((prevalue)=>{
            if(name=="Uname"){
                return{
                    username:value,
                    email:prevalue.email
                }
            }
            else if(name==="Ename"){
                return {
                    username:prevalue.username,
                    email:value,
                }
            }
        });
    }

    const onSubmits=(event)=>{
        event.preventDefault();

        alert("form submited");

    }


    return(
        <>
            <br />
                    
            <div className="container-fluid ">
                <div className="row mx-auto" >
                <div className="col-lg-4 col-md-6 col-10 mx-auto mt-5" >
                    
                    <form onSubmit={onSubmits}>
                    <h1 className="text-center">SignUp</h1>

                    <div class="form-group">
                            <label for="exampleInputEmail1">Username</label>
                            <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" name="Uname"/>
                                <br />
                           </div>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name="Ename"/>
                                <br />
                           </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <br />
                            <div class="form-group">
                                <label for="exampleInputPassword1">Confirm Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                                <br />
                                    <button type="login" class="btn btn-primary"><NavLink exact to='/userprofile' className='nav-link'> SignUp</NavLink></button>
                                </form>
                            </div>
                            </div>
                        </div>
        
        </>
    );
}
export default SignUp;