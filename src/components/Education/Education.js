import React from 'react'

function Education() {
  return (
    <div>
        <fieldset>
          <legend>Education</legend>
          <div>
            <label for="school-name">School Name</label><br />
            <input type="text" id="school-name" name="schoolName" />
          </div>
          <div>
            <label for="course-title">Course Title</label><br />
            <input type="text" id="course-title" name="courseTitle" />
          </div>
          <div>
            <label for="grad-date">Graduation Date</label><br />
            <input type="date" id="grad-date" name="gradDate" />
          </div>
        </fieldset>
    </div>
  )
}

export default Education;