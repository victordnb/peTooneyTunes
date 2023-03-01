import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MenuHead from './menuHead';

describe('<MenuHead />', () => {
  test('it should mount', () => {
    render(<MenuHead />);
    
    const menuHead = screen.getByTestId('MenuHead');

    expect(menuHead).toBeInTheDocument();
  });
});