import React,  { Component }from 'react';
import ReactDOM from 'react-dom';

import BirthDateSelector from './components/BirthDateSelector';
import LifeInMonths from './components/LifeInMonths';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dob: null
        };
        this.dobChanged = this.dobChanged.bind(this);
    }

    dobChanged(dob) {
        this.setState({dob});
        console.log('dob changed', dob);
    }

    render() {
        if (this.state.dob) { //once the dob is entered.
            return (
                <div className='wrapper'>
                <div class="col-md-2">
                    <h4>Navigation</h4>
                    <a href="#life-in-months">Months</a>
                </div>
                    <div class="col-md-8">
                    <h1 className='title'>This is your life broken down</h1>
                    <BirthDateSelector onDobChanged={this.dobChanged} />
                    <LifeInMonths 
                        dob={this.state.dob}
                    />
                    </div>
                    <div class="col-md-2"></div>
                </div>
            )
        }
        return (
            <div className='wrapper'>
            <div class="col-md-2"></div>
            <div class="col-md-8">
            <h1 className='title'>This is your life broken down</h1>
            <BirthDateSelector onDobChanged={this.dobChanged} />
            </div>
            <div class="col-md-2"></div>
        </div>
        )
    }
}


ReactDOM.render(<App />, document.querySelector('.container'))