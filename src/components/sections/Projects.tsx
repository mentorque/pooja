import { motion } from 'framer-motion';
import { Calculator, Users, ShieldCheck, GraduationCap, CheckCircle2 } from 'lucide-react';

const hrProjects = [
  {
    title: 'Irish Payroll & Statutory Compliance Model',
    subtitle: 'IPASS QQI Level 6 Practical Framework',
    period: '2025 – Present',
    description: 'Developed practical application models for Irish payroll execution, incorporating current Revenue tax bands, PRSI sub-classes, Universal Social Charge (USC) calculations, Benefit-in-Kind (BIK), and statutory leave entitlements.',
    highlights: [
      'Modeled precise PAYE, PRSI, and USC tax computations across varied salary bands',
      'Structured Benefit-in-Kind (BIK) and pension deduction reconciliation workflows',
      'Mapped Irish statutory leave policies (Sick Leave, Maternity, Paternity, Parental Leave) to payroll adjustments'
    ],
    tags: ['Irish Payroll', 'IPASS QQI Level 6', 'PAYE / PRSI / USC', 'Statutory Compliance', 'Excel Modeling'],
    icon: Calculator
  },
  {
    title: 'Full-Cycle Recruitment & International Sourcing',
    subtitle: 'End-to-End Talent Acquisition Pipeline',
    period: '2023 – 2025',
    description: 'Designed and coordinated end-to-end recruitment operations across international markets, from initial requisition and proactive LinkedIn talent sourcing to structured interviews and offer coordination.',
    highlights: [
      'Conducted global candidate screening and competency-based interview evaluations',
      'Liaised closely with hiring managers to expedite candidate feedback and scheduling',
      'Reduced candidate drop-off by maintaining responsive, transparent candidate communications'
    ],
    tags: ['Talent Sourcing', 'LinkedIn Recruiter', 'Interview Scheduling', 'Candidate Experience', 'Offer Issuance'],
    icon: Users
  },
  {
    title: 'GDPR-Compliant Employee Lifecycle & Record System',
    subtitle: 'Digital Personnel Records & Audit Readiness',
    period: '2024 – 2025',
    description: 'Standardized digital employee records and starter-leaver documentation to guarantee 100% GDPR data privacy compliance and seamless internal audit readiness.',
    highlights: [
      'Formulated new starter onboarding packets, employment contracts, and compliance checklists',
      'Instituted audit-proof tracking for annual leave, sick leave, overtime, and mandatory training records',
      'Secured confidential personnel data with strict access privileges and systematic review schedules'
    ],
    tags: ['GDPR Compliance', 'Onboarding & Contracts', 'Employee Records', 'Time & Attendance', 'Audit Readiness'],
    icon: ShieldCheck
  },
  {
    title: 'Workplace Soft Skills & Mentorship Initiative',
    subtitle: 'Curriculum Co-Design & Workshop Delivery',
    period: '2022 – 2023',
    description: 'Co-created and delivered structured workshop sessions for emerging professionals and mentored university students navigating academic and career transitions.',
    highlights: [
      'Delivered interactive training modules to a cohort of 20 students focusing on communication and teamwork',
      'Mentored new postgraduate joiners at Aston University, assisting with cultural and academic integration',
      'Received outstanding feedback on workshop engagement and practical workplace relevance'
    ],
    tags: ['Training Administration', 'Curriculum Design', 'Student Mentorship', 'Workshop Delivery'],
    icon: GraduationCap
  }
];

const Projects = () => {
  return (
    <section id="projects" className="pt-12 pb-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            HR In Practice
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Key HR Initiatives & Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            Demonstrating real-world operational execution in payroll frameworks, talent acquisition, GDPR compliance, and people development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {hrProjects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group"
              >
                <div className="glass-card rounded-2xl p-6 sm:p-8 h-full hover-lift flex flex-col relative overflow-hidden border border-border/80 hover:border-primary/50">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 text-primary">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-body">
                        {project.period}
                      </span>
                    </div>

                    <h3 className="text-xl font-display font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mb-3">
                      {project.subtitle}
                    </p>
                    <p className="text-muted-foreground text-sm mb-4 font-body leading-relaxed">
                      {project.description}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex gap-2 text-sm text-muted-foreground font-body">
                          <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-border/60">
                      {project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-body"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
