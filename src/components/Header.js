import React from 'react'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/Name">About</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/param/:id">Param</Link></li>
                <li><Link to="/user">User</Link></li>
                <li><Link to="/dashboard">Dashboard</Link></li>
            </ul>
        </>
    )
}