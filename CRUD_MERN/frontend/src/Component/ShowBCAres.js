import React from 'react'
import axios from 'axios';
// import Showdatarecord from './Showdatarecord';


const ShowBCAres = (props) => {
   
    const id=props.id;
       const data= axios.get(`http://localhost:7000/studentdb/showResult/${id}`).then((res)=>{
           document.write("<table><tr><th>Name</th>","<td>"+res.data.Name+"</td></tr></table>");
        })
       
    return (
        <div className="p-5 m-5">
          {/* {results} */}
          
        </div>
    )
}


export default ShowBCAres
