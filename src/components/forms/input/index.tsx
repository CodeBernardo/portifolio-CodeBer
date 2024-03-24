import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, ...rest }, ref): JSX.Element => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} {...rest} ref={ref} />
      </>
    );
  },
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, id, ...rest }, ref): JSX.Element => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <textarea id={id} {...rest} ref={ref} />
      </>
    );
  },
);
