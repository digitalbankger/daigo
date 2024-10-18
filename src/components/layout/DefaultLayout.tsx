import React from 'react';
import type { NextPage } from 'next';
import classnames from 'classnames';

interface Props extends React.HTMLAttributes<HTMLElement> {}

const DefaultLayout: NextPage<Props> = ({ children, ...props }) => {
    return (
        <div {...props} className={classnames('page', props.className)}>
            {children}
        </div>
    );
};

export default DefaultLayout;
