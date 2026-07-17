import React, { useEffect, useState } from "react";
import { Trash2 } from "lucide-react"

const Getmethod = () => {
    const [table, setTable] = useState([]);
    console.log("table", table);

    useEffect(() => {
        fetch("http://localhost:5000/fetch-form", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    setTable(data.table);
                } else {
                    alert(data.message);
                }
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    }, []);

    const handleDeleteUser = (id) => {
        fetch(`http://localhost:5000/delete-user/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    alert(data.message);
                    window.location.reload();
                } else {
                    alert(data.message);
                }
            })
            .catch((err) => {
                console.log("Error:", err);
            });
    }

    return (
        <div>
            <div className="flex justify-center mt-10">
                <table cellPadding="15" className="border">
                    <thead className=" bg-blue-50 text-blue-600">
                        <tr>
                            <th className="border">S.No</th>
                            <th className="border"> Name</th>

                            <th className="border">Email</th>

                            <th className="border">password</th>

                            <th className="border">Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {table.map((item, index) => (
                            <tr key={index}>
                                <td className="border">{index + 1}</td>
                                <td className="border">{item.Name || item.name}</td>

                                <td className="border">{item.email}</td>
                                <td className="border">{item.password}</td>
                                <td className="border">
                                    <span onClick={() => handleDeleteUser(item._id)}>{<Trash2 size={20} />}</span>
                                </td>


                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Getmethod;