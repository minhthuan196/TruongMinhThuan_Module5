import {useParams} from "react-router-dom";

function ContractEdit(){
    const param = useParams()
    return(
        <>
            <h1>
                Contract Edit
            </h1>
            <h1>{param.id}</h1>
        </>
    )
}export default ContractEdit;