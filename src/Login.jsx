import React from 'react'
const Login = () => {
    return (
        <>
            <br />
                    
            <div className="container-fluid ">
                <div className="row mx-auto" >
                <div className="col-lg-4 col-md-6 col-10 mx-auto mt-5" >
                    
                    <form>
                    <h1 className="text-center">Login </h1>
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                <br />
                           </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                                <br />
                                    <button type="login" class="btn btn-primary">Login</button>
                                </form>
                            </div>
                            </div>
                        </div>
        
        </>
    );
}
export default Login;