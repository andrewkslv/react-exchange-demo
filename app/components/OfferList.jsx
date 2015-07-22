'use strict';

import React from 'react';
import OfferItemCommon from './OfferItemCommon';
import OfferItemSpecial from './OfferItemSpecial';
import OfferModal from './OfferModal';
var dataJson = require("json!../db.json");

export default class OfferList extends React.Component {
    //loadListCompany() {
        //$.ajax({
        //    url: 'http://localhost:3000/exchange',
        //    dataType: 'json',
        //    success: (data) => {
        //        this.setState({data: data});
        //    },
        //    error: (xhr, status, err) => {
        //        console.error('http://localhost:3000/exchange', status, err.toString());
        //    }
        //});
    //}
    //componentDidMount() {
    //    this.loadListCompany();
    //}
    constructor() {
        super();
        this.state = { data: dataJson.exchange };
    }

    render() {
        let offerListNode = this.state.data.map((company) => {
            if (company.special) {
                return ( <OfferItemSpecial company={company} key={'li-company-' + company.id}/> )
            } else {
                return ( <OfferItemCommon company={company} key={'li-company-' + company.id}/> )
            }
        });

        let offerModalNode = this.state.data.map((company) => {
            return ( <OfferModal company={company} key={'modal-company-' + company.id}/> )
        });

        return (
            <div>
                <ul className="uk-grid uk-margin-top uk-margin-large-bottom" data-uk-grid-margin >
                    {offerListNode}
                </ul>
                {offerModalNode}
            </div>
        )
    }
}