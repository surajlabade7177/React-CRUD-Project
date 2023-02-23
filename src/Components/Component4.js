import React,{useEffect,useState} from 'react';

const Component4 = () => {

    const [data,setData] = useState([]);

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    useEffect(()=> {
        fetch('http://localhost:5000/employee').then((result)=>{
            result.json().then((new_result)=>{
                setData(new_result);
                console.log("Data : ",new_result);
            })
        })
    },[])

    // fectching data to input boxes :
    const selectUser = (id)=>{
        // console.log(id);
        const item = data[id-1]
        setId(item.id);
        setName(item.name);
        setEmail(item.email);
        setPhone(item.phone);
    }


    // udating data of employee: 
    const updateData = ()=>{
        let new_update = {id,name,email,phone}
        fetch(`http://localhost:5000/employee/${id}`,{
            method:"PUT",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json"
            },
            body:JSON.stringify(new_update)
        }).then((result)=>{
            result.json().then((new_result)=>{
                console.log(new_result);
                // alert("Data is updated.....");
                window.location.reload();
            })
        })
    }


    return (
        <div>
            <h2>Registration Form</h2><br/>
            <table className='table table-bordered'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,index)=>(
                            <tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <button className='btn btn-primary'  onClick={()=>{selectUser(item.id)}}>Edit</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <hr/><br/>

            <input type="text" value={id} onChange={(event)=>{setId(event.target.value)}}></input><br/><br/>
            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}}></input><br/><br/>
            <input type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}}></input><br/><br/>
            <input type="text" value={phone} onChange={(event)=>{setPhone(event.target.value)}}></input><br/><br/>
            <button className='btn btn-success' onClick={updateData}>Update Data</button>

        </div>
    )
}

export default Component4;