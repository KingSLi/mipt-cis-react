import React from 'react';

class SimpleForm extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <span>Ваше имя</span>
                    <input type="text" onChange={ (e) => this.props.onUpdate({ name: e.target.value }) } />
                </p>
                <p>
                    <span>Контакт для связи</span>
                    <input type="text" onChange={ (e) => this.props.onUpdate({ contact: e.target.value }) } />
                </p>
            </div>
        )       
    }
}

class FormView extends React.Component {
    render() {
        if (!this.props.contactDataToShow) {
            return null;
        }
        const { name, contact } = this.props.contactDataToShow;
        if (!name || !contact) {
            return null
        }
        return (
            <div>
                <p>Ваше имя: { name }</p>
                <p>Ваш контакт для свзяи: { contact } </p>
            </div>
        );
    }
}

class SmartForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleInputUpdate = this.handleInputUpdate.bind(this);
        this.handleOnButtonClick = this.handleOnButtonClick.bind(this);
        this.state = {
            contactDataToShow: null,
            contactData: null
        }
    }

    handleInputUpdate(data) {
        this.setState({ contactData: { ...this.state?.contactData, ...data } })
    }

    handleOnButtonClick() {
        this.setState({ contactDataToShow: this.state.contactData })
    }

    render() {
        return (
            <div className='smartForm'>
                <SimpleForm onUpdate={ this.handleInputUpdate } />
                <input type='button' value='Показать введенные данные' onClick={ this.handleOnButtonClick } />
                <FormView contactDataToShow={ this.state.contactDataToShow } />
            </div>            
        )
    }
}

export default SmartForm;
