import React, {Component} from 'react'
import data from './data.json'

class Greeter extends Component{
  render() {
    return(<div>
      {data.textContent}
    </div>)
  }
}

export default Greeter