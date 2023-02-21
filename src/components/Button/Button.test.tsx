import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';
import Button from './Button';

describe('Tests for Button component', () => {
  it('Renders hello world', () => {
    const buttonText = 'Button text';
    render(<Button text={buttonText} />);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });
});
