'use strict';

import React from 'react';
import OfferList from './OfferList';
import Footer from './Footer';

export default class App extends React.Component {

    render() {

        return (
            <div className="ex-Wrapper">
                <div className="sticky-wrapper">
                    <div className="uk-container uk-container-center">
                        <OfferList />
                    </div>
                    <div className="sticky-push"></div>
                </div>
                <Footer />
            </div>
        );
    }

}