import { useNavigate } from 'react-router-dom';
import { Coins, Rocket, Heart, Info, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

function HowItWorks() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const steps = [
    {
      number: 1,
      title: t('how.steps.1.title'),
      description: t('how.steps.1.description'),
    },
    {
      number: 2,
      title: t('how.steps.2.title'),
      description: t('how.steps.2.description'),
    },
    {
      number: 3,
      title: t('how.steps.3.title'),
      description: t('how.steps.3.description'),
    },
    {
      number: 4,
      title: t('how.steps.4.title'),
      description: t('how.steps.4.description'),
    },
  ];

  const features = [
    {
      icon: <Coins className="w-8 h-8 text-orange-400" />,
      title: t('how.features.bestRate.title'),
      description: t('how.features.bestRate.description'),
    },
    {
      icon: <Rocket className="w-8 h-8 text-orange-400" />,
      title: t('how.features.fast.title'),
      description: t('how.features.fast.description'),
    },
    {
      icon: <Heart className="w-8 h-8 text-orange-400" />,
      title: t('how.features.care.title'),
      description: t('how.features.care.description'),
    },
  ];

  return (
      <div className="min-h-screen text-white">
        <div className="max-w-6xl mx-auto px-4 py-12">
          {/* Navigation Tabs */}
          <div className="flex justify-center mb-16">
            <div className="bg-zinc-900 rounded-full p-1 flex gap-2">
              <button className="px-6 py-2 rounded-full text-xl bg-white text-black">
                {t('how.nav.convert')}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            {/* Left Section - Step-by-Step Process */}
            <div className="space-y-10">
              {steps.map((step) => (
                  <div key={step.number} className="flex gap-6">
                    <div className="flex-shrink-0 w-10 h-10 bg-orange-400 rounded-full flex items-center justify-center text-sm font-semibold">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                      <p className="text-zinc-300 text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </div>
              ))}

              <div className="mt-8">
                <div className="p-6 rounded-lg shadow-lg" style={{ backgroundColor: 'rgb(22, 26, 35)' }}>
                  <div className="flex items-center text-orange-400 mb-2">
                    <Info className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">{t('how.note.title')}</span>
                  </div>
                  <p className="text-zinc-300 text-sm">{t('how.note.text')}</p>
                </div>

                <button
                    onClick={() => navigate('/')}
                    className="mt-6 bg-orange-400 text-black px-6 py-3 rounded-lg flex items-center hover:bg-orange-500 transition-colors font-medium shadow-lg"
                >
                  {t('how.cta')}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Section - Special Offer */}
            <div className="relative">
              <div className="rounded-3xl p-6 shadow-lg" style={{ backgroundColor: 'rgb(22, 26, 35)' }}>
                <div className="p-4">
                  <div className="text-center mb-4">
                    <h2 className="text-2xl font-semibold text-orange-400">{t('how.offer.title')}</h2>
                    <p className="text-zinc-300 text-lg">{t('how.offer.subtitle')}</p>
                  </div>
                  <div className="text-center p-4 rounded-lg" style={{ backgroundColor: 'rgb(22, 26, 35)' }}>
                    <p className="text-zinc-400 text-sm">{t('how.offer.description')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-xl shadow-lg" style={{ backgroundColor: 'rgb(22, 26, 35)' }}>
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-zinc-300 text-sm">{feature.description}</p>
                </div>
            ))}
          </div>
        </div>
      </div>
  );
}

export default HowItWorks;
