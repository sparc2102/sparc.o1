import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Target, 
  Users, 
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  Lightbulb,
  Heart,
  Star,
  CheckCircle
} from 'lucide-react';
import { motion, Variants } from 'framer-motion'; // Import Variants type
import { useInView } from 'react-intersection-observer'; // Use react-intersection-observer

// Define variants with explicit typing
const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const MissionVisionSection = () => {
  const [ref, isInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [objectivesRef, objectivesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [visionDetailsRef, visionDetailsInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="bg-gradient-to-br from-black via-blue-950 to-blue-900 py-16 relative">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        opacity: 0.2
      }}></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Mission & Vision Cards */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16"
        >
          <motion.div variants={childVariants}>
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
          </motion.div>

          <motion.div variants={childVariants}>
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
          </motion.div>
        </motion.div>

        {/* Mission Objectives Section */}
        <div className="mb-16">
          <motion.div
            ref={objectivesRef}
            variants={containerVariants}
            initial="hidden"
            animate={objectivesInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2 variants={childVariants} className="text-4xl font-bold text-white mb-4">Our Mission Objectives</motion.h2>
            <motion.p variants={childVariants} className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At <span className="text-white font-semibold">SPARC</span>, we're not just here to "exist" as another professional society – we're here to <em className="text-blue-400">drive change</em>. Our mission is laser-focused on empowering people, building bridges, and fueling growth that resonates across the global pharma and healthcare ecosystem.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={objectivesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16"
          >
            {/* Empower Talent */}
            <motion.div variants={childVariants}>
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
            </motion.div>

            {/* Build Collaborations */}
            <motion.div variants={childVariants}>
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
            </motion.div>

            {/* Fuel Growth */}
            <motion.div variants={childVariants}>
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
            </motion.div>
          </motion.div>
        </div>

        {/* Vision Details */}
        <motion.div
          ref={visionDetailsRef}
          variants={sectionVariants}
          initial="hidden"
          animate={visionDetailsInView ? "visible" : "hidden"}
        >
          <Card className="bg-white bg-opacity-0 backdrop-blur-md shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-transform transition-shadow duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] relative border border-blue-800 rounded-lg">
            <CardHeader>
              <div className="text-center">
                <h2 className="text-3xl font-bold text-white mb-6">
                  We Envision a World Where:
                </h2>
              </div>
            </CardHeader>
            <CardContent>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={visionDetailsInView ? "visible" : "hidden"}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <motion.div variants={childVariants} className="text-center">
                  <h3 className="text-xl font-semibold text-yellow-400 mb-3">
                    Learning is Limitless
                  </h3>
                  <p className="text-gray-300">
                    Every learner has access to world-class knowledge and mentorship
                  </p>
                </motion.div>
                <motion.div variants={childVariants} className="text-center">
                  <h3 className="text-xl font-semibold text-blue-400 mb-3">
                    Innovation is Collaborative
                  </h3>
                  <p className="text-gray-300">
                    Academia, industry, and regulators work as one
                  </p>
                </motion.div>
                <motion.div variants={childVariants} className="text-center">
                  <h3 className="text-xl font-semibold text-green-400 mb-3">
                    Healthcare is Transformed
                  </h3>
                  <p className="text-gray-300">
                    Scientific breakthroughs reach patients faster, safer, and more equitably
                  </p>
                </motion.div>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export function AboutPage() {
  const values = [
    { title: 'Excellence', description: 'We strive for the highest standards in pharmaceutical sciences education and professional development.' },
    { title: 'Community', description: 'Building strong connections between students, researchers, and industry professionals worldwide.' },
    { title: 'Innovation', description: 'Fostering cutting-edge research and breakthrough thinking in pharmaceutical advancement.' },
    { title: 'Impact', description: 'Driving positive change in healthcare through collaborative pharmaceutical research and development.' }
  ];

  const milestones = [
    { year: '2025', title: 'SPARC Founded', description: 'Launched by ZANE ProEd with 18 founding members' },
  ];

  const leadership = [
    { 
      name: 'Samyuktha Hariraman Indumathy', 
      title: "President's Office Associate", 
      bio: 'Supports organizational leadership by coordinating projects, managing documentation, and streamlining strategic initiatives.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_8e0724d86e30469385bfe17a38bffac7~mv2.png' 
    },
    { 
      name: 'Jersha SJ', 
      title: 'Events Coordinator', 
      bio: 'Plans, organizes, and delivers events with a focus on flawless execution and meaningful participant experiences.', 
      avatar: 'JSJ' 
    },
    { 
      name: 'Nishanth ', 
      title: 'Partnership & Sponsorship Associate', 
      bio: 'Builds partnerships and supports sponsorship initiatives to strengthen organizational programs and collaborations.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_b21b7b78756c4e36b0c0e90a8acdd488~mv2.png' 
    },
    { 
      name: 'Naveen N', 
      title: 'Media & Design Intern', 
      bio: 'Designs creative visuals and manages digital assets to enhance brand presence across platforms.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_3c9a1e2829d341719c82865be8294cab~mv2.jpg' 
    },
    { 
      name: 'Tharaneeshwaran', 
      title: 'Partnership & Sponsorship Associate', 
      bio: 'Supports partnership efforts by identifying opportunities and maintaining strong sponsor relationships.', 
      avatar: 'MK' 
    },
    { 
      name: 'Arudhra', 
      title: 'Media & Design Intern', 
      bio: 'Creates engaging media assets and visual content to promote initiatives and events effectively.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_cfda1e84816740e5969267a0727f94c7~mv2.jpg' 
    },
    { 
      name: 'Praveen P', 
      title: 'Event Coordinator', 
      bio: 'Coordinates event logistics, ensuring smooth operations and a professional experience for participants.', 
      avatar: 'PP' 
    },
    { 
      name: 'Sowjanya R', 
      title: 'Member Engagement Coordinator', 
      bio: 'Facilitates member participation and supports programs designed to boost engagement and collaboration.', 
      avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQGUwj2VxWI9Wg/profile-displayphoto-scale_400_400/B4EZkpvli_IoAk-/0/1757341967701?e=1760572800&v=beta&t=_6E6hzT7yHW5XHkFnlJ3AdXizaskevi-z1omD1vB5go' 
    },
    { 
      name: 'Sreenidhi V', 
      title: 'Community Outreach Lead', 
      bio: 'Leads initiatives to connect with the community, grow networks, and strengthen external relationships.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_252c82651f264a0eb6f86139853fd1b4~mv2.jpg' 
    },
    { 
      name: 'Nanthitha S', 
      title: 'Member Engagement Manager', 
      bio: 'Oversees programs and initiatives that keep members informed, involved, and motivated.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_f76a76038d9f46a3b4e2fa5d3fb20e7a~mv2.png' 
    },
    { 
      name: 'Jayanthi G', 
      title: 'Innovation Lab Intern', 
      bio: 'Assists with research and contributes creative ideas to innovation-driven projects and experiments.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_99b469bbd4f448e3a6210ba94022559f~mv2.jpg' 
    },
    { 
      name: 'Mithuna S', 
      title: 'Community Outreach Lead', 
      bio: 'Develops outreach campaigns and drives initiatives to expand community engagement and partnerships.', 
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQE5Z--_9oCfFg/profile-displayphoto-scale_400_400/B56ZkvURVZH8Ag-/0/1757435469005?e=1760572800&v=beta&t=SgJULxhACkn5N-l7v6Z6Yzf9b3dv1ncpsvoDIrYNy-k' 
    },
    { 
      name: 'Sriram malipriyan sivakumar', 
      title: 'Member Engagement Manager', 
      bio: 'Implements strategies to boost participation and ensure a vibrant, connected member community.', 
      avatar: 'https://media.licdn.com/dms/image/v2/D4E03AQEvl3o7w5rYNQ/profile-displayphoto-scale_400_400/B4EZk9EJT1GcAg-/0/1757666123217?e=1760572800&v=beta&t=gMnxw21OvrNR4287NcyUo6MGJFApGoyF9ylD4n15X-k' 
    },
    { 
      name: 'Siva Priyan G', 
      title: 'Partnership & Sponsorship Associate', 
      bio: 'Supports business development through research, partner engagement, and sponsorship coordination.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_1b520a94da134bb2a2367237fc927714~mv2.png' 
    },
    { 
      name: 'Neena Roshini', 
      title: 'Content Strategist', 
      bio: 'Develops content strategies and creates impactful communication materials for campaigns and initiatives.', 
      avatar: 'https://media.licdn.com/dms/image/v2/D5603AQE4GclPPKnmtA/profile-displayphoto-scale_400_400/B56ZktkCuiHIAg-/0/1757406049078?e=1760572800&v=beta&t=5z4kYEdNSBdPRmmI912c22DZoWeaKuSgUBugwCpnbVo' 
    },
    { 
      name: 'Rohith S', 
      title: 'Member Engagement Manager', 
      bio: 'Coordinates engagement activities and ensures members stay connected to organizational initiatives.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_af6acfaa20774e3791cd22f0de6f989a~mv2.png' 
    },
    { 
      name: 'Merrin K', 
      title: 'Partnership & Sponsorship Associate', 
      bio: 'Manages sponsorship relations and develops new opportunities to enhance organizational impact.', 
      avatar: 'https://static.wixstatic.com/media/6abdd9_90ddec92c086465eb41420cb9fb605df~mv2.jpg' 
    }
  ];

  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.3 });
  const [valuesRef, valuesInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [timelineRef, timelineInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [leadershipRef, leadershipInView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [differentRef, differentInView] = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-blue-950 to-blue-900 text-white relative">
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.3'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        opacity: 0.2
      }}></div>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        variants={sectionVariants}
        initial="hidden"
        animate={heroInView ? "visible" : "hidden"}
        className="text-white py-24 relative z-10">
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
      </motion.section>

      {/* Mission & Vision Section */}
      <MissionVisionSection />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        {/* Core Values */}
        <section className="mb-16" ref={valuesRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2 variants={childVariants} className="text-4xl font-bold mb-4">Our Core Values</motion.h2>
            <motion.p variants={childVariants} className="text-lg text-gray-400 max-w-2xl mx-auto">
              These values are the heartbeat of SPARC — guiding every step we take.
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={valuesInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="group bg-transparent rounded-2xl p-6 text-center transition-transform transform hover:-translate-y-2 hover:bg-zinc-800/30 shadow-md hover:shadow-xl opacity-90 border border-black"
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-colors">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Timeline */}
        <section className="mb-16" ref={timelineRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2 variants={childVariants} className="text-3xl font-bold mb-4">Our Journey</motion.h2>
            <motion.p variants={childVariants} className="text-lg text-gray-400">
              Key milestones in SPARC's growth and impact
            </motion.p>
          </motion.div>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={timelineInView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {milestones.map((milestone, index) => (
              <motion.div variants={childVariants} key={index} className="flex items-center">
                <div className="flex-shrink-0 w-24">
                  <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium text-center">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-grow ml-8">
                  <h3 className="text-lg font-semibold">{milestone.title}</h3>
                  <p className="text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16" ref={leadershipRef}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={leadershipInView ? "visible" : "hidden"}
            className="text-center mb-12"
          >
            <motion.h2 variants={childVariants} className="text-3xl font-bold mb-4">Leadership Team</motion.h2>
            <motion.p variants={childVariants} className="text-lg text-gray-400">
              Meet the visionaries behind SPARC's success
            </motion.p>
          </motion.div>

          {/* Row 1 - Scroll Left */}
          <motion.div
            variants={childVariants}
            className="overflow-hidden relative mb-6 group"
          >
            <div className="flex animate-circular-left gap-6 group-hover:slow-scroll">
              {leadership.slice(0, 9).concat(leadership.slice(0, 9)).map((leader, index) => (
                <div
                  key={`left-${index}`}
                  className="bg-transparent w-52 h-52 rounded-xl flex-none p-4 text-center shadow-md hover:bg-zinc-700/50 transition-all duration-300 opacity-90 border border-black"
                >
                  <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-3">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors duration-300">{leader.name}</h3>
                  <p className="text-blue-400 text-xs font-medium">{leader.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Row 2 - Scroll Right */}
          <motion.div
            variants={childVariants}
            className="overflow-hidden relative group"
          >
            <div className="flex animate-circular-right gap-6 group-hover:slow-scroll">
              {leadership.slice(9).concat(leadership.slice(9)).concat(leadership.slice(9)).map((leader, index) => (
                <div
                  key={`right-${index}`}
                  className="bg-transparent w-52 h-52 rounded-xl flex-none p-4 text-center shadow-md hover:bg-zinc-700/50 transition-all duration-300 opacity-90 border border-black"
                >
                  <div className="h-24 w-24 rounded-full overflow-hidden mx-auto mb-3">
                    <img
                      src={leader.avatar}
                      alt={leader.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <h3 className="text-sm font-semibold hover:text-blue-500 transition-colors duration-300">{leader.name}</h3>
                  <p className="text-blue-400 text-xs font-medium">{leader.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

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
        <section className="mb-16" ref={differentRef}>
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            animate={differentInView ? "visible" : "hidden"}
            className="bg-transparent rounded-2xl p-8 shadow-md opacity-90 border border-black"
          >
            <motion.div
              variants={childVariants}
              className="text-center mb-8"
            >
              <h2 className="text-3xl font-bold mb-4">What Makes SPARC Different?</h2>
              <p className="text-lg text-gray-400">
                We're not just another professional society - we're a transformative force in pharmaceutical sciences
              </p>
            </motion.div>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={differentInView ? "visible" : "hidden"}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {/* Left Column */}
              <motion.div variants={childVariants} className="space-y-4">
                <FeatureItem title="Community-Driven Approach" text="Our programs are shaped by member feedback and industry needs" />
                <FeatureItem title="Tiered Membership Model" text="Tailored benefits for students, professionals, and industry leaders" />
                <FeatureItem title="Global Reach" text="Connecting pharmaceutical professionals across continents" />
              </motion.div>
              {/* Right Column */}
              <motion.div variants={childVariants} className="space-y-4">
                <FeatureItem title="Industry Integration" text="Direct partnerships with leading pharmaceutical companies" />
                <FeatureItem title="Evidence-Based Programs" text="All initiatives backed by rigorous research and proven outcomes" />
                <FeatureItem title="Lifetime Value" text="Resources and connections that grow with your career" />
              </motion.div>
            </motion.div>
          </motion.div>
        </section>
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