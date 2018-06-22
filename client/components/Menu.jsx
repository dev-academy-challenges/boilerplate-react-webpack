import React from 'react'

class Menu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newItems: '',
      currentList: ['Fruit', 'Almond Milk']
    }
    this.addItem = this.addItem.bind(this)
    this.updateNewItems = this.updateNewItems.bind(this)
  }

  addItem () {

  }

  updateNewItems (e) {

  }

  render () {
    return (
      <div>
        <h2>Shopping List</h2>
        <input type="text" name="shopping" onChange={this.updateNewItems}/>
        <button onClick={this.addItem}>Add</button>
      </div>
    )
  }
}

export default Menu
