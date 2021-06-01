/**
 * @jest-environment jsdom
 */

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

describe('App component', () => {
  it('renders App according to input colors, or history using redo/undo buttons', () => {
    render(<App />);

    const undo = screen.getByRole('button', { name: 'undo-button' });
    const redo = screen.getByRole('button', { name: 'redo-button' });
    const input = screen.getByLabelText('color-input');

    const div = screen.getByLabelText('color-div');
    expect(div).toHaveStyle('background-color: #FF0000');

    fireEvent.input(input, { target: { value: '#FFEEDD' } });
    expect(div).toHaveStyle('background-color: #FFEEDD');

    fireEvent.click(undo);
    expect(div).toHaveStyle('background-color: #FF0000');

    fireEvent.input(input, { target: { value: '#DDEEFF' } });
    expect(div).toHaveStyle('background-color: #DDEEFF');

    fireEvent.click(redo);
    expect(div).toHaveStyle('background-color: #FFEEDD');

  });
});
