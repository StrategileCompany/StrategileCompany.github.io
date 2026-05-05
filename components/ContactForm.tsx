'use client';

import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { Button } from './Button';

export function ContactForm() {
  const { t } = useLanguage();
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '');
    const email = String(data.get('email') ?? '');
    const company = String(data.get('company') ?? '');
    const message = String(data.get('message') ?? '');

    const subject = encodeURIComponent(`Strategile Company — ${name}`);
    const body = encodeURIComponent(
      `Nome: ${name}\nEmail: ${email}\nEmpresa: ${company}\n\n${message}`,
    );
    const mailto = `mailto:contato@strategilecompany.com.br?subject=${subject}&body=${body}`;
    window.location.href = mailto;
    // Permite o cliente reabrir caso queira
    setTimeout(() => setSubmitting(false), 1200);
  };

  return (
    <form onSubmit={onSubmit} className="grid gap-6 max-w-2xl" noValidate>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label={t.contact.form.name} name="name" type="text" required autoComplete="name" />
        <Field
          label={t.contact.form.email}
          name="email"
          type="email"
          required
          autoComplete="email"
        />
      </div>
      <Field label={t.contact.form.company} name="company" type="text" autoComplete="organization" />
      <FieldArea
        label={t.contact.form.message}
        name="message"
        required
        placeholder={t.contact.form.messagePlaceholder}
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mt-2"
      >
        <Button type="submit" variant="primary" size="lg" withArrow disabled={submitting}>
          {submitting ? t.contact.form.submitting : t.contact.form.submit}
        </Button>
      </motion.div>
    </form>
  );
}

type FieldProps = {
  label: string;
  name: string;
  type: 'text' | 'email';
  required?: boolean;
  autoComplete?: string;
};

function Field({ label, name, type, required, autoComplete }: FieldProps) {
  return (
    <label className="block">
      <span className="block text-eyebrow uppercase text-bone-200/55 mb-2">
        {label}
        {required && <span className="text-gold-300 ml-1">*</span>}
      </span>
      <input
        type={type}
        name={name}
        required={required}
        autoComplete={autoComplete}
        className="block w-full rounded-xl border border-bone-100/15 bg-bone-100/[0.02] px-4 py-3 text-body text-bone-50 placeholder:text-bone-200/30 focus:border-gold-300/50 focus:bg-bone-100/[0.04] focus:outline-none transition-all duration-200 ease-apple"
      />
    </label>
  );
}

type FieldAreaProps = {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
};

function FieldArea({ label, name, required, placeholder }: FieldAreaProps) {
  return (
    <label className="block">
      <span className="block text-eyebrow uppercase text-bone-200/55 mb-2">
        {label}
        {required && <span className="text-gold-300 ml-1">*</span>}
      </span>
      <textarea
        name={name}
        required={required}
        placeholder={placeholder}
        rows={6}
        className="block w-full rounded-xl border border-bone-100/15 bg-bone-100/[0.02] px-4 py-3 text-body text-bone-50 placeholder:text-bone-200/30 focus:border-gold-300/50 focus:bg-bone-100/[0.04] focus:outline-none transition-all duration-200 ease-apple resize-none leading-relaxed"
      />
    </label>
  );
}
