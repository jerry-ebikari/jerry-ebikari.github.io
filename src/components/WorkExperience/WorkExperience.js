import React from 'react'

function WorkExperience() {
  return (
    <div>
        <fieldset>
          <legend>Work Experience</legend>
          <div>
            <label for="company-name">Company Name</label><br />
            <input type="text" id="company-name" name="companyName" />
          </div>
          <div>
            <label for="job-title">Job Title</label><br />
            <input type="text" id="job-title" name="jobTitle" />
          </div>
          <div>
            <label for="main-tasks">Main Tasks</label><br />
            <textarea id="main-tasks" name="mainTasks"></textarea>
          </div>
          <div>
            <label for="start-date">Start Date</label><br />
            <input type="date" id="start-date" name="startDate" />
          </div>
          <div>
            <label for="end-date">End Date</label><br />
            <input type="date" id="end-date" name="endDate" />
          </div>
        </fieldset>
    </div>
  )
}

export default WorkExperience