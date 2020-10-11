import React from 'react'
import MyCalendar from './Calendar';
const UserProfile=()=>{
    return(
        <>
        <br />
        <div className="container-fluid mx-auto col-10 color__it">
        <br />
        <h1 className='text-center user__head'>Schedule Your Shows   </h1>
        <h1 className='text-center user__head'>And Get Notified !!  </h1>
        <br />
        
        <form style={{backgroundColor:'black'}}> 
            <div class="form-group">
                <label style={{color:'white', fontFamily:'Luckiest Guy', fontSize:'2rem'}}>UserName</label>
                <div><input type='text'/></div>    
            </div>   
            <br />
            <div class="form-group">
                <label style={{color:'white', fontFamily:'Luckiest Guy', fontSize:'2rem'}}>show1 </label>
                <div><input type='text'/></div>    
            </div>   
            <br />
            <div class="form-group">
                <label style={{color:'white', fontFamily:'Luckiest Guy', fontSize:'2rem'}}>show2</label>
                <div><input type='text'/></div>    
            </div>   
            <br />
            <div class="form-group">
                <label style={{color:'white', fontFamily:'Luckiest Guy', fontSize:'2rem'}}>show3</label>
                <div><input type='text'/></div>    
            </div>   
            <br />
            <div class="form-group">
                <label style={{color:'white', fontFamily:'Luckiest Guy', fontSize:'2rem'}}>show4</label>
                <div><input type='text'/></div>    
            </div>   
            <br />

        </form>      
        <br />
        <br />
        <br />
        <br />
        <div 
        className="mx-auto"
        style={{height:"600px", width:"600px"  }}>
            <MyCalendar
            />
        </div>

        </div>
        </>
    );
}
export default UserProfile;