import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck,
  ChevronDown
} from 'lucide-react';
import { LeadFormData } from '../types';

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

const servicesList = [
  'Digital Marketing & PPC',
  'SEO & Search Visibility',
  'High-Converting Website Development',
  'Automated Lead Generation',
  'Full-Service Growth Retainer',
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Please enter your full name';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    const digitsOnly = formData.phone.replace(/\D/g, '');
    if (!formData.phone.trim()) {
      newErrors.phone = 'Please enter your phone number';
    } else if (digitsOnly.length < 7) {
      newErrors.phone = 'Please enter a valid phone number (at least 7 digits)';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please share a brief note about your project';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (submitError) {
      setSubmitError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;

    if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
      setIsSubmitting(false);
      setSubmitError(
        'Formspree endpoint is not configured. Please add your Formspree endpoint URL in the .env file (VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID).'
      );
      return;
    }

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          company: formData.company || 'Not provided',
          service: formData.service,
          message: formData.message,
        }),
      });

      if (response.ok) {
        // Requirement 5: On successful submission, show success message and clear form
        setIsSubmitted(true);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: '',
        });
        setErrors({});
        setSubmitError(null);
      } else {
        // Requirement 6: On failure, show error message and keep entered form data
        const data = await response.json().catch(() => null);
        if (data && Array.isArray(data.errors) && data.errors.length > 0) {
          setSubmitError(data.errors.map((err: { message?: string }) => err.message || 'Validation error').join(', '));
        } else if (data && data.error) {
          setSubmitError(data.error);
        } else {
          setSubmitError('Failed to submit your enquiry. Please check your information and try again.');
        }
      }
    } catch (err) {
      // Requirement 6: On failure, keep entered form data
      setSubmitError('Network error: Unable to connect to Formspree. Please check your internet connection or try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      message: '',
    });
    setErrors({});
    setSubmitError(null);
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-28 bg-white border-t border-slate-100 relative">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-cyan-light/40 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-cyan-light text-cyan-dark text-xs font-bold tracking-wider uppercase mb-4 border border-cyan/20">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy tracking-tight mb-4">
            Ready to Grow Your Business?
          </h2>
          <p className="text-base sm:text-lg text-slate-600">
            Fill out the form below to claim your complimentary growth audit and strategy blueprint. We respond within 2 business hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Contact Value Proposition & Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50/80 rounded-2xl p-7 border border-slate-200/80">
              <h3 className="text-xl font-bold text-navy mb-3">
                What happens after you reach out?
              </h3>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                We review your current digital footprint, run a competitive gap analysis, and present a custom growth proposal on our initial call.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-light text-cyan flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    01
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Competitor Analysis</h4>
                    <p className="text-xs text-slate-500">Uncover keyword and audience gaps your rivals are exploiting.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-light text-cyan flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    02
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Actionable Growth Plan</h4>
                    <p className="text-xs text-slate-500">Step-by-step roadmap tailored specifically to your target ROAS.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <div className="w-8 h-8 rounded-lg bg-cyan-light text-cyan flex items-center justify-center flex-shrink-0 font-bold text-xs">
                    03
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-navy">Transparent Pricing</h4>
                    <p className="text-xs text-slate-500">Clear deliverables with zero hidden fees and no long-term locks.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Info */}
            <div className="space-y-3.5 text-sm text-slate-600 px-2">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-cyan flex-shrink-0" />
                <span>hello@dgitgrow.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-cyan flex-shrink-0" />
                <span>+1 (800) 582-DGIT</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-cyan flex-shrink-0" />
                <span>Mon – Fri: 9:00 AM – 6:00 PM EST</span>
              </div>
              <div className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-cyan flex-shrink-0" />
                <span>NDA & Data Privacy Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Lead Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl p-6 sm:p-9 shadow-soft-lg border border-slate-200/80">
              {isSubmitted ? (
                <div className="py-12 px-4 text-center animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto mb-5 shadow-sm border border-emerald-100">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold text-navy mb-2">
                    Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-base text-slate-600 max-w-md mx-auto mb-8 leading-relaxed">
                    Thank you! Your enquiry has been submitted successfully. We will contact you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={resetForm}
                    className="inline-flex items-center px-6 py-3 rounded-full text-sm font-semibold text-navy bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Full Name */}
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                        Full Name <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.fullName
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                            : 'border-slate-200 bg-white focus:border-cyan focus:ring-cyan/20'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                        Work Email <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.email
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                            : 'border-slate-200 bg-white focus:border-cyan focus:ring-cyan/20'
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                        Phone Number <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 ${
                          errors.phone
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                            : 'border-slate-200 bg-white focus:border-cyan focus:ring-cyan/20'
                        }`}
                      />
                      {errors.phone && (
                        <p className="mt-1 text-xs text-rose-500 flex items-center">
                          <AlertCircle className="w-3.5 h-3.5 mr-1" />
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company, Inc."
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white text-sm transition-all focus:outline-none focus:border-cyan focus:ring-2 focus:ring-cyan/20"
                      />
                    </div>
                  </div>

                  {/* Service Required Dropdown */}
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Service Required <span className="text-rose-500">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`w-full px-4 py-3 rounded-xl border text-sm appearance-none bg-white transition-all focus:outline-none focus:ring-2 pr-10 ${
                          errors.service
                            ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                            : 'border-slate-200 focus:border-cyan focus:ring-cyan/20'
                        }`}
                      >
                        <option value="">Select a service category...</option>
                        {servicesList.map((svc) => (
                          <option key={svc} value={svc}>
                            {svc}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                    {errors.service && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-navy mb-1.5">
                      Project Goals / Message <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your current challenges, target goals, and monthly timeline..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm transition-all focus:outline-none focus:ring-2 resize-y ${
                        errors.message
                          ? 'border-rose-400 bg-rose-50/30 focus:ring-rose-300'
                          : 'border-slate-200 bg-white focus:border-cyan focus:ring-cyan/20'
                      }`}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-xs text-rose-500 flex items-center">
                        <AlertCircle className="w-3.5 h-3.5 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submission Error Banner */}
                  {submitError && (
                    <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-sm flex items-start space-x-3 animate-fadeIn">
                      <AlertCircle className="w-5 h-5 text-rose-500 flex-shrink-0 mt-0.5" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-rose-800">Submission Error</p>
                        <p className="text-xs text-rose-600 mt-0.5 leading-relaxed break-words">{submitError}</p>
                      </div>
                    </div>
                  )}

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-4 text-base font-bold uppercase tracking-wider text-white bg-cyan hover:bg-cyan-hover active:scale-98 transition-all duration-150 rounded-full shadow-soft hover:shadow-cyan-glow disabled:opacity-70 focus:outline-none focus:ring-2 focus:ring-cyan focus:ring-offset-2"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center space-x-2">
                          <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                          </svg>
                          <span>Processing...</span>
                        </span>
                      ) : (
                        <span className="flex items-center space-x-2">
                          <span>SUBMIT / GET STARTED</span>
                          <Send className="w-4 h-4 ml-1" />
                        </span>
                      )}
                    </button>
                  </div>

                  <p className="text-center text-xs text-slate-400">
                    We respect your privacy. No spam ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
