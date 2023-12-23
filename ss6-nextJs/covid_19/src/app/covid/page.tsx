"use client"
import axios from "axios";
import {useEffect, useState} from "react";

function Covid() {
    const [covid, setCovid] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/covids')
            .then((response) => {
                console.log(response);
                setCovid(response.data);
            })
    }, []);
    return (
        <>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Confirmed</th>
                    <th>Active</th>
                    <th>Recovered</th>
                    <th>Recovered</th>
                </tr>
                </thead>
                <tbody>
                {covid.map(data => (
                    <tr key={data.id}>
                        <td>{data.Date}</td>
                        <td>{data.Confirmed}</td>
                        <td>{data.Deaths}</td>
                        <td>{data.Recovered}</td>
                        <td>{data.Active}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )
}

export default Covid;