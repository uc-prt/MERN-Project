import axios from 'axios';
import React,{useState,useEffect} from 'react'
import {Table} from 'react-bootstrap'
import deleteStudent from './deleteStudent';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';
const Showstudent = () => {
const [students, setStudent] = useState([]);
const createBrowserHistory=require("history").createBrowserHistory;
const history = createBrowserHistory();

useEffect(()=>{
    axios.get('http://localhost:7000/studentdb/').then((res)=>{
        setStudent(res.data);
    })
},[])


const deleteStudents=(id)=>{
    
    deleteStudent(id);
    axios.get('http://localhost:7000/studentdb/').then((res)=>{
        setStudent(res.data);
    })
}

const Update=(id)=>{
    history.push('/updateStudent',id);
}
    return (
        <div className='mt-5 pt-4 mb-5 pb-5'>
            <ReactHTMLTableToExcel
                    id="table-to-xls-btn"
                    className="btn btn-success float-right download-table-xls-button"
                    table="stu_table"
                    filename="tablexls"
                    sheet="tablexls"
                    buttonText="Export to excel"/>
            <div className='bg-primary text-center text-light p-3'><h3>Students Record</h3></div>
        <Table border='1' id="stu_table" responsive style={{'border':'1px solid blue'}}>
        <thead>
        <tr>
        <th>Id</th>
        <th>Student Name</th>
        <th>Father Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone</th>
        <th>Course</th>
        <th>Fees</th>
        <th colSpan='2' style={{'textAlign':'center','border':'1px solid blue'}}>Action</th>
        </tr>
        </thead>
        <tbody>
        {
        students && students.map((student, i) => {
        return (
        <tr key={i}>
        <td>{student._id}</td>
        <td>{student.Name}</td>
        <td>{student.F_Name}</td>
        <td>{student.Address}</td>
        <td>{student.Email}</td>
        <td>{student.Phone}</td>
        <td>{student.Course}</td>
        <td>Paid</td>
       <td><button onClick={()=>deleteStudents(student._id)}>Delete</button></td>
       <td><button onClick={()=>Update(student._id)}>Update</button></td>

        </tr>
        )
        })
        }
        </tbody>
        </Table>
        </div>
      
    )
}

export default Showstudent
