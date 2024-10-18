import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Input, { Props } from './Input';

describe('Input', () => {
    const defaultProps: Props = {
        label: 'Username',
    };

    it('should show floated label when input is focused', () => {
        const { getByTestId } = render(<Input {...defaultProps} />);
        const input = getByTestId('input') as HTMLInputElement;
        fireEvent.focus(input);
        expect(input.classList).toContain('floated-labels--active');
        fireEvent.blur(input);
        expect(input.classList).not.toContain('floated-labels--active');
    });

    it('should show floated label when input is filled', () => {
        const { getByTestId } = render(<Input {...defaultProps} />);
        const input = getByTestId('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'John' } });
        expect(input.classList).toContain('floated-labels--active');
    });

    it('should show trigger onFocus events', () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Input {...defaultProps} onFocus={fn} />);
        const input = getByTestId('input') as HTMLInputElement;
        fireEvent.focus(input);
        expect(fn).toBeCalledTimes(1);
    });

    it('should show trigger onBlur events', () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Input {...defaultProps} onBlur={fn} />);
        const input = getByTestId('input') as HTMLInputElement;
        fireEvent.blur(input);
        expect(fn).toBeCalledTimes(1);
    });

    it('should show trigger onChange events', () => {
        const fn = jest.fn();
        const { getByTestId } = render(<Input {...defaultProps} onChange={fn} />);
        const input = getByTestId('input') as HTMLInputElement;
        fireEvent.change(input, { target: { value: 'value' } });
        expect(fn).toBeCalledTimes(1);
    });
});
