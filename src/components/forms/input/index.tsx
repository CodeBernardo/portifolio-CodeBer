import { motion } from "framer-motion";
import { forwardRef, InputHTMLAttributes } from "react";
import { FieldError } from "react-hook-form";
import s from "./index.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  error: Partial<FieldError> | undefined;
}

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  id: string;
  error: Partial<FieldError> | undefined;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, error, ...rest }, ref): JSX.Element => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          {...rest}
          ref={ref}
          className={error ? s.field_error : ""}
        />
        {error && (
          <motion.small animate={{ scale: [0.6, 1] }} className="text3">
            {error.message}
          </motion.small>
        )}
      </>
    );
  },
);

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, id, error, ...rest }, ref): JSX.Element => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <textarea
          id={id}
          {...rest}
          ref={ref}
          className={error ? s.field_error : ""}
        />
        {error && (
          <motion.small animate={{ scale: [0.6, 1] }} className="text3">
            {error.message}
          </motion.small>
        )}
      </>
    );
  },
);
