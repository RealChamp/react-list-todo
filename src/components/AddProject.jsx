import React, { useState } from 'react'
import {firebase} from '../firebase'
import {generatePushId} from '../helpers'
import {useProjectsValue} from '../context'
  

export const AddProject = ({shouldShow = false}) => {
    const [show, setShow] = useState(shouldShow)
    const [projectName, setProjectName] = useState('')

    const projectId = generatePushId()
    const{setProjects} = useProjectsValue()

    const addProject = () => {
        projectName && 
        firebase
        .firestore()
        .collection('projects')
        .add({
            projectId,
            name: projectName,
            userId: 'kBSCYcdCWKWpJssiK7Uc'
        })
        .then(() => {
            setProjects([])
            setProjectName('')
            setShow(false)
        })
    }
    return (
        <div className="add-project" data-testid="add-project">
          {show && (
            <div className="add-project__input">
              <input
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                className="add-project__name"
                type="text"
                data-tesid="project-name"
                placeholder="Name your project"
              />
              {/* // TODO doublecheck onClick in button */}
              <button
                className="add-project__submit"
                type="button"
                onClick={() => addProject()}
                data-testid="add-project-submit">
                Add proejct
              </button>
              <span
                data-testid="hide-project-overlay"
                className="add-project__cancel"
                onClick={() => setShow(false)}>
                Cancel
              </span>
            </div>
          )}
          <span className="add-project__plus">+</span>
          <span
            data-testid="add-project-action"
            className="add-rpoject__text"
            onClick={() => setShow(!show)}>
            Add project
          </span>
        </div>
      );
}