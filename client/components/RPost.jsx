import React from 'react'

class RPost extends React.Component {
  // constructor(props) {
  //   super(props)
  //   this.state = {
  //     post: ''
  //   }
  // }

  render() {
    return (
      <div className='rpost'>
        <div className='rpost-title'>Title</div>
        <div className='rpost-dates'>Date Created and Posted</div>
        <div className='rpost-img'>Post Image</div>
        <div className='rpost-post'>Post</div>
      </div>
    )
  }
}

export default RPost