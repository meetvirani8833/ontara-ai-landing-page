import { motion } from 'framer-motion';

const sections = [
  {
    number: '01',
    title: 'Information We Collect',
    content: (
      <>
        <p className="mb-4">We collect the following types of information:</p>
        <ul className="list-none space-y-4">
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">Business Account Information:</strong>{' '}
            When a business signs up via our platform, we collect their name, WhatsApp Business Account details, phone number, business name, and authorized representative information through Meta's Embedded Signup flow.
          </li>
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">End-User Message Data:</strong>{' '}
            When customers message a business through WhatsApp, we collect and process the sender's name, phone number, WhatsApp profile name, message content (text, media, and attachments), and timestamps. This constitutes WhatsApp message logs that we retain to facilitate automated responses, customer support, and conversation history.
          </li>
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">Usage Data:</strong>{' '}
            We collect analytics on message volumes, response times, and platform usage to improve our services.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: '02',
    title: 'How We Use Your Information',
    content: (
      <ul className="list-none space-y-3">
        <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
          To provide AI-powered automated customer support on behalf of our business clients
        </li>
        <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
          To route customer inquiries to the appropriate business representative when escalation is needed
        </li>
        <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
          To manage and display conversation history in the business admin dashboard
        </li>
        <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
          To improve our platform's response quality and reliability
        </li>
      </ul>
    ),
  },
  {
    number: '03',
    title: 'Data Storage and Security',
    content: (
      <>
        <p className="mb-4">
          All data is stored securely in encrypted databases. We implement industry-standard security measures including HTTPS encryption, webhook signature verification, and access controls.
        </p>
        <p>
          <strong className="text-[var(--ink)]">Data Retention:</strong>{' '}
          Conversation logs and account information are retained for up to 12 months from the last activity on an account, unless a business client requests earlier deletion or a longer period is required to comply with law. Backups may persist for a limited additional period before being permanently purged.
        </p>
      </>
    ),
  },
  {
    number: '04',
    title: 'Third-Party Services',
    content: (
      <>
        <p className="mb-4">Our platform integrates with the following third-party services. Your data, including names, phone numbers, and WhatsApp message logs, is processed and transmitted through these services as part of delivering our platform:</p>
        <ul className="list-none space-y-4">
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">Meta WhatsApp Business Platform:</strong>{' '}
            All WhatsApp messages are sent and received through Meta's WhatsApp Cloud API. Your message data, phone numbers, and profile information are processed and stored on Meta's infrastructure as part of this integration. Subject to{' '}
            <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--accent)]/40 hover:decoration-[var(--ink)]">
              WhatsApp's Privacy Policy
            </a>{' '}and{' '}
            <a href="https://www.whatsapp.com/legal/business-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--accent)]/40 hover:decoration-[var(--ink)]">
              WhatsApp Business Policy
            </a>.

            <span className="block mt-3">
              <strong className="text-[var(--ink)]">Billing by Meta:</strong>{' '}
              Conversation-based charges for WhatsApp messaging are billed and collected directly by Meta from the payment method linked to your WhatsApp Business Account (WABA). Ontara Connect charges only a separate platform/subscription fee for use of our software — we do not set, process, collect, or have visibility into Meta's conversation charges. Any billing disputes, unexpected deductions, refunds, currency conversion, or tax issues related to charges made by Meta must be raised directly with Meta and are outside our control and responsibility.
            </span>

            <span className="block mt-3">
              <strong className="text-[var(--ink)]">Changes to Meta's Policies & Pricing:</strong>{' '}
              Meta may, at its sole discretion and without our control, change its pricing, messaging policies, template approval rules, rate limits, or platform features at any time. Such changes may affect message delivery, the amount charged by Meta, or account functionality. We are not liable for any loss, cost, or disruption arising from changes made unilaterally by Meta. Where changes materially affect your use of our platform, we will make reasonable efforts to notify you, but the update itself remains Meta's decision.
            </span>

            <span className="block mt-3">
              <strong className="text-[var(--ink)]">Account Restrictions by Meta:</strong>{' '}
              Meta independently reserves the right to restrict, flag, suspend, or ban a WhatsApp Business Account for violations of its Business Policy, Commerce Policy, or messaging limits. These decisions are made solely by Meta based on its own review; we do not control, influence, or guarantee reinstatement of accounts actioned by Meta.
            </span>
          </li>
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">OpenAI:</strong>{' '}
            Message content may be sent to OpenAI's API for generating intelligent automated responses. No personally identifiable information beyond message content is shared. Subject to{' '}
            <a href="https://openai.com/privacy" target="_blank" rel="noopener noreferrer" className="text-[var(--accent)] hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--accent)]/40 hover:decoration-[var(--ink)]">
              OpenAI's Privacy Policy
            </a>.
          </li>
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">MongoDB:</strong>{' '}
            For secure, encrypted data storage of conversation logs and account information.
          </li>
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">International Data Transfers:</strong>{' '}
            Because Meta, OpenAI, and MongoDB operate infrastructure globally, your data may be transferred to, stored in, and processed in countries outside India, including the United States. By using our services, you acknowledge and consent to this transfer.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: '05',
    title: 'Business Client Responsibilities',
    content: (
      <p>
        Businesses using Ontara Connect are responsible for informing their own customers about the use of automated messaging services and ensuring compliance with applicable data protection regulations in their jurisdiction.
      </p>
    ),
  },
  {
    number: '06',
    title: "Children's Data",
    content: (
      <p>
        Our services are not directed to children, and WhatsApp's own terms restrict use of its platform by individuals under 13. We do not knowingly collect personal data from children. If we become aware that we have inadvertently collected data from a child, we will take steps to delete it promptly. If you believe a child's data has been shared with us, please contact us at{' '}
        <a href="mailto:ontaraai@gmail.com" className="text-[var(--accent)] hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--accent)]/40 hover:decoration-[var(--ink)]">
          ontaraai@gmail.com
        </a>.
      </p>
    ),
  },
  {
    number: '07',
    title: 'Your Rights',
    content: (
      <>
        <p className="mb-4">
          You have the right to access, correct, or delete your personal data at any time. To exercise these rights:
        </p>
        <ul className="list-none space-y-4">
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">Request Data Deletion:</strong>{' '}
            Send an email to{' '}
            <a href="mailto:ontaraai@gmail.com" className="text-[var(--accent)] hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--accent)]/40 hover:decoration-[var(--ink)]">
              ontaraai@gmail.com
            </a>{' '}
            with the subject line "Data Deletion Request" along with the phone number or business account associated with your data. We will process your request within 30 days.
          </li>
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">Opt Out of Messaging:</strong>{' '}
            End users can opt out of receiving automated messages at any time by replying "STOP" to any WhatsApp conversation powered by Ontara Connect, or by contacting the business directly. Businesses can also disable automated messaging for specific users through the admin dashboard.
          </li>
          <li className="pl-6 relative before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-[1px] before:bg-[var(--accent)]">
            <strong className="text-[var(--ink)]">Access Your Data:</strong>{' '}
            You may request a copy of the personal data we hold about you by emailing{' '}
            <a href="mailto:ontaraai@gmail.com" className="text-[var(--accent)] hover:text-[var(--ink)] transition-colors underline underline-offset-4 decoration-[var(--accent)]/40 hover:decoration-[var(--ink)]">
              ontaraai@gmail.com
            </a>.
            Business clients can also view and manage their data through the Ontara Connect admin dashboard.
          </li>
        </ul>
      </>
    ),
  },
  {
    number: '08',
    title: 'Limitation of Liability',
    content: (
      <p>
        To the maximum extent permitted by law, Ontara AI and Ontara Connect shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from your use of our platform. We are not liable for outages, data loss, delivery failures, or service interruptions caused by third-party providers, including Meta, OpenAI, MongoDB, or our hosting infrastructure. Our total liability for any claim arising from these services shall not exceed the platform fees paid to us in the three (3) months preceding the claim.
      </p>
    ),
  },
  {
    number: '09',
    title: 'Governing Law and Jurisdiction',
    content: (
      <p>
        This Privacy Policy is governed by the laws of India. Any disputes arising out of or relating to this policy shall be subject to the exclusive jurisdiction of the courts in Bengaluru, Karnataka, India.
      </p>
    ),
  },
  {
    number: '10',
    title: 'Changes to This Policy',
    content: (
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated revision date.
      </p>
    ),
  },
];

