import axios from "axios";

export default function covidList({covids}) {
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
                {covids.map(data => (
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
export const getStaticProps = async () => {
    const result = await axios.get('http://localhost:8080/covids');
    return {
        props: {
            covids: result.data
        }
    }
}