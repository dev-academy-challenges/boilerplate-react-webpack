import React from 'react'

const Peeps = () => {
        render() 
        return (
            <form onSubmit={this.handleSubmit}>

                <label htmlFor="name">Name</label>
                <input type="text" ref={name => this.name = name} />

                <label htmlFor="description">Description</label>
                <textarea ref={description => this.description = description} />

                <input type="submit" value="Add" />
            </form>
        )
    }

export default Peeps