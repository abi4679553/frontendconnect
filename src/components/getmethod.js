import React, { useEffect, useState } from "react";

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

    return (
        <div>
            <h2>Get Method</h2>
        </div>
    );
};

export default Getmethod;