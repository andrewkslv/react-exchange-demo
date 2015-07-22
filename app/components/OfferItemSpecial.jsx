import React from 'react';

export default class OfferItemSpecial extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bestOffer: 'Лучшее предложение',
            getOffer: 'Получить '
        }
    }
    render(){
        let props = this.props;
        let state = this.state;
        let dataUkModal = '{target:\'#modal-company-' + props.company.id + '\'}';

        return (
            <li className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-2-3">
                <a className="uk-panel uk-panel-hover uk-panel-box ex-Offer" data-uk-modal={dataUkModal}>
                    <div className="ex-LabelBest">
                        <div className="ex-LabelBest-text">
                            {state.bestOffer}
                        </div>
                    </div>
                    <div className="uk-grid">
                        <div className="uk-width-1-1 uk-width-large-1-2">
                            <div className="ex-Offer-logo ex-Offer-logo-special">
                                <img className="uk-align-center uk-responsive-height"
                                     src={props.company.imageLogoUrl}
                                     alt={props.company.name}/>
                            </div>
                        </div>
                        <div className="uk-width-1-1 uk-width-large-1-2">
                            <div className="ex-Offer-text ex-Offer-text-special">
                                    <span>
                                        {props.company.shortText}
                                    </span>
                            </div>
                        </div>
                        <div className="ex-Offer-footer ex-Offer-footer-special uk-width-1-1 uk-position-bottom-left">
                            {props.company.saleText}
                        </div>
                        <div className="ex-Offer-footer ex-Offer-footer-special-second uk-visible-large
                                uk-position-bottom-right">
                            {state.getOffer}<i className="uk-icon-arrow-right"></i>
                        </div>
                    </div>
                </a>
            </li>
        )
    }
}