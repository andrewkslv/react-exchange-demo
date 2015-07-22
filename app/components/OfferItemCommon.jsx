import React from 'react';

export default class OfferItemCommon extends React.Component {

    render(){
        let props = this.props;
        let dataUkModal = '{target:\'#modal-company-' + props.company.id + '\'}';

        return (
            <li className="uk-width-1-1 uk-width-medium-1-2 uk-width-large-1-3">
                <a className="uk-panel uk-panel-hover uk-panel-box ex-Offer"
                   data-uk-modal={dataUkModal}>
                    <div className="ex-Offer-logo">
                        <img className="uk-align-center uk-responsive-height"
                             src={props.company.imageLogoUrl}
                             alt={props.company.name}/>
                    </div>
                    <div className="ex-Offer-text">
                        <span>
                            {props.company.shortText}
                        </span>
                    </div>
                    <div className="ex-Offer-footer ex-Offer-footer-color uk-position-bottom-left">
                        {props.company.saleText}
                    </div>
                </a>
            </li>
        )
    }
}