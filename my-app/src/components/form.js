import React, { useState } from 'react'
import { Link }  from 'react-router-dom'
import props from 'prop-types'
export default function ( props){
   const ip ={
    names:'',
    email:'',
    pass:''
   }
  
  return (
    <div className='container my-3'>
    <form>
    <div className="input-group flex-nowrap">
  <span className="input-group-text" id="addon-wrapping">@</span>
  <input type="text" className="form-control" placeholder="Username" aria-label="Username" value={props.imput.names} onChange={props.changehandle} aria-describedby="addon-wrapping"/>
    </div>
  <div className="mb-3 my-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={props.imput.email} onChange={props.changehandle} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  value={props.imput.pass} onChange={props.changehandle}/>
  </div>

  <div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
  <label className="form-check-label" for="flexRadioDefault1">
    Male
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
  <label className="form-check-label" for="flexRadioDefault2">
    Female
  </label>
</div >
  
  <button type="submit"  className="btn btn-primary my-2" onClick={props.onhandle} ><Link to="/submit">Submit</Link></button>
</form>
    </div>
  )
}

