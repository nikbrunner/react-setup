import React from 'react';

import Markdown from '../../Elements/Markdown/Markdown';

import WelcomeContent from './Welcome.md';

import './Welcome.scss';

const Welcome = () => {
    return (
        <div className='Welcome'>
            <Markdown
                content={WelcomeContent}
                classNames={'Welcome__text'}
            />
        </div>
    );
};

export default Welcome;
