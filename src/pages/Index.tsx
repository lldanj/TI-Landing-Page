import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Check, Target, Zap, TrendingUp, Search, Flame, HelpCircle, BarChart3, Users, ShieldCheck, Clock, ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="font-inter bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white border-b border-border-gray h-20 md:h-20">
        <div className="max-w-6xl mx-auto px-6 md:px-6 h-full flex items-center justify-between">
          <div className="text-xl font-semibold text-dark-text">Todoist Insights</div>
          <Button variant="ghost" className="text-medium-gray hover:text-primary">
            Login
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-6 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-16 items-center min-h-[600px]">
            {/* Left Column - Content */}
            <div className="lg:col-span-7">
              <h1 className="text-3xl md:text-5xl font-bold text-dark-text leading-tight tracking-tight mb-6">
                Finally See What Makes You Most Productive
              </h1>
              
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8">
                Stop chasing productivity hacks—get clear insights from your actual Todoist task patterns and workflow data
              </p>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4">
                  <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base text-gray-600">
                    Discover hidden bottlenecks and workflow wins buried in your Todoist data
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base text-gray-600">
                    Get instant insights from years of task history in 60 seconds
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <p className="text-base text-gray-600">
                    Zero workflow disruption - works with your current Todoist setup
                  </p>
                </div>
              </div>

              <Button 
                variant="cta" 
                size="lg" 
                className="text-lg font-semibold px-8 py-4 h-14 w-full md:w-auto shadow-[0_4px_12px_rgba(234,88,12,0.3)]"
              >
                Start My 14-Day Free Trial
              </Button>

              <p className="text-sm text-medium-gray mt-4">
                No credit card required • Instant insights from existing tasks • Cancel anytime
              </p>

              <p className="text-sm text-medium-gray mt-6">
                Join 2,000+ productivity enthusiasts optimizing their workflows
              </p>
            </div>

            {/* Right Column - Visual */}
            <div className="lg:col-span-5">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)]">
                <div className="bg-white rounded-lg p-6 space-y-4">
                  <div className="flex items-center gap-3 text-dark-text font-semibold">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Productivity Dashboard
                  </div>
                  <div className="space-y-3">
                    <div className="bg-light-gray rounded-lg p-3">
                      <div className="text-sm font-medium text-dark-text mb-1">Weekly Task Completion</div>
                      <div className="bg-primary h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="bg-light-gray rounded-lg p-3">
                      <div className="text-sm font-medium text-dark-text mb-1">Project Velocity</div>
                      <div className="bg-success-green h-2 rounded-full w-5/6"></div>
                    </div>
                    <div className="bg-light-gray rounded-lg p-3">
                      <div className="text-sm font-medium text-dark-text mb-1">Focus Time Trends</div>
                      <div className="bg-warning-amber h-2 rounded-full w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-light-gray py-16 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-text mb-8">
            You're Flying Blind
          </h2>
          
          <div className="text-lg md:text-xl text-gray-600 leading-relaxed space-y-6 mb-12">
            <p>
              You complete dozens of tasks weekly. But which workflows actually work? Which projects drain your energy? When are you most productive?
            </p>
            <p>
              Without data, you're guessing. Repeating inefficient patterns. Missing optimization goldmines sitting right in your Todoist history.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <Search className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-dark-text">Hidden Bottlenecks</p>
            </div>
            <div className="text-center">
              <Flame className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-dark-text">Energy Drains</p>
            </div>
            <div className="text-center">
              <HelpCircle className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-dark-text">Wasted Effort</p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="font-medium text-dark-text">Missed Wins</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="bg-white py-16 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-text mb-4">
              Your Personal Productivity Lab
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Todoist Insights connects to your existing data to automatically surface actionable patterns, trends, and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Benefit 1 */}
            <div className="text-center">
              <Target className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold text-dark-text mb-4">
                Spot productivity patterns you never noticed
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Our analytics reveal task completion trends, project bottlenecks, and optimization opportunities. See which workflows accelerate results and which create unnecessary friction.
              </p>
              <div className="bg-light-gray rounded-lg p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <div className="text-sm font-medium text-dark-text mb-2">Personal Analytics</div>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2 text-xs">Task completion patterns</div>
                  <div className="bg-white rounded p-2 text-xs">Workflow bottlenecks</div>
                </div>
              </div>
            </div>

            {/* Benefit 2 */}
            <div className="text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold text-dark-text mb-4">
                Optimize team workflows without micromanaging
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Understand how work flows through your team with collaboration analytics, project velocity insights, and workload distribution data. Make data-driven decisions about resource allocation.
              </p>
              <div className="bg-light-gray rounded-lg p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <div className="text-sm font-medium text-dark-text mb-2">Team Performance</div>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2 text-xs">Collaboration insights</div>
                  <div className="bg-white rounded p-2 text-xs">Project velocity</div>
                </div>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-primary mx-auto mb-6" />
              <h3 className="text-xl md:text-2xl font-semibold text-dark-text mb-4">
                Forecast productivity trends before problems emerge
              </h3>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                AI-powered forecasting identifies potential bottlenecks, predicts project completion timelines, and suggests proactive optimizations. Stay ahead of productivity challenges.
              </p>
              <div className="bg-light-gray rounded-lg p-4 shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <div className="text-sm font-medium text-dark-text mb-2">Predictive Analytics</div>
                <div className="space-y-2">
                  <div className="bg-white rounded p-2 text-xs">Trend forecasting</div>
                  <div className="bg-white rounded p-2 text-xs">Bottleneck prediction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-light-gray py-16 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-text text-center mb-16">
            Connect Once. Get Insights Forever.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-6">
                1
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">
                Connect Your Todoist Account (30 seconds)
              </h3>
              <p className="text-base text-gray-600 mb-4">
                One-click OAuth integration
              </p>
              <p className="text-sm text-medium-gray mb-4">
                Your data stays secure and private
              </p>
              <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center border border-border-gray">
                <div className="text-center">
                  <ShieldCheck className="w-8 h-8 text-success-green mx-auto mb-2" />
                  <p className="text-sm text-gray-600">OAuth Connection</p>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-6">
                2
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">
                Automatic Analysis Begins Instantly
              </h3>
              <p className="text-base text-gray-600 mb-4">
                AI processes historical data immediately
              </p>
              <p className="text-sm text-medium-gray mb-4">
                See insights from day 1, deep patterns within week 1
              </p>
              <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center border border-border-gray">
                <div className="text-center">
                  <Clock className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Processing Timeline</p>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center text-xl font-semibold mx-auto mb-6">
                3
              </div>
              <h3 className="text-xl font-semibold text-dark-text mb-4">
                Access Your Productivity Intelligence Dashboard
              </h3>
              <p className="text-base text-gray-600 mb-4">
                Immediate value delivery with insights pre-loaded
              </p>
              <p className="text-sm text-medium-gray mb-4">
                Interactive insights, not static reports
              </p>
              <div className="bg-white rounded-lg p-4 h-48 flex items-center justify-center border border-border-gray">
                <div className="text-center">
                  <BarChart3 className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-sm text-gray-600">Live Dashboard</p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="flex justify-center items-center gap-6 text-sm text-medium-gray">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6" />
                <span>SOC 2</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6" />
                <span>GDPR</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6" />
                <span>SSL</span>
              </div>
            </div>
            <p className="text-sm text-medium-gray mt-4">No workflow disruption</p>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-16 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-text text-center mb-12">
            Join 2,000+ Productivity Optimizers
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <Check className="w-6 h-6 text-success-green mx-auto mb-2" />
              <p className="font-medium text-dark-text">10M+ Tasks Analyzed</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <Check className="w-6 h-6 text-success-green mx-auto mb-2" />
              <p className="font-medium text-dark-text">4.8/5 G2 Rating</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <Check className="w-6 h-6 text-success-green mx-auto mb-2" />
              <p className="font-medium text-dark-text">SOC 2 Compliant</p>
            </div>
            <div className="bg-light-gray rounded-lg p-6 text-center">
              <Check className="w-6 h-6 text-success-green mx-auto mb-2" />
              <p className="font-medium text-dark-text">Zero Workflow Disruption</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-base text-medium-gray mb-6">
              Trusted by high-performance teams at companies like:
            </p>
            <div className="flex justify-center items-center gap-8 opacity-60 text-sm">
              <span>TechCorp</span>
              <span>InnovateLab</span>
              <span>DataFlow</span>
              <span>ProductiveTeam</span>
              <span>WorkSmart</span>
              <span>EfficiencyPro</span>
            </div>
          </div>

          <p className="text-sm text-medium-gray text-center max-w-2xl mx-auto mt-12">
            Bank-level security with SOC 2 compliance, end-to-end encryption, and GDPR certification. Your data never leaves secure servers, and you control access permissions completely.
          </p>
        </div>
      </section>

      {/* Differentiation */}
      <section className="bg-light-gray py-16 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold text-dark-text mb-4">
              Finally, Analytics That Actually Help
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              While other tools show you basic charts, Todoist Insights gives you an actionable intelligence layer that connects directly back to your work.
            </p>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-[0_4px_12px_rgba(0,0,0,0.05)] border border-border-gray">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-light-gray">
                    <th className="text-left p-4 font-semibold text-dark-text">Feature</th>
                    <th className="text-left p-4 font-semibold text-success-green">Todoist Insights</th>
                    <th className="text-left p-4 font-semibold text-medium-gray">Standard Analytics</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-border-gray">
                    <td className="p-4 font-medium">Workflow Disruption</td>
                    <td className="p-4 text-success-green">Zero. Connects instantly to your existing Todoist data.</td>
                    <td className="p-4 text-medium-gray">Requires manual setup or data export.</td>
                  </tr>
                  <tr className="border-b border-border-gray">
                    <td className="p-4 font-medium">Insight Quality</td>
                    <td className="p-4 text-success-green">Actionable. Reveals why things happen with analysis.</td>
                    <td className="p-4 text-medium-gray">Static. Shows what happened with basic charts.</td>
                  </tr>
                  <tr className="border-b border-border-gray">
                    <td className="p-4 font-medium">Actionability</td>
                    <td className="p-4 text-success-green">Direct. Links insights to filtered tasks in Todoist.</td>
                    <td className="p-4 text-medium-gray">Disconnected from your actual workflow.</td>
                  </tr>
                  <tr className="border-b border-border-gray">
                    <td className="p-4 font-medium">Weekly Review (GTD)</td>
                    <td className="p-4 text-success-green">Supercharged. Automates data gathering for your review.</td>
                    <td className="p-4 text-medium-gray">No specific support for GTD or review methodologies.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium">Time to Value</td>
                    <td className="p-4 text-success-green">Instant. See insights from day one using historical data.</td>
                    <td className="p-4 text-medium-gray">Requires weeks of data collection before showing meaningful trends.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 md:py-16">
        <div className="max-w-4xl mx-auto px-6 md:px-6">
          <h2 className="text-3xl md:text-4xl font-semibold text-dark-text text-center mb-12">
            Got Questions?
          </h2>

          <Accordion type="single" collapsible className="space-y-6">
            <AccordionItem value="item-1" className="border-b border-border-gray">
              <AccordionTrigger className="text-lg font-semibold text-dark-text py-6 hover:no-underline">
                We already have analytics in our productivity tools
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 pb-6">
                Most tools show what happened, but Todoist Insights reveals why it matters. We're the only solution that connects productivity patterns across your entire workflow to identify optimization opportunities.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-b border-border-gray">
              <AccordionTrigger className="text-lg font-semibold text-dark-text py-6 hover:no-underline">
                We don't have time to analyze more data
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 pb-6">
                That's exactly why we built AI-powered automation. Our system does the analysis—you just get actionable insights delivered weekly. No manual work required.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-b border-border-gray">
              <AccordionTrigger className="text-lg font-semibold text-dark-text py-6 hover:no-underline">
                How secure is our productivity data?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 pb-6">
                Bank-level security with SOC 2 compliance, end-to-end encryption, and GDPR certification. Your data never leaves secure servers, and you control access permissions completely.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-b border-border-gray">
              <AccordionTrigger className="text-lg font-semibold text-dark-text py-6 hover:no-underline">
                What if it doesn't integrate well with our workflow?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 pb-6">
                Zero workflow disruption guaranteed. We read your existing Todoist data without changing anything. If you're not seeing value within the first week, we'll refund completely and help export any data.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-b border-border-gray">
              <AccordionTrigger className="text-lg font-semibold text-dark-text py-6 hover:no-underline">
                How does pricing work after the trial?
              </AccordionTrigger>
              <AccordionContent className="text-base text-gray-600 pb-6">
                After your 14-day free trial, you can choose a plan that fits your team size. Our pricing is transparent and available on our pricing page. You will not be charged automatically.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary py-20 md:py-20">
        <div className="max-w-4xl mx-auto px-6 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Wondering. Start Knowing.
          </h2>
          
          <p className="text-lg md:text-xl text-white/90 mb-10">
            Go from guessing to knowing. Unlock the full potential of your workflow in the next 60 seconds.
          </p>

          <Button 
            variant="cta" 
            size="lg" 
            className="text-xl font-semibold px-10 py-5 h-16 shadow-[0_6px_16px_rgba(234,88,12,0.4)]"
          >
            Start My Free 14-Day Trial Now
          </Button>

          <p className="text-sm text-white/80 mt-5">
            Full access • No credit card required • Cancel anytime
          </p>

          <p className="text-sm text-warning-amber mt-4">
            Join 150+ teams who started their trial this week
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-text py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>About Us</p>
                <p>Contact</p>
                <p>Careers</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Product</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>Features</p>
                <p>Pricing</p>
                <p>Security</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Resources</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <p>Blog</p>
                <p>Help Center</p>
                <p>API Docs</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-600 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-6 mb-4 md:mb-0">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-gray-400" />
                <span className="text-sm text-gray-400">SOC 2</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-gray-400" />
                <span className="text-sm text-gray-400">GDPR</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-gray-400" />
                <span className="text-sm text-gray-400">SSL</span>
              </div>
            </div>
            <p className="text-xs text-medium-gray">
              Copyright © 2025 Todoist Insights | Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;