import React, { useEffect, useState } from "react";

const Component1 = ()=>{

    const [empdata,setEmpData] = useState([]);
    const [show,setShow] = useState(false);

    useEffect(()=>{
        if(show){
            fetch("http://localhost:5000/employee").then((result)=>{
            result.json().then((new_result)=>{
                // console.log(new_result);
                setEmpData(new_result);
            })
        }).catch((err)=>{console.log(err.message)})
        }
    },[show])


    return(
        <>
        <h1>This is Component1 GET Method API</h1>
        <button className="btn btn-success" onClick={()=>{setShow(true)}}>Show Data</button> <br/><br/>
        <table className="table table-bordered bg-light">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {
                    empdata.map((item,index)=>(
                        <tr key={index}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.phone}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        
        </>
    )
}

export default Component1;