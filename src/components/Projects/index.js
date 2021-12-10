import React from 'react'
import './projects.css'
import Back from "components/PostCardStyle/Back"
import FirstContent from "./FirstContent"

export default function index() {
    return (
        <div>
            <Back bg="bg-lime-300" Content={FirstContent}/>
        </div>
    )
}
