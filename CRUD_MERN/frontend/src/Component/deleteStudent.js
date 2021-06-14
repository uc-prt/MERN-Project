// import axios from 'axios'
import axios from 'axios'
import React from 'react'

const deleteStudent = (id) => {
   axios.get('http://localhost:7000/studentdb/deleteStudent/'+id).then((res)=>{
       console.log('deleted')
   })
    return (
        <div className='m-5 p-5'>
            delete
        </div>
    )
}

export default deleteStudent
