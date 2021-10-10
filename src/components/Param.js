import React from 'react'
import {useParams} from 'react-router-dom'

function Param() {
    const { id } = useParams();
    return (
        <>
         <h3>Page with id  {id} </h3>
        </>
    )
}

export default Param;