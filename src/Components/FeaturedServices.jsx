const FeaturedServices = () => {
  return (
    <div className="bg-black pb-12">
      <h1 className="flex justify-center text-4xl sm:text-5xl md:text-6xl py-8 sm:py-10 md:py-12 text-white">
        Featured Services
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-9 max-w-7xl justify-between items-center mx-auto text-white px-4 sm:px-6 lg:px-8">
        <div className="card shadow-xl w-full md:w-auto" style={{ border: '2px solid #13FFAA' }}>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">Distribution</h2>
            <div className="py-3 space-y-3 font-normal">
              <li>Distribute to over 150 streaming services</li>
              <li>Unlimited releases with no extra charges</li>
              <li>Real-time analytics and performance tracking</li>
              <li>Global reach to millions of listeners</li>
              <li>Easy-to-use platform for quick uploads</li>
            </div>
          </div>
        </div>
        <div className="card  shadow-xl w-full md:w-auto" style={{ border: '2px solid #1E67C6' }}>
          <div className="card-body">
            <h2 className="card-title font-bold text-xl">Royalty</h2>
            <div className="py-3 space-y-3 font-normal">
              <li>Monthly royalty payments without delays</li>
              <li>Detailed earnings reports and insights</li>
              <li>No hidden fees or deductions</li>
              <li>Fair revenue splits for all artists</li>
              <li>Direct deposit to your bank account</li>
            </div>
          </div>
        </div>
        <div className="card  shadow-xl w-full md:w-auto" style={{ border: '2px solid #CE84CF' }}>
          <div className="card-body">
            <h2 className="card-title font-bold text-font-medium">Official Artist Profile</h2>
            <div className="py-3 space-y-3 font-normal">
              <li>Verified badge to increase credibility</li>
              <li>Customizable profile with photos and bio</li>
              <li>Direct fan engagement through messaging</li>
              <li>Sync with social media for consistent branding</li>
              <li>Manage all your music in one place</li>
            </div>
          </div>
        </div>
        <div className="card  shadow-xl w-full md:w-auto" style={{ border: '2px solid #DD335C' }}>
          <div className="card-body">
            <h2 className="card-title font-bold text-font-medium">24/7 Support</h2>
            <div className="py-3 space-y-3 font-normal">
              <li>Instant help via chat, email, and phone</li>
              <li>Comprehensive FAQs and tutorials</li>
              <li>Dedicated account managers for VIP support</li>
              <li>Troubleshooting for technical issues</li>
              <li>Friendly and knowledgeable support staff</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;
