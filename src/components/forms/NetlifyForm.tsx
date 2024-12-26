import React, { FormEvent } from 'react';

interface NetlifyFormProps {
  name: string;
  children: React.ReactNode;
  className?: string;
  onSubmit?: (e: FormEvent) => void;
}

export function NetlifyForm({ name, children, className = '', onSubmit }: NetlifyFormProps) {
  const handleSubmit = (e: FormEvent) => {
    if (onSubmit) onSubmit(e);
  };

  return (
    <form
      name={name}
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={className}
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value={name} />
      <div hidden>
        <input name="bot-field" />
      </div>
      {children}
    </form>
  );
}