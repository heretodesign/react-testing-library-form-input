import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

it('check if form displays', () => {
  const { getByTestId } = render(<App />);
  const form = getByTestId('form');
  const output = getByTestId('output');
  const label = getByTestId('label');
  const nameInput = getByTestId('nameInput');
  const submit = getByTestId('submit');

  expect(form).toBeInTheDocument();
  expect(output).toBeEmpty('');
  expect(label).toHaveTextContent('Enter Name');
  expect(nameInput).toHaveValue('');
  expect(submit).toBeInTheDocument();
});

it('should check if message is displayed when button is clicked', () => {
  const { getByTestId } = render(<App />);
  const output = getByTestId('output');
  const nameInput = getByTestId('nameInput');
  const submit = getByTestId('submit');

  expect(output).toBeEmpty('');
  expect(nameInput).toHaveValue('');

  fireEvent.change(nameInput, { target: { value: 'Sama' } });
  fireEvent.click(submit);
  expect(nameInput).toHaveValue('Sama');
  expect(output).not.toBeEmpty('');
});