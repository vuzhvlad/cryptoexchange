import React from 'react';
import Reviews from '../components/Reviews';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Coins, Shield, Clock, ArrowRight } from 'lucide-react';

function About() {
    const navigate = useNavigate();
    const { t } = useTranslation();

    return (
        <div className="min-h-screen text-white">
            {/* Hero Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-6xl mx-auto text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {t('about.hero.title')}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                        {t('about.hero.description')}
                    </p>
                </div>
            </section>

            {/* Features Grid */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-[rgb(22,26,35)] p-8 rounded-xl">
                            <Shield className="w-12 h-12 text-[#FFA500] mb-4" />
                            <h3 className="text-xl font-semibold mb-3">{t('about.features.secureTitle')}</h3>
                            <p className="text-gray-400">{t('about.features.secureDesc')}</p>
                        </div>
                        <div className="bg-[rgb(22,26,35)] p-8 rounded-xl">
                            <Clock className="w-12 h-12 text-[#FFA500] mb-4" />
                            <h3 className="text-xl font-semibold mb-3">{t('about.features.fastTitle')}</h3>
                            <p className="text-gray-400">{t('about.features.fastDesc')}</p>
                        </div>
                        <div className="bg-[rgb(22,26,35)] p-8 rounded-xl">
                            <Coins className="w-12 h-12 text-[#FFA500] mb-4" />
                            <h3 className="text-xl font-semibold mb-3">{t('about.features.multipleTitle')}</h3>
                            <p className="text-gray-400">{t('about.features.multipleDesc')}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Payment Options */}
            <section className="py-16 px-4 md:px-8">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('about.payment.title')}</h2>
                    <p className="text-xl text-gray-300 mb-12">{t('about.payment.description')}</p>
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
                        {['Bitcoin', 'Ethereum', 'USDT', 'TON', 'TRC20', 'Solana'].map((currency) => (
                            <div key={currency} className="bg-[rgb(22,26,35)] p-4 rounded-xl flex items-center justify-center">
                                <span className="text-lg font-medium">{currency}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section>
                <Reviews />
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 md:px-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">{t('about.cta.title')}</h2>
                    <p className="text-xl text-gray-300 mb-8">{t('about.cta.description')}</p>
                    <button
                        className="bg-[#f7931a] text-black px-8 py-4 rounded-lg font-semibold flex items-center mx-auto hover:bg-[#FF9000] transition-colors"
                        onClick={() => navigate("/")}
                    >
                        {t('about.cta.button')}
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                </div>
            </section>
        </div>
    );
}

export default About;
