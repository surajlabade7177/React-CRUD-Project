import { useState } from "react";

const Component2 = ()=>{

    const [id,setId] = useState("");
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [phone,setPhone] = useState("");

    // Storing Data to the JSON file: 

    const storeData = ()=>{
        const data_for_store = {id,name,email,phone}
        // console.log(data_for_store);
        fetch("http://localhost:5000/employee",{
                    method : "POST",
                    headers : {"content-type":"application/json"},
                    body : JSON.stringify(data_for_store)
                }
            ).then((res)=>{
                res.json().then((new_result)=>{
                    console.log("Following data is added... = ",new_result)   // printing added data.
                })})
    }

    return(
        <div>
            <h1>This is Component2</h1> 

            <label htmlFor="id">ID :</label>  &nbsp;
            <input id="id" type="text" value={id} onChange={(event)=>{setId(event.target.value)}}></input> <br/><br/>

            <label htmlFor="name">Name :</label>  &nbsp;
            <input id="name" type="text" value={name} onChange={(event)=>{setName(event.target.value)}}></input> <br/><br/>

            <label htmlFor="email">Email :</label>  &nbsp;
            <input id="email" type="text" value={email} onChange={(event)=>{setEmail(event.target.value)}}></input> <br/><br/>

            <label htmlFor="phone">Phone :</label>  &nbsp;
            <input id="phone" type="text" value={phone} onChange={(event)=>{setPhone(event.target.value)}}></input> <br/><br/>

            <button className="btn btn-success" onClick={storeData}>Add New Employee</button>
        </div>
    )
}

export default Component2;