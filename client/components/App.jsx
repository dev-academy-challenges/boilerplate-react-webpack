import React from 'react'

export default class App extends React.Component {
  constructor (props) {
      super (props)
      this.state = {
          error: null,
          profiles: [],
          activeProfiles: null,
          detailsVisible: false,
          addProfilesVisible: false,
          editProfilesVisible: false
           }

      this.refreshList = this.refreshList.bind(this)
      this.showDetails = this.showDetails.bind(this)
      this.hideDetails = this.hideDetails.bind(this)
      this.renderProfiles = this.renderProfiles.bind(this)
      this.showAddProfiles = this.showAddProfiles.bind(this)
      this.deleteProfiles = this.deleteWidget.bind(this)
      this.showEditProfiles = this.showEditWidget.bind(this)

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
        addProfilesVisible,
        editProfilesVisible 
      })
      getProfiles(this.renderProfiles)
    }

      showAddProfile () {
      this.setState({
        activeProfiles: profiles,
        detailsVisible: true
      })
    }

      deleteProfiles (profiles) {
        deleteProjects(profiles, this.refreshList.List)
      }

      showEditProfiles (profiles) {
        this.setState({
          activeProfiles: profiles,
          editProfileVisible: true
        })
      }



render () {
  return (
<div>
      <ErrorMessage error ={this.state.error} />
    
      <h1>Dilworth Profiles</h1>

    <ProfilesList
      showDetails={this.showDetails}
      deleteProfiles={this.deleteProfiles}
      showEditProfiles={this.showEditProfiles}
      profiles={this.state.profiles} />

      <p>
      <a id='show-profiles-link' href='#'
      onClick={this.showAddProfiles}>Add Profile</a>  
      </p>

      <p>
      <a id='refresh-link' href='#'
      onCllick={this.refreshList}>Update List</a>
      </p>

      {this.state.addProfilesVisible && <addProfiles
      finishAdd={this.refreshList} />}

      {this.state.editProfileVisible && <EditProfiles
      finishEdit={this.refreshList}
      profile={this.state.activeProfile} />}
      </div>
   
        )
      }
    }
    







// const App = () => {
//   return (
//     <h1>Draft Project!</h1>
//   )
// }

// export default App

