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

export default SimpleForm;