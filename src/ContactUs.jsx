import React from 'react'
const Contact=()=>{
    return(
        <>
        <div className="container-fluid">
        <div className="col-10 mx-auto my-auto mt-5 homeMarginTop">
        <div className="col-6 mx-auto my-auto headStyle">
                <h1 className="pr-5 headStyle text-center" >One-Stop Service</h1>
                
            </div>
            <div className="col-6 mx-auto">
            <form>
                            <h1 className='text-center'>Contact Us</h1>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Name</label>
                                <input type="text" class="form-control" id="exampleInputPassword1"  />
                            </div>
                            <br />
                            <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                <br />
                           </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Message</label>
                                <textarea rows='3' class="form-control" id="exampleInputPassword1"  />
                            </div>
                                <br />
                                    <button type="login" height="100" class="btn btn-primary">Submit</button>
                                </form>
                                <br />
            </div>
            

            
        </div>
        </div>
        </>
    );
}
export default Contact;
