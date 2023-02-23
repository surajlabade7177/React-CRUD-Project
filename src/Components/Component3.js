import { useEffect, useState } from "react";

const Component3 = ()=>{

    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/employee").then((result)=>{
            result.json().then((new_result)=>{
                // console.log(new_result);   // printing data in console.
                setData(new_result);
            })
        })
    },[]);


    //

    const deleteEmp = (id)=>{
        fetch(`http://localhost:5000/employee/${id}`,{    // here we need to priovide id of record.
            method:"DELETE"
        })
        alert("Data Deleted Successfully.....");
        window.location.reload();
    }


    return(
        <div>
            <h1>This is Component3</h1>

            <div style={{textAlign:"left"}}>
                {
                    data.map((item,index)=>(
                            <ul key={index} style={{listStyleType:"none"}}>
                                <li>ID: {item.id}</li>
                                <li>Name: {item.name}</li>
                                <li>Email: {item.email}</li>
                                <li>Phone: {item.phone}</li>
                                <li>
                                <button className="btn btn-danger" onClick={()=>{deleteEmp(item.id)}}>DELETE</button>
                                </li>
                            </ul>
                            
                        
                        
                    ))
                }
            </div>

        </div>
    )
}

export default Component3;