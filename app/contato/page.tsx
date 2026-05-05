'use client';

import { useLanguage } from '@/lib/i18n/LanguageProvider';
import { PageHeader } from '@/components/PageHeader';
import { ContactForm } from '@/components/ContactForm';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const { t } = useLanguage();
  return (
    <>
      <PageHeader title={t.contact.title} sub={t.contact.sub} eyebrow={t.contact.eyebrow} />

      <section className="container-editorial pb-24 lg:pb-32">
        <div className="grid grid-cols-12 gap-6 lg:gap-12">
          <div className="col-span-12 lg:col-span-8">
            <ContactForm />
          </div>

          <motion.aside
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="col-span-12 lg:col-span-4 lg:pl-8 lg:border-l lg:border-bone-100/[0.08]"
          >
            <div>
              <span className="text-eyebrow uppercase text-bone-200/45">
                {t.contact.direct.label}
              </span>
              <a
                href={`mailto:${t.contact.direct.email}`}
                className="mt-3 block font-display text-h3 text-bone-50 hover:text-gold-300 transition-colors duration-200 break-words"
              >
                {t.contact.direct.email}
              </a>
            </div>

            <div className="mt-12">
              <span className="text-eyebrow uppercase text-bone-200/45">Strategile</span>
              <address className="not-italic mt-3 text-body text-bone-200/75 space-y-1">
                <div>Brasil</div>
                <div>Atendimento remoto</div>
              </address>
            </div>
          </motion.aside>
        </div>
      </section>
    </>
  );
}
