import React from 'react'
import { useNavigate } from 'react-router-dom'
//here row is a props drilling

const Card = ({row})=>{
    const nav = useNavigate()
    return(
        <div onClick={()=>nav(`/${row.id}`)}>
            <h1>{row.id}</h1>
            <img src={row.avatar} style={{width:'200px',height:'200px'}}/>
            <h3>{row.name}</h3>
            <p>{row.desc.slice(0,50)}...</p>
        </div>
    )
}

export default Card

