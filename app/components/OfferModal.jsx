'use strict';

import React from 'react';
import FormUserData from './FormUserData'

export default class ModalCompany extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            cancel: 'Вернуться к предложениями',
            specialDuration: 'Акция действует:',
            specialDurationFormat: 'часов',
            specialTerms: 'Условия:',
            specialTermsMore: 'Подробнее'
        }
    }
    componentDidMount(){
        UIkit.$html.trigger('changed.uk.dom');
    }

    render() {
        let props = this.props;
        let state = this.state;
        let dataUkToggle = '{target:\'#modal-toggle-' + props.company.id +
            '\',animation:\'uk-animation-fade,uk-animation-fade\'}';
        let dataUkToggleTarget = 'modal-toggle-' + props.company.id;

        return (
            <div id={'modal-company-' + props.company.id} className="uk-modal">
                <div className="uk-modal-dialog uk-modal-dialog-large">
                    <a className="uk-modal-close uk-close"></a>
                    <div className="uk-modal-header">
                        <h2 className="uk-text-warning">
                            <i className="uk-icon-gift uk-icon-small"></i> {props.company.saleText}
                        </h2>
                    </div>
                    <div className="uk-grid" data-uk-margin="{cls:'uk-margin-top'}">
                        <div className="uk-width-1-1 uk-width-medium-1-2" data-uk-margin="{cls:'uk-margin-top'}">
                            <div className="uk-cover-background">
                                <img className="uk-border-rounded ex-OfferPageImg-img"
                                     src={props.company.modal.imagePageUrl} />
                            </div>
                            <img className="ex-SiteLogo-img"
                                 src={props.company.imageLogoUrl}
                                 alt={props.company.name}/>
                            <div className="uk-panel">
                                {props.company.modal.description}
                            </div>
                        </div>
                        <div className="uk-width-1-1 uk-width-medium-1-2">
                            <FormUserData />
                            <p>
                                <i className="uk-icon-clock-o uk-icon-small"></i>
                                {' ' +state.specialDuration + ' ' + props.company.modal.offerDuration + ' '
                                + state.specialDurationFormat}
                            </p>
                            <hr />
                            <p><i className="uk-icon-hand-o-up uk-icon-small"></i>{' '+ state.specialTerms}</p>
                            <p className="uk-text-primary">
                                {props.company.modal.offerConditionsMov ? props.company.modal.offerConditionsMov : ''}
                            </p>
                            <p>{props.company.modal.offerConditions}</p>
                            <div className="uk-display-inline">
                                <i className="uk-icon-info-circle uk-icon-small uk-text-success"></i>&nbsp;
                                <a className="uk-button-link uk-text-success" data-uk-toggle={dataUkToggle}>
                                    {state.specialTermsMore}
                                </a>
                            </div>
                            <div id={dataUkToggleTarget} className="ex-OfferAgreement-text uk-hidden">
                                {props.company.modal.offerAgreement.map((offerAgreement => {
                                    return (<p key={'offerAgreement-' + offerAgreement.id}>{offerAgreement.text}</p> )
                                }))}
                            </div>
                        </div>
                    </div>
                    <div className="uk-modal-footer uk-text-right">
                        <button type="button" className="uk-button uk-modal-close">{this.state.cancel}</button>
                    </div>
                </div>
            </div>
        );
    }
}