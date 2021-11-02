import React from 'react';
import SimpleForm from './SimpleForm';
import FormView from './FormView';

class SmartForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputUpdate = this.handleInputUpdate.bind(this);
        this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
        this.state = {
            name: null,
            contact: null,
            nameToShow: null,
            contactToShow: null
        }
    }

    handleInputUpdate(data) {
        this.setState(data)
    }

    handleOnButtonClick() {
        this.setState({ nameToShow: this.state.name, contactToShow: this.state.contact })
    }

    render() {
        return (
            <div className='smartForm'>
                <SimpleForm onUpdate={ this.handleInputUpdate } />
                <input type='button' value='Показать введенные данные' onClick={ this.handleOnButtonClick } />
                <FormView name={ this.state.nameToShow } contact={ this.state.contactToShow } />
            </div>            
        )
    }
}

export default SmartForm;
