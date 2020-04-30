import React from 'react';

import Markdown from '../../Elements/Markdown/Markdown';

import staticContent from './staticContent.md';

import './Welcome.scss';

const Welcome = () => {
    return (
        <div className='Welcome'>
            <Markdown content={staticContent}/>
        </div>
    );
};

export default Welcome;
