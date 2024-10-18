import classNames from 'classnames';
import {
    ButtonHTMLAttributes,
    Dispatch,
    HTMLAttributes,
    SetStateAction,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { useIsFirstRender } from 'usehooks-ts';
import useIsomorphicLayoutEffect from '@/hooks/use-isomorphic-layout-effect';
import { usePrevious } from '@/hooks/use-previous';
import { getCSSCustomProp } from '@/utils/css';

interface Props extends HTMLAttributes<HTMLElement> {
    collapsed?: boolean;
    onCollapse?: () => void;
    onExpand?: () => void;
}

const CollapseContext = createContext<{ collapsed: boolean; setCollapsed: Dispatch<SetStateAction<boolean>> }>({
    collapsed: true,
    setCollapsed: () => {},
});

export const useCollapseContext = () => useContext(CollapseContext);

const Toggler = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { collapsed, setCollapsed } = useContext(CollapseContext);

    return (
        <button
            {...props}
            className={classNames('collapse__toggler', props.className)}
            onClick={() => setCollapsed(!collapsed)}
            aria-expanded={!collapsed}
        ></button>
    );
};

const Content = ({ children }: HTMLAttributes<HTMLElement>) => {
    const content = useRef<HTMLDivElement>(null);
    const { collapsed } = useCollapseContext();
    const [minVisibleHeight, setMinVisibleHeight] = useState(0);
    const [contentHeight, setContentHeight] = useState<number | string>(collapsed ? 0 : '');
    const isFirstRender = useIsFirstRender();

    const setUIState = useCallback(() => {
        if (content.current) {
            if (collapsed) {
                setContentHeight(Math.min(content.current.scrollHeight, minVisibleHeight));
            } else {
                setContentHeight(content.current.scrollHeight);
            }
        }
    }, [collapsed, minVisibleHeight]);

    useIsomorphicLayoutEffect(() => {
        setUIState();
    }, [setUIState]);

    useEffect(() => {
        let ro: ResizeObserver | null;

        if ('ResizeObserver' in window && content.current) {
            ro = new ResizeObserver((entries, observer) => {
                entries.forEach((entry) => {
                    observer.unobserve(entry.target);
                    setUIState();
                });
            });
            ro.observe(content.current);
        }

        return () => {
            if (ro) {
                ro.disconnect();
                ro = null;
            }
        };
    }, [setUIState]);

    useIsomorphicLayoutEffect(() => {
        const onResize = () => {
            if (content.current) {
                const parentCollapse = content.current.closest<HTMLElement>('.collapse');

                if (parentCollapse) {
                    const minHeight = getCSSCustomProp(parentCollapse, '--min-visible-height', 'number') as number;
                    setMinVisibleHeight(minHeight);
                }
            }
        };

        onResize();
        window.addEventListener('resize', onResize);

        return () => window.removeEventListener('resize', onResize);
    }, []);

    return (
        <div ref={content} className="collapse__content" style={{ height: isFirstRender ? undefined : contentHeight }}>
            {children}
        </div>
    );
};

const Collapse = ({ children, collapsed, onCollapse, onExpand, ...props }: Props) => {
    const [innerCollapsed, setInnerCollapsed] = useState(true);
    const prevInnerCollapsed = usePrevious(innerCollapsed);

    if (typeof collapsed !== 'undefined') {
        setInnerCollapsed(collapsed);
    }

    useEffect(() => {
        if (typeof prevInnerCollapsed !== 'undefined') {
            if (innerCollapsed) {
                onCollapse?.();
            } else {
                onExpand?.();
            }
        }
    }, [prevInnerCollapsed, innerCollapsed, onCollapse, onExpand]);

    return (
        <CollapseContext.Provider value={{ collapsed: innerCollapsed, setCollapsed: setInnerCollapsed }}>
            <div
                {...props}
                className={classNames('collapse', props.className, { 'collapse--opened': !innerCollapsed })}
            >
                {children}
            </div>
        </CollapseContext.Provider>
    );
};

Collapse.Toggler = Toggler;
Collapse.Content = Content;

export default Collapse;
