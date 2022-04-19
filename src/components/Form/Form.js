import React from 'react';
import PersonalInfo from '../PersonalInfo/PersonalInfo';
import Education from '../Education/Education';
import WorkExperience from '../WorkExperience/WorkExperience';
import './form.css'

function Form() {
  return (
    <div id="form-container">
        <form>
            <PersonalInfo />
            <Education />
            <WorkExperience />
        </form>
    </div>
  )
}

export default Form