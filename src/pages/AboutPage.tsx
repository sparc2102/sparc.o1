
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { leadership, values, milestones } from '../data/mockData'; // Import leadership from mockData

const MissionVisionSection = () => {
  return (
    <section className="py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Mission & Vision Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <article>
            <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <CardTitle className="text-6xl text-gray-200 mission-vision-title">Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To empower the next generation of pharmaceutical scientists through
                  community-driven advancement, professional development, and collaborative
                  research opportunities that accelerate innovation in healthcare.
                </p>
              </CardContent>
            </Card>
          </article>

          <article>
            <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
              <CardHeader>
                <div className="flex items-center mb-4">
                  <CardTitle className="text-6xl text-gray-200 mission-vision-title">Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-lg leading-relaxed">
                  To stand as <span className="text-blue-400 font-semibold">the global force</span> that unites pharmaceutical education, cutting-edge research, and real-world industry application — creating a <span className="text-blue-400 font-semibold">future-ready, innovation-driven workforce</span> that redefines healthcare for generations to come.
                </p>
              </CardContent>
            </Card>
          </article>
        </div>

        {/* Mission Objectives Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Our Mission Objectives</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At <span className="text-white font-semibold">SPARC</span>, we're not just here to "exist" as another professional society – we're here to <em className="text-blue-400">drive change</em>. Our mission is laser-focused on empowering people, building bridges, and fueling growth that resonates across the global pharma and healthcare ecosystem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {/* Empower Talent */}
            <article>
              <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <h3 className="text-3xl font-bold text-gray-300">Empower Talent</h3>
                  </div>
                  <p className="text-blue-400 font-medium mb-4">
                    Talent is the fuel of innovation – and we're here to supercharge it.
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    Through <span className="text-gray-300 font-semibold">premium resources, immersive events, and targeted mentorship programs</span>, SPARC ensures that students, researchers, and professionals get the right push at the right time.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">World-class webinars</span> featuring global thought leaders</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">Hands-on workshops</span> with industry-grade tools</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">Career bootcamps & mentorship tracks</span> to help you crack internships, land jobs, and build future-ready skills</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-4">
                    Our goal is simple – unlock your full potential so you're not just participating in the pharma space but <span className="text-gray-200 font-semibold">leading it</span>.
                  </p>
                </CardContent>
              </Card>
            </article>

            {/* Build Collaborations */}
            <article>
              <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <h3 className="text-3xl font-bold text-gray-300">Build Collaborations</h3>
                  </div>
                  <p className="text-purple-400 font-medium mb-4">
                    Innovation doesn't happen in silos – it thrives in ecosystems.
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    SPARC creates <span className="text-gray-300 font-semibold">real, actionable partnerships</span> between academia, industry, and regulatory bodies. We bring together:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">Universities</span> seeking stronger research output and accreditation scores</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">Pharma & biotech companies</span> looking for talent pipelines and co-innovation opportunities</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-purple-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">Regulatory experts</span> to keep the conversation aligned with compliance and global standards</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-4">
                    This interconnected network isn't just a collaboration—it's a <span className="text-gray-300 font-semibold">catalyst for breakthrough research, policy influence, and better healthcare outcomes worldwide</span>.
                  </p>
                </CardContent>
              </Card>
            </article>

            {/* Fuel Growth */}
            <article>
              <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <h3 className="text-3xl font-bold text-gray-300">Fuel Growth</h3>
                  </div>
                  <p className="text-orange-400 font-medium mb-4">
                    Growth is more than just climbing the career ladder; it's about elevating the entire ecosystem.
                  </p>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400 mb-4">
                    SPARC fuels this growth by:
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">Accelerating R&D pipelines</span> through Innovation Labs and project accelerators</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">Shaping future leaders</span> via student councils, fellowships, and leadership forums</span>
                    </div>
                    <div className="flex items-start">
                      <span className="text-orange-400 mr-2">•</span>
                      <span className="text-gray-400"><span className="text-gray-300 font-semibold">Recognizing excellence</span> with prestigious SPARC Awards for research, innovation, and professional achievement</span>
                    </div>
                  </div>
                  <p className="text-gray-400 mt-4">
                    Whether you're a student, researcher, or industry veteran, SPARC positions you to <span className="text-gray-300 font-semibold">grow faster, think bigger, and impact healthcare at a global scale</span>.
                  </p>
                </CardContent>
              </Card>
            </article>
          </div>
        </section>

        {/* Vision Details */}
        <article>
          <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
            <CardHeader>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  We Envision a World Where:
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Learning is Limitless
                  </h3>
                  <p className="text-gray-300">
                    Every learner has access to world-class knowledge and mentorship
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    Innovation is Collaborative
                  </h3>
                  <p className="text-gray-300">
                    Academia, industry, and regulators work as one
                  </p>
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">
                    Healthcare is Transformed
                  </h3>
                  <p className="text-gray-300">
                    Scientific breakthroughs reach patients faster, safer, and more equitably
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </section>
  );
};

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        opacity: 0.2
      }}></div>
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="text-white py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About SPARC</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                The Society For Pharmacy Advancement Research & Careers is the gold standard 
                for community-driven advancement in pharmaceutical sciences, powered by 
                <span className="text-red-500 font-semibold"> ZANE ProEd</span>.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <MissionVisionSection />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Core Values */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                These values are the heartbeat of SPARC — guiding every step we take.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <article
                  key={index}
                  className="group bg-transparent rounded-2xl p-6 text-center transition-transform transform hover:-translate-y-2 hover:bg-zinc-800/30 shadow-md hover:shadow-xl opacity-90 border border-black"
                >
                  <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                    {value.description}
                  </p>
                </article>
              ))}
            </div>
          </section>

          {/* Timeline */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-gray-400">
                Key milestones in SPARC's growth and impact
              </p>
            </div>
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <article key={index} className="flex items-center">
                  <div className="flex-shrink-0 w-24">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium text-center">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-grow ml-8">
                    <h3 className="text-lg font-semibold">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* Leadership Team */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Premium Members</h2>
              <p className="text-lg text-gray-400">
                Meet the visionaries behind SPARC's success
              </p>
            </div>

            {/* Row 1 - Scroll Left */}
            <div className="overflow-hidden relative mb-6 group">
              <div className="flex animate-circular-left gap-6 group-hover:slow-scroll">
                {leadership.slice(0, 8).concat(leadership.slice(0, 8)).map((leader, index) => (
                  <article
                    key={`left-${index}`}
                    className="bg-transparent w-52 h-52 rounded-xl flex-none p-4 text-center shadow-md hover:bg-zinc-700/50 transition-all duration-300 opacity-90 border border-black"
                  >
                    <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-3">
                      <img
                        src={leader.avatar}
                        alt={`${leader.name}, ${leader.title}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors duration-300">{leader.name}</h3>
                    <p className="text-blue-400 text-xs font-medium">{leader.title}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* Row 2 - Scroll Right */}
            <div className="overflow-hidden relative group">
              <div className="flex animate-circular-right gap-6 group-hover:slow-scroll">
                {leadership.slice(7).concat(leadership.slice(7)).concat(leadership.slice(7)).map((leader, index) => (
                  <article
                    key={`right-${index}`}
                    className="bg-transparent w-52 h-52 rounded-xl flex-none p-4 text-center shadow-md hover:bg-zinc-700/50 transition-all duration-300 opacity-90 border border-black"
                  >
                    <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-3">
                      <img
                        src={leader.avatar}
                        alt={`${leader.name}, ${leader.title}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors duration-300">{leader.name}</h3>
                    <p className="text-blue-400 text-xs font-medium">{leader.title}</p>
                  </article>
                ))}
              </div>
            </div>

            {/* CSS for smooth circular infinite scroll */}
            <style>{`
              @keyframes circular-left {
                0% {
                  transform: translateX(0);
                }
                100% {
                  transform: translateX(-100%);
                }
              }

              @keyframes circular-right {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(0);
                }
              }

              .animate-circular-left {
                display: flex;
                gap: 1.5rem;
                width: calc(200% + 1.5rem); /* Double the width for seamless looping */
                animation: circular-left 60s linear infinite;
              }

              .animate-circular-right {
                display: flex;
                gap: 1.5rem;
                width: calc(300% + 1.5rem); /* Triple the width for seamless looping */
                animation: circular-right 60s linear infinite;
              }

              .group:hover .slow-scroll {
                animation-duration: 120s !important; /* Slow down to 120s on hover */
              }

              .group {
                position: relative;
                overflow: hidden;
              }
            `}</style>
          </section>

          {/* What Makes Us Different */}
          <section className="mb-16">
            <article className="bg-transparent rounded-2xl p-8 shadow-md opacity-90 border border-black">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">What Makes SPARC Different?</h2>
                <p className="text-lg text-gray-400">
                  We're not just another professional society - we're a transformative force in pharmaceutical sciences
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Left Column */}
                <div className="space-y-4">
                  <FeatureItem title="Community-Driven Approach" text="Our programs are shaped by member feedback and industry needs" />
                  <FeatureItem title="Tiered Membership Model" text="Tailored benefits for students, professionals, and industry leaders" />
                  <FeatureItem title="Global Reach" text="Connecting pharmaceutical professionals across continents" />
                </div>
                {/* Right Column */}
                <div className="space-y-4">
                  <FeatureItem title="Industry Integration" text="Direct partnerships with leading pharmaceutical companies" />
                  <FeatureItem title="Evidence-Based Programs" text="All initiatives backed by rigorous research and proven outcomes" />
                  <FeatureItem title="Lifetime Value" text="Resources and connections that grow with your career" />
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
}

type FeatureItemProps = {
  title: string;
  text: string;
};

function FeatureItem({ title, text }: FeatureItemProps) {
  return (
    <div className="flex items-start">
      <span className="text-green-400 mr-3 mt-1">✔</span>
      <div>
        <h3 className="font-semibold">{title}</h3>
        <p className="text-gray-400">{text}</p>
      </div>
    </div>
  );
}
