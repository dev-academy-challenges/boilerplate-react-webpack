import React from 'react'

export default function ProfilesListItem ({ profiles, showDetails, deleteProfiles, showEditProfiles }) {
    return (
        <div className='profiles-list-item'>
        {`${profiles.name}`}
        <a href='#' onClick={() => showDetails(profiles)}>details</a>
        <span> </span>
        <a href='#' onClick={() => deleteProfiles(profiles)}>delete</a>
        <span> </span>
        <a href='#' onClick={() => showEditProfiles(profiles)}>edit</a>
        </div>
    )
}