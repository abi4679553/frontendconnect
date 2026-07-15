import { useEffect, useState } from 'react';
import React from 'react'

function table() {
    const [result, setResult] = useState([])
    console.log("result",result)
    useEffect(() => {

        fetch(`http://localhost:5000/fetchform`, {
            method: "GET"
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {

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
        <table>
            
        </table>
    )
}

export default table