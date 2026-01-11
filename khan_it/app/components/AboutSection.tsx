export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Khan IT
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Led by Expertise,<br className="hidden md:block" /> Driven by Results
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text & Stats */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-10">
              Khan IT was founded by Md Faruk Khan and Naima Akter Tisha. Faruk Khan is a certified SEO expert 
              and digital marketing trainer with 10+ years of experience, and Tisha Khan serves as the COO.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '📅', value: 'Since 2017', label: 'Years of Excellence' },
                { icon: '👨‍🏫', value: '8,000+', label: 'Trained Professionals' },
                { icon: '🏆', value: '100+', label: 'Successful Projects' },
                { icon: '🌍', value: 'Worldwide', label: 'Clients Served' },
              ].map((stat, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 text-center hover-lift">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-2xl font-bold text-[var(--primary)]">{stat.value}</div>
                  <div className="text-gray-600 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image + Badges */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556155099-490a1ba16284?w=800"
                alt="Digital Marketing Expert"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Badges */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-lg">
              <div className="font-bold text-xl text-orange-600">Certified Expert</div>
              <div className="text-gray-600">10+ Years Experience</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-xl p-5 shadow-lg">
              <div className="font-bold text-xl">Global Reach</div>
              <div className="text-blue-100">USA • UK • UAE • More</div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed">
          <p>
            We are obsessed with delivering top-quality SEO and 360° digital marketing services that help businesses dominate Google rankings and achieve exceptional growth.
          </p>
        </div>
      </div>
    </section>
  );
}