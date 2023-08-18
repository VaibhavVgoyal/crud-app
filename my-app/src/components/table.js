import React from 'react'
 

export default function table(props) {
  return (
    <div className='container'>
        <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">EMail</th>
      <th scope="col">Password</th>
      
    </tr>
  </thead>
  <tbody>
  {props.arry.map((item, index) => (
          <tr key={index}>
            <td>{item.names}</td>
            <td>{item.email}</td>
            <td>{item.pass}</td>
            
            
          
          </tr>
          
        ))}
  
    
  </tbody>
</table>

    </div>
  )
}
