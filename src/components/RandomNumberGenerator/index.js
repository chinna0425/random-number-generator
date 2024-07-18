import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {count: 0}

  onGenerate = () => {
    const randomval = parseInt(Math.random(0, 1) * 100)
    this.setState({count: randomval})
  }

  render() {
    const {count} = this.state
    return (
      <div className="background-container">
        <div className="inner-container">
          <h1 className="heading1">Random Number</h1>
          <p className="paragraph">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="button" onClick={this.onGenerate}>
            Generate
          </button>
          <p className="heading1">{count}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
