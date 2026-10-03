import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, ShoppingBag } from 'lucide-react';

const hrExperiences = [
  {
    title: 'HR Administrator',
    company: 'Concillium Automations Pvt Ltd',
    location: 'International / Remote Support',
    period: 'Aug 2024 – Jul 2025',
    type: 'Full-time HR Role',
    highlights: [
      'Supported end-to-end recruitment administration from posting vacancies to CV screening, candidate shortlisting, and interview scheduling in close alignment with hiring managers.',
      'Led onboarding and induction for all new hires; drafted contracts, gathered right-to-work starter packs, and verified compliance checklists.',
      'Maintained confidential digital employee records and files adhering strictly to GDPR guidelines and statutory labour laws.',
      'Administered leave records for sick, maternity, parental, and special leave with rigorous tracking and audit-ready documentation.',
      'Monitored employee mandatory training completions and maintained centralized compliance records for audits and internal reporting.',
      'Managed time & attendance, overtime records, and payroll adjustments; resolved daily staff queries promptly and diplomatically.',
      'Delivered accurate payroll support for 20–25 employees, verifying attendance, leaves, and deduction adjustments with zero discrepancy.',
      'Maintained HR databases and internal spreadsheets with meticulous attention to detail and strict data privacy protocols.'
    ],
    skills: ['Recruitment Coordination', 'Onboarding & Contracts', 'GDPR Compliance', 'Payroll Support', 'Leave Administration', 'Training Records']
  },
  {
    title: 'HR Intern',
    company: 'Congent Technology',
    location: 'UK-Based International Company',
    period: 'Nov 2023 – Apr 2024',
    type: 'International HR Internship',
    highlights: [
      'Sourced and identified talent across global channels and LinkedIn Recruiter, aligning candidates’ skills and cultural fit with open requirements.',
      'Conducted initial CV screening and structured preliminary interviews for international applicants against role benchmarks.',
      'Directed candidate progression through interview pipelines to formal offer letter issuance, improving time-to-hire workflows.',
      'Facilitated smooth onboarding journeys for new starters, organizing digital paperwork, starter kits, and managerial handover sessions.'
    ],
    skills: ['Global Talent Sourcing', 'LinkedIn Screening', 'Candidate Experience', 'Offer Issuance', 'New Starter Induction']
  },
  {
    title: 'HR Administrator',
    company: 'Laxmi Pride Limited',
    location: 'Operations & Administration',
    period: 'Jul 2020 – Aug 2021',
    type: 'HR & Operations',
    highlights: [
      'Spearheaded recruitment drives and interview schedules to fulfill high-volume staffing needs.',
      'Managed personnel files, digital records, and employee compliance verification in strict compliance with corporate policy.',
      'Served as the key liaison for all employee HR and payroll queries, escalating and resolving operational concerns with site managers.',
      'Handled high-volume correspondence, calendar management, and cross-departmental coordination efficiently.',
      'Coordinated contractor inspections, service maintenance, and store compliance to ensure operational continuity.',
      'Maintained spreadsheets and company databases with high data integrity and accuracy.'
    ],
    skills: ['Employee Query Resolution', 'Compliance Audits', 'Calendar & Scheduling', 'Contractor Coordination', 'Database Management']
  }
];

const retailExperiences = [
  {
    title: 'Seasonal Sales Associate',
    company: 'Tesco Ireland',
    period: 'Nov 2025 – Jan 2026',
    location: 'Dublin, Ireland'
  },
  {
    title: 'Sales Floor Team Member',
    company: 'Tesco',
    period: 'Nov 2023 – Aug 2024',
    location: 'United Kingdom'
  },
  {
    title: 'Customer Service Assistant',
    company: 'Co-op Food',
    period: 'Feb 2022 – Apr 2023',
    location: 'United Kingdom'
  }
];

const Experience = () => {
  return (
    <section id="experience" className="pt-24 pb-16 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Career Journey
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Work Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            Nearly 3 years of hands-on HR administration, recruitment coordination, payroll assistance, and statutory compliance across Ireland, the UK, and international operations.
          </p>
        </motion.div>

        {/* HR Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-8 mb-16">
          {hrExperiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-8 hover-lift relative overflow-hidden group">
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
                
                <div className="relative z-10 flex flex-col">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 mb-2">
                        <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary">
                          <Briefcase className="w-5 h-5" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-display font-semibold text-foreground">
                          {exp.title}
                        </h3>
                        <span className="px-2.5 py-0.5 text-xs font-medium rounded-full bg-primary/15 text-primary border border-primary/30">
                          {exp.type}
                        </span>
                      </div>
                      <p className="text-primary font-medium text-base">{exp.company}</p>
                      {exp.location && (
                        <div className="flex items-center gap-1.5 text-muted-foreground text-xs mt-1">
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{exp.location}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground shrink-0 bg-secondary/60 px-3 py-1.5 rounded-full border border-border">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-xs sm:text-sm font-body">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex gap-3 text-muted-foreground font-body text-sm sm:text-base leading-relaxed">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-border/60">
                    {exp.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-muted-foreground hover:text-foreground font-body transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Customer Facing & Retail Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary">
                <ShoppingBag className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground">
                  Retail & Customer Service Experience (Ireland & UK)
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Fast-paced customer operations, till reconciliation, inventory management, and collaborative teamwork.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-4 pt-4 border-t border-border/60">
              {retailExperiences.map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-secondary/50 border border-border">
                  <p className="font-semibold text-foreground text-sm mb-1">{item.title}</p>
                  <p className="text-primary text-xs font-medium mb-1">{item.company}</p>
                  <p className="text-muted-foreground text-xs">{item.location}</p>
                  <p className="text-muted-foreground/80 text-xs mt-2">{item.period}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
