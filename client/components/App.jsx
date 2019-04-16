import React from 'react'

export default class App extends React.Component {
  constructor (props) {
      super(props)

      this.state = {
          error: null,
          buttons: [],
          activeProfile: null,
          detailsVisible: false,
          addProfileVisible: false,
          editProfileVisible: false
           }

      this.refreshList = this.refreshList.bind(this)
      this.showDetails = this.showDetailsList.bind(this)
      this.hideDetails = this.hideDetails.bind(this)
      this.renderProfiles = this.renderButtons.bind(this)
      this.showAddProfiles = this.showAddProfiles.bind(this)
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
        addProfileVisible,
        editProfileVisible 
      })
      getProfiles(this.renderProfiles)
    }

      showAddProfile () {
      this.setState({
        activeProfile: profiles,
        detailsVisible: true
      })
    }

      hideDetails () {
      this.setState({
        detailsVisible: false
      })
    }

      delteProfiles (profiles) {
        deleteProjects(profiles, this.refreshList.List)
      }

      showEditProfiles (profiles) {
        this.setState({
          activeProfiles: profiles,
          editProfileVisible: true
        })
      }

}

render ( {
  return (
    <div> 
      <ErrorMessage error ={this.state.error} />
    <h1>Dilworth Profiles</h1>

    <ProfileList
      showDetails={this.showDetails}
      deleteProfile={this.deleteProfile}
      showEditProfile={this.showEditProfile}
      profiles={this.state.profiles} />

      <p>
      <a id='show-widget-link' href='#'
      onClick
      </p>
  )
})







// const App = () => {
//   return (
//     <h1>Draft Project!</h1>
//   )
// }

// export default App

