import React, { useState } from 'react'
import {BiBulb} from 'react-icons/bi'
import {AddTask} from '../AddTask'


export const Header = ({darkMode, setDarkMode}) => {
  const [shouldShowMain, setShouldShowMain] = useState(false)
  const [showQuickAddTask, setShowQuickAddTask] = useState(false)
    return (
      <header className="header" data-testid="header">
        <nav>
          <div className="logo">
            <img src="/images/logo.png" alt="todoist" />
          </div>
          <div className="settings">
            <ul>
              <li 
              onClick={()=> {setShowQuickAddTask(true); setShouldShowMain(true);}}
              data-testid='quick-add-task-action' className='settings__add'>+</li>
              <li
               data-testid='dark-mode-action' 
               className='settings__darkmode'
               onClick={()=> setDarkMode(!darkMode)}
               >
                <BiBulb />
              </li>
            </ul>
          </div>
        </nav>

        <AddTask 
        showAddTaskMain={false}
        shouldShowMain={shouldShowMain}
        showQuickAddTask={showQuickAddTask}
        setShowQuickAddTask={setShowQuickAddTask}

        />
      </header>
    );
}