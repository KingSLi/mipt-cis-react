import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            current_number: 0
        } 
    }

    componentDidMount() {
        const MAX_COUNT = 10
        this.interval_id = setInterval(
            () => {
                if (this.state.current_number < MAX_COUNT && this.state.current_number >= 0) {
                    this.setState({
                        current_number: this.state.current_number + 1
                    });
                } else {
                    clearInterval(this.interval_id);
                }
            },
            1000
        )
    }


    render() {
        return (
            <div className='counter'>
                <p className='counterName'>{this.props.name}</p>
                <p className='counterNumber'>
                    {this.props.start_number + this.state.current_number}
                </p>
            </div>
        )       
    }

}

export default Counter;
