import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '72beb498-8fda-4cd8-b588-12fbe6992b09',
          ...formData
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });

        // Reset status after a few seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Submission failed:', result.message);
        setStatus('idle');
        alert('Something went wrong. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('idle');
      alert('Network error. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-w-dark border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-w-green mx-auto"></div>
            <p className="mt-6 text-gray-400">
              Ready to power your next project? Fill out the form below and our team will get back to you shortly.
            </p>
          </div>

          {status === 'success' && (
            <div className="mb-8 p-4 bg-green-900/30 border border-w-green text-w-green rounded-sm text-center">
              Thank you! Your message has been sent successfully. We'll be in touch soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-w-gray border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-w-green focus:ring-1 focus:ring-w-green transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-w-gray border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-w-green focus:ring-1 focus:ring-w-green transition-all"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Company</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full bg-w-gray border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-w-green focus:ring-1 focus:ring-w-green transition-all"
                placeholder="Your Company Name"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-300 uppercase tracking-wider mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-w-gray border border-gray-700 text-white px-4 py-3 rounded-sm focus:outline-none focus:border-w-green focus:ring-1 focus:ring-w-green transition-all resize-none"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full bg-w-green text-black font-bold py-4 rounded-sm hover:bg-green-400 transition-colors uppercase tracking-widest disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
