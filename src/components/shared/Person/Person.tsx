import { forwardRef } from 'react';
import classNames from 'classnames';
import Image from 'next/image';
import { ImageShape } from '@/types';

interface Props extends React.HTMLAttributes<HTMLElement> {
    img?: ImageShape;
    name: string;
    text?: string;
}

const Person = forwardRef<HTMLDivElement, Props>(({ img, name, text, ...props }, ref) => {
    return (
        <div {...props} ref={ref} className={classNames('person', props.className)}>
            {img && (
                <Image
                    src={img.src}
                    width={img.width}
                    height={img.height}
                    alt={name}
                    className="img-fluid person__img"
                ></Image>
            )}
            <div className="person__content">
                <div className="person__name">{name}</div>
                {text && <div className="text-xs person__position">{text}</div>}
            </div>
        </div>
    );
});

Person.displayName = 'Person';

export default Person;
