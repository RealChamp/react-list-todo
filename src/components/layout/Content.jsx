import React from 'react'
import { Sidebar } from './Sidebar'
import {Tasks} from '../Tasks.jsx'

export const Content = () => {
    return (
        <section>
        <Sidebar/>
        <Tasks/>
    </section>
    )
}
   