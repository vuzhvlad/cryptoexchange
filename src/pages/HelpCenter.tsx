const HelpCenter = () => {
  return (
    <div className="min-h-screen">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Find answers to your questions and learn how to make the most of
            Monease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#111] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Getting Started
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>• How to create an account</li>
              <li>• Verifying your identity</li>
              <li>• Making your first deposit</li>
              <li>• Understanding trading fees</li>
            </ul>
          </div>

          <div className="bg-[#111] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Trading Guide
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>• Basic trading concepts</li>
              <li>• Reading market charts</li>
              <li>• Setting up price alerts</li>
              <li>• Managing your portfolio</li>
            </ul>
          </div>

          <div className="bg-[#111] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">Security</h3>
            <ul className="space-y-4 text-gray-400">
              <li>• Two-factor authentication</li>
              <li>• Secure your account</li>
              <li>• Common security threats</li>
              <li>• Best practices</li>
            </ul>
          </div>

          <div className="bg-[#111] p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-white mb-4">
              Account & Settings
            </h3>
            <ul className="space-y-4 text-gray-400">
              <li>• Profile settings</li>
              <li>• Payment methods</li>
              <li>• Notification preferences</li>
              <li>• API access</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpCenter;
