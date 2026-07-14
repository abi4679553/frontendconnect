import React, { useState ,useEffect} from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const[result , setResult] =useState([])

    const { name, email, password } = formData;


    console.log("name", name)
    console.log("email", email)
    console.log("password", password)
    console.log("result", result)

    const handlesumbit = () => {
        console.log("condition true")
        fetch("http://localhost:5000/Create-form", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({name , email , password })
        })
        .then(r =>r.json())
        .then(data=>{
            if(data.success){
                alert(data.message)
            }
            else{
                alert(data.message)
            }
        })
        .catch(err=>{
            console.log("Error in fetch candidate")
        }
        )

    }
useEffect(() => {
    fetch(`http://localhost:5000/fetchform`, {
        method: "GET"
    })
    .then(res => res.json())
    .then(data => {
        if (data.success) {
            alert(data.message);
            setResult(data.form);
        } else {
            alert(data.message);
        }
    })
    .catch(err => {
        console.log("Error in the fetch data", err);
    });
}, []);

    return (
        <div className=" w-[300px] mx-auto mt-12 p-5 border border-gray-400 rounded-lg text-center " >

            <h2 className="text-blue-700  text-2xl p-5  hover:bg-slate-600 hover:text-white rounded-3x">Registration Form</h2>

            <label>Name</label>
            <br />
            <input type="text" placeholder="Enter Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />

            <br />

            <label>Email</label>
            <br />
            <input type="email" placeholder="Enter Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />

            <br />

            <label>Password</label>
            <br />
            <input type="password" placeholder="Enter Password" value={formData.password} onChange={(e) => setFormData({ ...formData, password: e.target.value })} />
            <br />

            <button type="button" onClick={handlesumbit} className="text-blue-500 hover:bg-slate-600 hover:text-white  p-2 rounded-3xl">Submit</button>
        </div>
    );
}

export default Form;