import { motion } from 'framer-motion';
import { GraduationCap, HeartHandshake, Award } from 'lucide-react';

const education = [
  {
    degree: 'MSc Human Resource Management',
    school: 'Aston University',
    location: 'Birmingham, United Kingdom',
    period: '2021 – 2022',
    details: 'Comprehensive postgraduate degree covering Strategic HRM, Employment Law, Employee Relations, Talent Acquisition, People Analytics, and Organisational Performance.',
    badge: 'CIPD Accredited'
  },
  {
    degree: 'Bachelor of Business Administration (BBA) - International Business',
    school: 'Jain University',
    location: 'Bangalore, India',
    period: '2017 – 2020',
    details: 'Grounding in international business principles, organisational dynamics, cross-cultural communication, corporate management, and global commercial strategy.',
    badge: 'Graduated with Distinction'
  }
];

const volunteerExperience = [
  {
    role: 'Student Mentor',
    initiative: 'Aston Mentorship Program',
    organisation: 'Aston University, UK',
    description: 'Mentored newly enrolled postgraduate students, guiding them through university transition, academic orientation, and student support resources.',
    icon: HeartHandshake
  },
  {
    role: 'Curriculum Co-Designer & Trainer',
    initiative: 'Soft Skills Development Initiative',
    organisation: 'Soft Skills Startup',
    description: 'Co-designed practical training curriculum and delivered interactive workshops to a cohort of 20 students, enhancing communication, teamwork, and interview skills.',
    icon: Award
  }
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Academic Background
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Education & Mentorship</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            Postgraduate specialization in Human Resource Management paired with international business education and community leadership.
          </p>
        </motion.div>

        {/* Education Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift group relative overflow-hidden flex flex-col justify-between">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/15 to-transparent rounded-bl-full" />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 text-primary group-hover:scale-110 transition-transform shrink-0">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/15 text-primary border border-primary/20 inline-block mb-2">
                        {edu.badge}
                      </span>
                      <h3 className="text-xl font-display font-semibold text-foreground mb-1 leading-snug">
                        {edu.degree}
                      </h3>
                      <p className="text-primary font-medium text-sm">{edu.school}</p>
                      <p className="text-muted-foreground text-xs">{edu.location}</p>
                    </div>
                  </div>

                  <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6">
                    {edu.details}
                  </p>
                </div>

                <div className="relative z-10 pt-4 border-t border-border/60">
                  <span className="px-3 py-1 rounded-full bg-secondary text-foreground font-body text-xs font-medium">
                    {edu.period}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Volunteer & Mentorship Section */}
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl font-display font-bold text-foreground">
              Leadership & Volunteer Initiatives
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              Giving back to students and fostering workplace readiness
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {volunteerExperience.map((vol, idx) => {
              const Icon = vol.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div className="glass-card rounded-2xl p-6 h-full border border-border hover:border-primary/40 transition-colors">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary shrink-0">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-base font-display font-semibold text-foreground">
                          {vol.role}
                        </h4>
                        <p className="text-primary text-xs font-medium">{vol.initiative} • {vol.organisation}</p>
                        <p className="text-xs text-muted-foreground mt-2 leading-relaxed font-body">
                          {vol.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
