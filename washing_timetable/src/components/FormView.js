import React from 'react';

class FormView extends React.Component {
    render() {
        console.log(`this.props`, this.props)
        if (!this.props.name || !this.props.time) {
            return null;
        }
        return (
            <div>
                <p>{ this.props.name }, Вы успешно записались на { this.props.time.format('LLLL') }</p>
            </div>
        );
    }
}

export default FormView; 
