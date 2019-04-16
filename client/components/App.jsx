import React from 'react'

export default class App extends React.Component {
  constructor (props) {
      super(props)

      this.state = {
          error: null,
          buttons: [],
          activeProfile: null,
          detailsVisible: false,
          addButtonVisible: false
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

}

const App = () => {
  return (
    <h1>Draft Project!</h1>
  )
}

export default App

