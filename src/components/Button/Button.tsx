/* eslint-disable react/button-has-type */
import './Button.scss';

export type ButtonType = JSX.IntrinsicElements['button']['type'];

interface ButtonProps {
  text: string;
  className?: string;
  type?: ButtonType;
}

export default function Button({ ...props }: ButtonProps): JSX.Element {
  return (
    <button type={props.type} className={`btn ${props.className}`}>
      {props.text}
    </button>
  );
}

Button.defaultProps = {
  className: '',
  type: 'button',
};
