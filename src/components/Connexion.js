import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Connexion extends Component {
  state = {
    pseudo: '',
    goToChat: false
  }

handleChanhge = event => {
  const pseudo = event.target.value
  this.setState({ pseudo })
  
}


handleSumbit = event => {
  event.preventDefault()
  this.setState({ goToChat: true})
}

  render () {
    if (this.state.goToChat) {
      return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
    }

      return (
        <div className ='connexionBox'>
            <form className ='connexion' onSubmit= {this.handleSumbit}>
                <input
                    value={this.state.pseudo}
                    onChange={this.handleChanhge} 
                    placeholder= 'Pseudo' 
                    type= 'text' 
                    required/>
                    <button type='submit'>GO</button>
            </form>
        </div>
    )
  }
}

export default Connexion
