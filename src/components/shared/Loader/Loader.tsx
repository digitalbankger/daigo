import classNames from 'classnames';
import { HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {}

const Loader = (props: Props) => {
    return <div {...props} className={classNames('loader', props.className)}></div>;
};

export default Loader;
