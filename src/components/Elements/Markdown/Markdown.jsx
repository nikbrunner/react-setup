import React from 'react';
import marked from 'marked';

import './Markdown.scss';

const Markdown = ({content, classNames}) => {
    const getStaticContent = () => {
        const rawMarkup = marked(content);
        return {__html: rawMarkup};
    };

    return (
        <div
            className={`${classNames ? classNames : ''} Markdown`}
            dangerouslySetInnerHTML={getStaticContent()}
        />
    );
};

export default Markdown;
