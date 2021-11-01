import React from 'react';

class FormView extends React.Component {
    render() {
        if (!this.props.name || !this.props.contact) {
            return null;
        }
        return (
            <div>
                <p>Ваше имя: { this.props.name }</p>
                <p>Ваш контакт для свзяи: { this.props.contact } </p>
            </div>
        );
    }
}

export default FormView;