export default function Privacy() {
  return (
    <main className="bg-[var(--cream)] min-h-screen">
      {/* ─── HERO ── */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-[1px] bg-black/20" />
              <p className="text-xs font-mono tracking-widest uppercase text-black/50">Legal</p>
            </div>
            <h1 className="font-sans text-4xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[var(--ink)] max-w-[900px]">
              Privacy Policy
            </h1>
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4">
              <p className="text-lg md:text-xl text-[var(--muted)] font-sans">
                Ontara Connect
              </p>
              <span className="hidden sm:block w-1 h-1 rounded-full bg-[var(--accent)]" />
              <p className="text-sm text-[var(--muted)] font-mono tracking-wide">
                Last updated: June 2026
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── INTRO ── */}
      <section className="pb-16 md:pb-20 px-6 md:px-12 border-t border-black/10">
        <div className="max-w-[1400px] mx-auto pt-12 md:pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-[800px]"
          >
            <p className="text-lg md:text-xl text-black/60 font-sans leading-relaxed">
              Ontara Connect ("we", "our", "us") is a business messaging platform operated by Ontara AI. This Privacy Policy explains how we collect, use, store, and protect information when businesses and their customers interact through our WhatsApp-based messaging services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ─── POLICY SECTIONS ── */}
      <section className="pb-24 md:pb-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col border-t border-black/10">
            {sections.map((section, i) => (
              <motion.div
                key={section.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="grid md:grid-cols-[100px_280px_1fr] gap-6 md:gap-12 py-10 md:py-14 border-b border-black/10 group"
              >
                <span className="font-mono text-sm tracking-widest text-[var(--accent)]/60 group-hover:text-[var(--accent)] transition-colors pt-1">
                  {section.number}
                </span>
                <h2 className="text-2xl md:text-3xl font-sans font-medium tracking-tight text-[var(--ink)] leading-tight group-hover:text-[var(--accent)] transition-colors duration-300">
                  {section.title}
                </h2>
                <div className="text-base md:text-lg text-black/60 font-sans leading-relaxed">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT SECTION ── */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-[var(--ink)] text-white rounded-t-[3rem] md:rounded-t-[4rem]">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid md:grid-cols-[1fr_1fr] gap-16 items-start"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1px] bg-white/20" />
                <p className="text-xs font-mono tracking-widest uppercase text-white/50">Section 11</p>
              </div>
              <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight leading-tight">
                Contact Us
              </h2>
            </div>
            <div className="flex flex-col gap-8 pt-4">
              <p className="text-lg md:text-xl text-white/60 font-sans leading-relaxed">
                For privacy concerns or data requests, contact Ontara AI:
              </p>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:ontaraai@gmail.com"
                  className="group inline-flex items-center gap-4 text-white/80 hover:text-[var(--accent)] transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[var(--accent)]/30 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </span>
                  <span className="text-lg font-mono tracking-wide">ontaraai@gmail.com</span>
                </a>
                <a
                  href="https://ontaraai.solutions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-4 text-white/80 hover:text-[var(--accent)] transition-colors"
                >
                  <span className="w-10 h-10 rounded-full border border-white/10 group-hover:border-[var(--accent)]/30 flex items-center justify-center transition-colors">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </span>
                  <span className="text-lg font-mono tracking-wide">ontaraai.solutions</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
