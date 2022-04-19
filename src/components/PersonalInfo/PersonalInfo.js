import React from 'react'

function PersonalInfo() {
  return (
    <div>
        <fieldset>
          <legend>Personal Info</legend>
          <div>
            <label for="name">Full Name</label><br />
            <input type="text" id="name" name="name" />
          </div>
          <div>
            <label for="email">Email Address</label><br />
            <input type="email" id="email" name="email" />
          </div>
          <div>
            <label for="phone">Phone Number</label><br />
            <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" />
          </div>
        </fieldset>
    </div>
  )
}

export default PersonalInfo