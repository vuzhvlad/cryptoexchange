import { Mail, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function Contact() {
  const { t } = useTranslation();

  return (
      <div className="min-h-screen text-gray-100">
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text">
              {t('contact.heroTitle')}
            </h1>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <ul className="space-y-4 text-lg text-gray-300">
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>{t('contact.bullet1')}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>{t('contact.bullet2')}</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span>{t('contact.bullet3')}</span>
                  </li>
                </ul>
              </div>

              {/* Contact Form */}
              <div className="p-8 rounded-2xl border border-gray-800">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.form.name')}
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-800 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        placeholder={t('contact.form.namePlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.form.email')}
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-800 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        placeholder={t('contact.form.emailPlaceholder')}
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      {t('contact.form.message')}
                    </label>
                    <textarea
                        id="message"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-[#1A1A1A] border border-gray-800 text-white focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-colors"
                        placeholder={t('contact.form.messagePlaceholder')}
                    />
                  </div>

                  <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 text-white py-3 px-6 rounded-lg font-medium hover:from-orange-600 hover:to-pink-600 transition-all duration-200 flex items-center justify-center space-x-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>{t('contact.form.send')}</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Contact Methods */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">
              {t('contact.helpTitle')}
            </h2>
            <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
              {t('contact.helpDescription')}
            </p>

            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              <a
                  href="mailto:support@cryptoExchange.io"
                  className="bg-[rgb(22 26 35)] p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-colors group"
              >
                <Mail className="w-8 h-8 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{t('contact.emailSupportTitle')}</h3>
                <p className="text-gray-400">{t('contact.emailSupportText')}</p>
              </a>

              <a
                  href="https://t.me/marysklyarova"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[rgb(22 26 35)] p-6 rounded-xl border border-gray-800 hover:border-orange-500 transition-colors group"
              >
                <Send className="w-8 h-8 text-orange-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{t('contact.scheduleCallTitle')}</h3>
                <p className="text-gray-400">{t('contact.scheduleCallText')}</p>
              </a>
            </div>
          </div>
        </section>
      </div>
  );
}

export default Contact;
