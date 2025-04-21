import React, { useState } from 'react';
import { Send, CreditCard, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

const Footer = () => {
  const { t } = useTranslation(); // Инициализация useTranslation
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (!email) {
      alert('Please enter a valid email!');
      return;
    }

    console.log('Email submitted:', email);
    setEmail(''); // Очищаем поле после отправки
  };

  const popularPairs = [
    'BTC to USDT',
    'USDT to SOL',
    'BTC to XRP',
    'USDT to ETH',
  ];

  const quickLinks = [
    { title: t('footer.quickLinksItems.aboutUs'), href: '/about' },
    { title: t('footer.quickLinksItems.howItWorks'), href: '/how-it-works' },
    { title: t('footer.quickLinksItems.contactSupport'), href: '/contact' },
  ];

  const legalLinks = [
    { title: t('footer.legalItems.privacyPolicy'), href: '/privacy' },
    { title: t('footer.legalItems.termsOfService'), href: '/terms' },
    { title: t('footer.legalItems.amlPolicy'), href: '/cookies' },
  ];

  return (
      <footer className="bg-gradient-to-br from-gray-900 to-black text-gray-300">
        {/* Newsletter Section */}
        <div className="border-b border-gray-800">
          <div className="container mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{t('footer.stayUpdated')}</h3>
                <p className="text-gray-400">{t('footer.subscribe')}</p>
              </div>
              <div className="flex-1 w-full md:w-auto">
                <div className="relative">
                  <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t('footer.enterEmail')}
                      className="w-full px-6 py-3 rounded-full bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500 pr-12"
                  />
                  <button
                      onClick={handleSend}
                      className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-orange-600 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <Send size={20} className="text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">{t('footer.companyInfo.title')}</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-400">
                  <Mail size={18} />
                  <span>{t('footer.companyInfo.email')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <Phone size={18} />
                  <span>{t('footer.companyInfo.phone')}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400">
                  <MapPin size={18} />
                  <span>{t('footer.companyInfo.address')}</span>
                </div>
              </div>
            </div>

            {/* Popular Pairs */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">{t('footer.popularPairs')}</h4>
              <ul className="space-y-3">
                {popularPairs.map((pair, index) => (
                    <li key={index}>
                      <a
                          href="#"
                          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{pair}</span>
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">{t('footer.quickLinks')}</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{link.title}</span>
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">{t('footer.legal')}</h4>
              <ul className="space-y-3">
                {legalLinks.map((link, index) => (
                    <li key={index}>
                      <a
                          href={link.href}
                          className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                      >
                        <ArrowRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        <span>{link.title}</span>
                      </a>
                    </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-400">{t('footer.stayWithUs')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">{t('footer.copyright')}</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
