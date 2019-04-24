import React from 'react'

export default function ProfilesListItem ({ profiles, showDetails, deleteProfiles, showEditProfiles }) {
    return (
        <div className='profiles-list-item'>
        {`${profiles.name}`}
        <a href='#' onClick={() => showDetails(profiles)}>Details</a>
      <button onClick={() => deleteProfiles(profiles)}>Delete</button>
      <button onClick={() => displayEditProfiles(Profiles)}>Edit</button>
    </div>
  )
}