import React from 'react';

import Markdown from '../../Elements/Markdown/Markdown';

import staticContent from './staticContent.md';

import './Welcome.scss';

const Welcome = () => {
    return (
        <div className='Welcome'>
            <h1 className='Welcome__header'>My React Setup</h1>
            <Markdown content={staticContent}/>
            <small className='Welcome__author'>
                Author:{' '}
                <a
                    href='http://nibru.dev'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    nibru
                </a>
            </small>
        </div>
    );
};

export default Welcome;
