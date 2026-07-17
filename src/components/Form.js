import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        Name: "",
        email: "",
        password: "",
    });


    const { Name, email, password } = formData;


    console.log("Name", Name)
    console.log("email", email)
    console.log("password", password)

    const handlesumbit = () => {
        fetch("http://localhost:5000/Create-form", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ Name, email, password })
        })
            .then(r => r.json())
            .then(data => {
                if (data.success) {
                    alert(data.message)
                    navigate('/users')
                }
                else {
                    alert(data.message)
                }
            })
            .catch(err => {
                console.log("Error in fetch candidate")
            }
            )
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-200 to-purple-200">

            <div className="w-[350px] bg-white shadow-xl rounded-xl p-6">

                <h2 className="text-2xl font-bold text-center text-blue-600 mb-6">
                    Registration Form
                </h2>

                <form className="space-y-4">

                    <div>
                        <label className="block text-left text-gray-700 mb-1">Name</label>
                        <input
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="text"
                            placeholder="Enter Name"
                            value={formData.Name}
                            onChange={(e) =>
                                setFormData({ ...formData, Name: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-left text-gray-700 mb-1">Email</label>
                        <input
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="email"
                            placeholder="Enter Email"
                            value={formData.email}
                            onChange={(e) =>
                                setFormData({ ...formData, email: e.target.value })
                            }
                        />
                    </div>

                    <div>
                        <label className="block text-left text-gray-700 mb-1">Password</label>
                        <input
                            className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            type="password"
                            placeholder="Enter Password"
                            value={formData.password}
                            onChange={(e) =>
                                setFormData({ ...formData, password: e.target.value })
                            }
                        />
                    </div>

                    <button
                        type="button"
                        onClick={handlesumbit}
                        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>

                </form>

            </div>
        </div>

    );
}

export default Form;
