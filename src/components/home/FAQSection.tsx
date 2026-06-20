import Accordion from '../common/Accordion';

const faqItems = [
  {
    id: 'faq1',
    title: 'Do you deliver across Deoghar?',
    content: 'Yes, we deliver both our hot food menu and our bulk packaged goods (achar, chutney, masala) across Deoghar city limits. We do not currently ship pan-India.'
  },
  {
    id: 'faq2',
    title: 'What are your operating hours?',
    content: 'Our cloud kitchen is open daily from 10:00 AM to 10:00 PM. Hot food orders can be placed during this time. Bulk goods can be ordered 24/7 and will be dispatched during working hours.'
  },
  {
    id: 'faq3',
    title: 'Do you serve both vegetarian and non-vegetarian food?',
    content: 'Yes! We have dedicated, separate preparation areas and utensils for our vegetarian and non-vegetarian dishes to maintain the highest standards of purity and hygiene.'
  },
  {
    id: 'faq4',
    title: 'What payment methods do you accept?',
    content: 'Currently, we accept UPI payments (Google Pay, PhonePe, Paytm, BHIM, etc.) directly through our website. For catering or bulk orders, we also accept bank transfers.'
  },
  {
    id: 'faq5',
    title: 'Is there a minimum order value for delivery?',
    content: 'There is no minimum order value! However, a nominal delivery charge of ₹30 applies for hot food and ₹50 for bulk goods. Delivery is absolutely free for orders above ₹500.'
  },
  {
    id: 'faq6',
    title: 'How much advance notice is required for catering orders?',
    content: 'For small gatherings (up to 20 people), a 24-hour notice is sufficient. For larger events and weddings, please contact us at least 1-2 weeks in advance so we can prepare the perfect customized menu.'
  }
];

export default function FAQSection() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-poppins font-semibold text-gray-900 mb-4">
            Frequently Asked <span className="font-source-serif italic text-brand-orange">Questions</span>
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto rounded-full" />
        </div>

        <Accordion items={faqItems} allowMultiple={false} />
      </div>
    </section>
  );
}
