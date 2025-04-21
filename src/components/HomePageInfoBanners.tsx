import React from 'react';
import { ArrowRight, Mail, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // Импортируем useTranslation

function HomePageInfoBanners() {
    const { t } = useTranslation(); // Инициализация useTranslation
    const navigate = useNavigate();

    return (
        <div className="text-white">
            {/* Header Section */}

            {/* Crypto Pairs Grid */}

            {/* Main Content */}
            <div className="container mx-auto px-4 mb-20">
                <div className="grid md:grid-cols-2 gap-24 items-center max-w-6xl mx-auto">
                    {/* Contact Us Section */}
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold">{t("contactUs.title")}</h2>
                        <p className="text-gray-400 text-lg">
                            {t("contactUs.description")}
                        </p>
                        <button onClick={() => navigate('/contact')} className="group flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full transition-all duration-300">
                            {t("contactUs.buttonText")}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* How it works Section */}
                    <div className="space-y-6">
                        <h2 className="text-5xl font-bold">{t("howItWorks.title")}</h2>
                        <p className="text-gray-400 text-lg">
                            {t("howItWorks.description")}
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-500/10 p-3 rounded-lg">
                                    <MessageSquare className="w-6 h-6 text-orange-500"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{t("howItWorks.steps.consultation.title")}</h3>
                                    <p className="text-gray-400">{t("howItWorks.steps.consultation.description")}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="bg-orange-500/10 p-3 rounded-lg">
                                    <Mail className="w-6 h-6 text-orange-500"/>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">{t("howItWorks.steps.solution.title")}</h3>
                                    <p className="text-gray-400">{t("howItWorks.steps.solution.description")}</p>
                                </div>
                            </div>
                        </div>
                        <button
                            onClick={() => navigate('/contact')}
                            className="group flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
                        >
                            {t("howItWorks.seeMore")}
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform"/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePageInfoBanners;
