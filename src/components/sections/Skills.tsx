import { motion } from 'framer-motion';
import { ShieldCheck, UserCheck, Calculator, GraduationCap, Laptop, Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: 'HR Administration & Compliance',
    icon: ShieldCheck,
    color: 'from-purple-500 to-indigo-600',
    description: 'Ensuring rigorous data confidentiality, compliance with Irish & UK employment law, and audit-ready records.',
    skills: [
      'Employee Records Management',
      'GDPR Compliance',
      'HR Documentation & Filing',
      'File Accuracy & Data Integrity',
      'Confidential Data Handling',
      'Statutory Employment Compliance',
      'Policy Administration'
    ]
  },
  {
    title: 'Recruitment & Onboarding',
    icon: UserCheck,
    color: 'from-purple-600 to-pink-600',
    description: 'Coordinating candidate lifecycles from talent sourcing to structured, welcoming inductions.',
    skills: [
      'Recruitment Coordination',
      'CV Screening & Shortlisting',
      'Interview Scheduling',
      'New Starter Documentation',
      'Onboarding & Induction Packs',
      'Global Talent Sourcing',
      'Candidate Relationship Management'
    ]
  },
  {
    title: 'Payroll & Employment Law',
    icon: Calculator,
    color: 'from-violet-500 to-purple-600',
    description: 'Grounding in Irish payroll calculations, statutory obligations, and employee entitlements.',
    skills: [
      'Payroll Processing Support',
      'PAYE, PRSI & USC Calculations',
      'Irish Employment Law (IPASS)',
      'UK Employment Law',
      'Statutory Leave Administration',
      'Time & Attendance / Overtime',
      'Benefit-in-Kind (BIK) Basics'
    ]
  },
  {
    title: 'Training & Employee Support',
    icon: GraduationCap,
    color: 'from-indigo-500 to-purple-500',
    description: 'Supporting employee growth, mandatory compliance certifications, and prompt query resolution.',
    skills: [
      'Training Administration',
      'Employee Training Records',
      'Employee Relations Support',
      'Query & Grievance Resolution',
      'Cross-Team Coordination',
      'Curriculum Co-Design',
      'Student & Peer Mentorship'
    ]
  },
  {
    title: 'Office, Systems & HR Data',
    icon: Laptop,
    color: 'from-purple-500 to-violet-700',
    description: 'Leveraging productivity tools and analytical spreadsheets for seamless office and HR operations.',
    skills: [
      'MS Excel (VLOOKUP & Formulas)',
      'MS Word & Outlook',
      'HR Systems & Databases',
      'HR Analytics & Reporting',
      'Diary & Schedule Management',
      'Process Improvement',
      'Multitasking & Prioritisation'
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Core Competencies
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            A comprehensive blend of HR operations, employment compliance, Irish payroll fundamentals, and data management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={index === 0 ? "lg:col-span-1" : ""}
              >
                <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group hover-lift flex flex-col">
                  <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />
                  
                  <div className="flex items-center gap-3 mb-3 pt-2">
                    <div className="p-2.5 rounded-xl bg-primary/10 border border-primary/30 text-primary group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-display font-semibold text-foreground">
                      {category.title}
                    </h3>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 font-body leading-relaxed">
                    {category.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {category.skills.map((skill, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: index * 0.05 + idx * 0.02 }}
                        className="px-2.5 py-1 rounded-full bg-secondary/80 text-foreground text-xs font-body hover:bg-primary/20 hover:text-primary transition-all duration-200 border border-border/40"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* CIPD & IPASS Feature Box */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="md:col-span-2 lg:col-span-1"
          >
            <div className="glass-card rounded-2xl p-6 h-full border border-primary/40 relative overflow-hidden flex flex-col justify-between bg-gradient-to-br from-primary/10 via-secondary/40 to-primary/5">
              <div className="absolute top-0 right-0 p-4 opacity-15">
                <Sparkles className="w-20 h-20 text-primary" />
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-1.5 rounded-lg bg-primary/20 text-primary">
                    <Sparkles className="w-4 h-4" />
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    Accredited Standards
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4 font-body leading-relaxed">
                  Combining formal UK postgraduate education with CIPD professional membership and accredited Irish payroll certification.
                </p>

                <div className="space-y-3">
                  <div className="p-3 rounded-xl bg-background/50 border border-border">
                    <p className="text-xs font-semibold text-primary">Associate Member, CIPD (Level 5)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Chartered Institute of Personnel and Development</p>
                  </div>
                  <div className="p-3 rounded-xl bg-background/50 border border-border">
                    <p className="text-xs font-semibold text-primary">IPASS CPT (QQI Level 6)</p>
                    <p className="text-xs text-muted-foreground mt-0.5">Irish Payroll Association • Employment Law & PAYE/PRSI/USC</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-border/60">
                <span className="text-xs text-muted-foreground font-body">
                  High confidential data integrity & process consistency.
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
