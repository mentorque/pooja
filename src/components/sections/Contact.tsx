import { motion } from 'framer-motion';
import { GradientButton } from '@/components/ui/gradient-button';
import { Mail, Linkedin, Phone, MapPin, ArrowUpRight, FileDown, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-24 relative bg-gradient-subtle">
      <div className="absolute inset-0 bg-gradient-glow opacity-20 pointer-events-none" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body text-base">
            Open to HR Administrator, People Operations, and Payroll opportunities in Dublin, Ireland or hybrid/remote roles.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-6 sm:p-10 lg:p-12 text-center relative overflow-hidden"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-10">
              {[
                {
                  icon: Mail,
                  label: 'Email',
                  value: 'poojanee0605@gmail.com',
                  href: 'mailto:poojanee0605@gmail.com',
                  external: false
                },
                {
                  icon: Linkedin,
                  label: 'LinkedIn',
                  value: 'pooja-neeralagi',
                  href: 'https://www.linkedin.com/in/pooja-neeralagi',
                  external: true
                },
                {
                  icon: Phone,
                  label: 'Phone',
                  value: '+353 89 941 7297',
                  href: 'tel:+353899417297',
                  external: false
                },
                {
                  icon: MapPin,
                  label: 'Location',
                  value: 'Dublin, Ireland',
                  href: null,
                  external: false
                },
              ].map((item) => (
                item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    title={item.value}
                    className="group p-4 sm:p-5 rounded-2xl bg-secondary/60 hover:bg-primary/10 border border-border hover:border-primary/40 transition-all duration-300 flex flex-col items-center justify-center min-w-0"
                  >
                    <div className="flex flex-col items-center gap-3 w-full">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:scale-110 transition-transform shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-center w-full px-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-1 font-body">{item.label}</p>
                        <p className="text-xs sm:text-[13px] font-medium text-foreground font-display flex items-center justify-center gap-1 w-full">
                          <span className="truncate max-w-full">{item.value}</span>
                          {item.external && <ArrowUpRight className="w-3.5 h-3.5 text-primary shrink-0" />}
                        </p>
                      </div>
                    </div>
                  </a>
                ) : (
                  <div
                    key={item.label}
                    title={item.value}
                    className="group p-4 sm:p-5 rounded-2xl bg-secondary/60 border border-border flex flex-col items-center justify-center min-w-0"
                  >
                    <div className="flex flex-col items-center gap-3 w-full">
                      <div className="p-3 rounded-full bg-primary/10 border border-primary/30 shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="text-center w-full px-1 min-w-0">
                        <p className="text-xs text-muted-foreground mb-1 font-body">{item.label}</p>
                        <p className="text-xs sm:text-[13px] font-medium text-foreground font-display truncate max-w-full">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>

            <div className="flex flex-wrap justify-center gap-4">
              <GradientButton asChild>
                <a href="mailto:poojanee0605@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </GradientButton>
              <GradientButton variant="variant" asChild>
                <a
                  href="https://www.linkedin.com/in/pooja-neeralagi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="w-4 h-4 mr-2" />
                  Connect on LinkedIn
                </a>
              </GradientButton>
              <a
                href="/Pooje_resume.pdf"
                download="Pooja_Neeralagi_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-2.5 rounded-full border border-border bg-secondary hover:bg-secondary/80 text-foreground font-medium text-sm transition-all duration-300 hover:border-primary/40"
              >
                <FileDown className="w-4 h-4 mr-2 text-primary" />
                Download CV (PDF)
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
