import React, { useState } from 'react'
import {FaChevronDown, FaRegCalendarAlt} from 'react-icons/fa'
import {SiGooglecalendar} from 'react-icons/si'
import {VscInbox} from 'react-icons/vsc'
import { useSelectedProjectValue } from '../../context';
import { AddProject } from '../AddProject';
import {Projects} from '../Projects'

export const Sidebar = () => {
  const {setSelectedProject} = useSelectedProjectValue()
  const [active, setActive] = useState('inbox')
  const [showProjects, setShowProjects] = useState(true)
 return (
   <div className="sidebar" data-testid="sidebar">
     <ul className="sidebar__generic">
       <li onClick={() => {
         setActive('inbox')
         setSelectedProject('INBOX')
       }} 
      data-testid="inbox"
      className={active === 'inbox' ? 'active' : ''}>
         <span>
           <VscInbox />
         </span>
         <span>Inbox</span>
       </li>
       <li onClick={() => {
         setActive('today')
         setSelectedProject('TODAY')
       }} 
      data-testid="today"
      className={active === 'today' ? 'active' : ''}>
         <span>
           <SiGooglecalendar />
         </span>
         <span>Today</span>
       </li>
       <li onClick={() => {
         setActive('next_7')
         setSelectedProject('NEXT_7')
       }} 
      data-testid="next_7"
      className={active === 'next_7' ? 'active' : ''}>
         <span>
           <FaRegCalendarAlt />
         </span>
         <span>Next 7 days</span>
       </li>
     </ul>
     <div className="sidebar__middle" onClick={() => setShowProjects(!showProjects)}>
       <span>
         <FaChevronDown className={!showProjects ? 'hidden-projects' : ''} />
       </span>
       <h2>Projects</h2>
     </div>
     <ul className="sidebar__projects">{showProjects && <Projects/>}</ul>
     {showProjects && <AddProject/>}
   </div>
 );
};