import React from 'react';

export default class Footer extends React.Component {
    constructor() {
        super();
        this.state = {
            author: {
                name: '@Andrew EclipticWld',
                url: 'https://github.com/EclipticWld'
            },
            repository: {
                name: 'Repository',
                url: 'https://github.com/EclipticWld/react-exchange-demo'
            }
        }
    }

    render(){
        let state = this.state;
        return(
            <footer className="ex-footer">
                <div className="uk-container uk-container-center">
                    <div className="uk-clearfix">
                        <div className="uk-float-left">
                            <a className="ex-text-white" target="_blank" href={state.author.url}>{state.author.name}</a>
                        </div>
                        <div className="uk-float-right">
                            <a className="ex-text-white" href={state.repository.url} target="_blank">{state.repository.name}</a>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}