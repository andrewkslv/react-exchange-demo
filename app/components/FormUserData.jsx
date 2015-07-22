import React from 'react';

export default class FormUserData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            getOffer: 'Получить предложение',
            formName: null,
            formEmail: null
        }
    }

    handleChangeFormName(e) {
        this.setState({formName: e.target.value});
    }
    handleChangeFormEmail(e) {
        this.setState({formEmail: e.target.value});
    }
    handleSubmit(e) {
        e.preventDefault();
    }

    render() {
        return (
            <form className="uk-form" data-uk-margin="{cls:'uk-margin-top'}">
                <div className="uk-form-icon uk-width-1-1">
                    <i className="uk-icon-user uk-icon-small"></i>
                    <input type="text"
                           onChange={this.handleChangeFormName}
                           className="uk-width-1-1 uk-form-large" />
                </div>
                <div className="uk-form-icon uk-width-1-1">
                    <i className="uk-icon-envelope uk-icon-small"></i>
                    <input type="text"
                           onChange={this.handleChangeFormEmail}
                           className="uk-width-1-1 uk-form-large" />
                </div>
                <button type="submit"
                        disabled={false}
                        onClick={this.handleSubmit}
                        className="uk-button uk-button-large uk-width-1-1 uk-button-success">
                    <i className="uk-icon-check uk-icon-small"></i>
                    {' ' + this.state.getOffer}
                </button>
            </form>
        )
    }
}
