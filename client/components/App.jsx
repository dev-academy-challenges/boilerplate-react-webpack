import React from 'react'

import UpdateProfilesForm from './UpdateProfilesForm'
import ProfilesList from './ProfilesList'
import ProfilesDetails from './ProfilesDetails'
import ErrorMessage from './ErrorMessage'
import AddProfiles from './AddProfiles'
import { getProfiles, deleteProfiles, updateProfiles } from '../api'

// Material imports
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { createMuiTheme } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000'
    }
  }
})

export default class App extends React.Component {
  state = {
    error: null,
    profiles: [],
    activeProfiles: null,
    editedProfiles: null,
    detailsVisible: false,
    addProfilesVisible: false,
    editProfilesVisible: false
  }

  componentDidMount = () => {
    this.refreshList()
  }

  renderProfiles = (err, profiles) => {
    this.setState({
      error: err,
      profiles: profiles || []
    })
  }

  refreshList = (err) => {
    this.setState({
      error: err,
      addProfilesVisible: false
    })
    getProfiles(this.renderProfiles)
  }

  showAddProfiles = () => {
    this.setState({
      addProfilesVisible: true
    })
  }

  showDetails = (profiles) => {
    this.setState({
      activeProfiles: profiles,
      detailsVisible: true
    })
  }

  hideDetails = () => {
    this.setState({
      detailsVisible: false
    })
  }

  hideDetailsAndRefresh = () => {
    this.setState({
      detailsVisible: false
    }, this.refreshList)
  }

  deleteProfiles = (id) => {
    deleteProfiles(id, this.hideDetailsAndRefresh)
  }

  updateProfiles = (profiles) => {
    this.setState({
      profiles: true

    })
  }

  render () {
    return (
      <React.Fragment>
        <Grid
          justify="center"
          container spacing={24}>
          <ErrorMessage error={this.state.error} />
          <Grid item xs={12}>
            <Typography variant="h3" gutterBottom>Dilworth Profiles</Typography>
          </Grid>
          <ProfilesList
            showDetails={this.showDetails}
            profiles={this.state.profiles}
            deleteProfiles={this.deleteProfiles} 
            updateProfiles = {this.updateProfiles} />

          <Grid item xs={12}>
            <Button color='primary'
              variant="contained" id='refresh-profiles-list-view' href='#'
              onClick={this.refreshList}>Refresh Profiles</Button>
          </Grid>

          <Grid item xs={12}>
            <Button color='primary'
              variant="contained"
              id='show-profiles-link' href='#' onClick={this.showAddProfiles}>Add Profile</Button>

          </Grid>

          {this.state.addProfilesVisible && <AddProfiles
            finishAdd={this.refreshList} />}

          {this.state.showUpdateForm && <UpdateProfilesForm />}

          {this.state.detailsVisible && <ProfilesDetails
            isVisible={this.state.detailsVisible}
            hideDetails={this.hideDetails}
            profiles={this.state.activeProfiles} />}
        </Grid>
      </React.Fragment>
    )
  }
}

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
