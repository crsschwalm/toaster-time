import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import classNames from 'classnames';

class Toast extends React.Component {
  render() {
    return (
      <div className="bread">
      </div>
    );
  }
}

class Trigger extends React.Component {
 constructor (props) {
    super(props)
    this.state = {}
    this.state.cooking = false
    this.startCooking = this.startCooking.bind(this)
  }
  componentDidMount () {
    const elm = this.refs.button
    //elm.addEventListener('animationend', this.resting)
  }
  componentWillUnmount () {
    const elm = this.refs.button
    //elm.removeEventListener('animationend', this.resting)
  }
  startCooking () {
    this.setState({cooking: true})
  }
  render () {
    const liClasses = classNames({
      'trigger-btn': true,
      'cooking': this.state.cooking
    });	
		return (
			<div className="toaster-side">
				<div className="trigger-track">
				</div>
				<button
	        ref='button'
        	onClick={() => this.startCooking()}
        	className={liClasses}>
				</button>
			</div>
		)
	}
}	

class Slot extends React.Component {
	render() {
		return (
			<div className="slot centered"></div>
		)
	}
}	

class Toaster extends React.Component {
  render() {
    return (
      <div className="toaster centered">
      		<Trigger />
      		<Slot />
      	<div className="toaster-bottom">
      	</div>
      </div>
    );
  }
}

class Kitchen extends React.Component {
  render() {
    return (
      <div className="kitchen">
        <div className="kitchen-table">
          <Toaster />
        </div>
        <div className="plate">
          <div></div>
        </div>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Kitchen />,
  document.getElementById('root')
);
