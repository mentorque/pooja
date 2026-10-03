import { motion } from 'framer-motion';
import { Award, CheckCircle, Clock, BookOpen, ShieldCheck } from 'lucide-react';

const certificates = [
  {
    id: 'cert-1',
    title: 'Certificate in Payroll Techniques (CPT)',
    issuer: 'IPASS (Irish Payroll Association)',
    level: 'QQI Level 6 (Special Purpose Award)',
    status: 'In Progress',
    statusType: 'progress',
    description: 'Specialist curriculum designed to master Irish payroll compliance and employment legislation. Topics include Irish Employment Law, PAYE, PRSI, and USC calculations, Benefit-in-Kind (BIK), pensions, statutory leaves, and Revenue payroll operations.',
    skills: ['Irish Employment Law', 'PAYE / PRSI / USC Calculations', 'Revenue Payroll Rules', 'Benefit-in-Kind (BIK)', 'Pensions & Leaves']
  },
  {
    id: 'cert-2',
    title: 'CIPD Level 5 Associate Diploma in People Management',
    issuer: 'Chartered Institute of Personnel and Development (CIPD)',
    level: 'Associate Member (Assoc CIPD)',
    status: 'Achieved (2022)',
    statusType: 'completed',
    description: 'Recognised professional diploma establishing expertise in people management, employee relations, recruitment and talent planning, performance management, and employment legislation.',
    skills: ['Associate Member Status', 'People Management', 'Employment Relations', 'Talent Resourcing', 'Evidence-Based HR']
  },
  {
    id: 'cert-3',
    title: 'HR Analytics Certification',
    issuer: 'IIM Kozhikode / UpGrad',
    level: 'Executive Certification',
    status: 'Completed',
    statusType: 'completed',
    description: 'Data-driven decision making in HR: measuring workforce productivity, attrition modeling, employee lifecycle metrics, reporting dashboards, and HR information systems optimization.',
    skills: ['HR Metrics & KPIs', 'Data-Driven Decision Making', 'Workforce Analytics', 'Attrition Forecasting', 'Advanced Excel Reporting']
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative bg-gradient-subtle">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Accreditations & Continuous Learning
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Professional Certifications</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            Formal qualifications in Irish payroll compliance, people management, and data-driven HR analytics.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className="glass-card rounded-2xl p-6 sm:p-7 h-full hover-lift flex flex-col relative overflow-hidden group border border-border/80 hover:border-primary/50">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary/10 via-transparent to-transparent rounded-bl-full" />
                
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:bg-primary/20 group-hover:scale-105 transition-all text-primary shrink-0">
                    <Award className="w-6 h-6" />
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      cert.statusType === 'progress'
                        ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                        : 'bg-emerald-500/15 text-emerald-300 border border-emerald-500/30'
                    }`}
                  >
                    {cert.statusType === 'progress' ? (
                      <Clock className="w-3.5 h-3.5" />
                    ) : (
                      <CheckCircle className="w-3.5 h-3.5" />
                    )}
                    {cert.status}
                  </span>
                </div>

                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-display font-semibold text-foreground leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-primary text-sm font-medium">{cert.issuer}</p>
                  <p className="text-muted-foreground text-xs font-body mt-0.5">{cert.level}</p>
                </div>

                <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6 flex-grow">
                  {cert.description}
                </p>

                <div className="pt-4 border-t border-border/60 mt-auto">
                  <p className="text-xs text-foreground/80 font-medium mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-primary" /> Core Competencies Covered:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] px-2.5 py-0.5 rounded-full bg-secondary text-muted-foreground font-body"
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

        {/* Professional Standard Guarantee Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="p-6 rounded-2xl glass-card border border-primary/30 bg-primary/5 flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="p-3 rounded-full bg-primary/20 text-primary shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h4 className="font-display font-semibold text-foreground text-base">
                Irish Statutory Compliance & Professional Standards
              </h4>
              <p className="text-muted-foreground text-xs sm:text-sm font-body mt-0.5">
                Committed to the highest standards of confidentiality, GDPR adherence, and statutory compliance in Irish workplace relations and payroll execution.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
