import React from 'react'

import UpdateProfilesForm from './UpdateProfilesForm'
import ProfilesList from './ProfilesList'
import ProfilesDetails from './ProfilesDetails'
import ErrorMessage from './ErrorMessage'
import AddProfiles from './AddProfiles'
import  { getProfiles, deleteProfiles, updateProfiles } from '../api'



export default class App extends React.Component {
  constructor (props) {
      super (props)

      
      this.state = {
          error: null,
          profiles: [],
          activeProfiles: null,
          editedProfiles: null,
          detailsVisible: false,
          addProfilesVisible: false,
          editProfilesVisible: false
           }
      
      this.refreshList = this.refreshList.bind(this)
      this.showDetails = this.showDetails.bind(this)
      this.hideDetails = this.hideDetails.bind(this)
      this.renderProfiles = this.renderProfiles.bind(this)
      this.showAddProfiles = this.showAddProfiles.bind(this)
      this.deleteProfiles = this.deleteProfiles.bind(this)
      this.hideDetailsAndRefresh = this.hideDetailsAndRefresh.bind(this)
      this.showUpdateProfiles = this.showUpdateProfiles.bind(this)
  

  }
  
     componentDidMount () {
      this.refreshList()
    }

     renderProfiles (err, profiles) {
      this.setState({
        error: err,
        profiles: profiles || []
      })
    }
      refreshList (err) {
      this.setState({
        error: err,
        addProfilesVisible: false
      })
      getProfiles(this.renderProfiles)
    }

      showAddProfiles () {
      this.setState({
        addProfilesVisible: true 
      })
    }


      showDetails (profiles) {
        this.setState({
          activeProfiles: profiles,
          detailsVisible: true
        })
      }

      hideDetails () {
        this.setState({
          detailsVisible: false
        })
      }

      hideDetailsAndRefresh () {
        this.setState({
          detailsVisible: false
        }, this.refreshList)
      }


      deleteProfiles (id) {
        deleteProfiles(id, this.hideDetailsAndRefresh)
      }


      showUpdateProfiles (profiles) {
        this.setState({
          showUpdateForm: true
    
        })
      }
    



render () {
  return (
    <React.Fragment>
      <ErrorMessage error={this.state.error} />
      
      <h1>Dilworth Profiles</h1>


    <ProfilesList
      showDetails={this.showDetails}
      profiles={this.state.profiles}
      deleteProfiles={this.deleteProfiles}
      showUpdateProfiles = {this.showUpdateProfiles} />

      <p>
      <a id='refresh-profiles-list-view' href='#'
      onClick={this.refreshList}>Refresh Profiles</a>  
      </p>

      <p>
          <a id='show-profiles-link' href='#'
            onClick={this.showAddProfiles}>Add Profiles</a>
        </p>

          {this.state.addProfilesVisible && <AddProfiles
            finishAdd={this.refreshList} />}

          {this.state.showUpdateForm && <UpdateProfilesForm />}
            
            {this.state.detailsVisible && <ProfilesDetails 
            isVisible={this.state.detailsVisible}
            hideDetails={this.hideDetails}
            profiles={this.state.activeProfiles} />}

            </React.Fragment>




      /* <a id='refresh-link' href='#'
      onClick={this.refreshList}>Update List</a>
      </p>

      {this.state.addProfilesVisible && <addProfiles
      finishAdd={this.refreshList} />}

      {this.state.detailsVisible && <ProfilesDetails
      finishEdit={this.refreshList}
      profile={this.state.activeProfile} />}
      </div> */
    







// const App = () => {
//   return (
//     <h1>Draft Project!</h1>
//   )
// }

// export default App

