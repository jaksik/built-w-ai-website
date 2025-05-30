import Link from 'next/link';
import { ArrowRight } from 'lucide-react'; // Or any other icon library you prefer
import BeehiivForm from '@/components/BeehiivForm';

export default function LandingPage() {
  return (
    <div className="space-y-12 py-3 md:py-16 lg:py-20">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <div className="flex items-baseline justify-center logo-font">
          <span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-bold pr-1">Built </span>
          <span className="text-2xl sm:text-2xl md:text-4xl lg:text-4xl font-medium px-2"> with </span>
          <span className="text-5xl sm:text-5xl md:text-7xl lg:text-7xl font-bold border-4 rounded-sm  px-1 border-gray-700 dark:border-slate-300"> AI</span>
        </div>
        {/* <p className="mx-auto max-w-xl text-lg text-slate-600 dark:text-slate-400 md:text-xl">
          Your central hub for discovering AI tools, staying updated with the latest AI news, and understanding key AI concepts.
        </p> */}
        <BeehiivForm />
      </section>

      {/* Features/Sections Overview */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeatureCard
          title="AI Tool Directory"
          description="Discover and compare a curated list of powerful AI tools across various categories. Find the perfect tool for your needs."
          href="/tools"
          icon={ToolIcon} // Placeholder for an actual icon component
        />
        <FeatureCard
          title="AI News Hub"
          description="Stay informed with the latest breakthroughs, trends, and discussions in the rapidly evolving world of artificial intelligence."
          href="/news"
          icon={NewsIcon} // Placeholder for an actual icon component
        />
        <FeatureCard
          title="AI Glossary"
          description="Demystify complex AI terminology. Our comprehensive glossary explains key concepts in simple terms."
          href="/glossary"
          icon={GlossaryIcon} // Placeholder for an actual icon component
        />
      </section>
    </div>
  );
}

// Helper component for Feature Cards (can be moved to a components file)
// You'll need to define or import actual icons. For now, these are placeholders.
const ToolIcon = () => <svg className="w-8 h-8 mb-4 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>;
const NewsIcon = () => <svg className="w-8 h-8 mb-4 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>;
const GlossaryIcon = () => <svg className="w-8 h-8 mb-4 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v11.494m0 0a8.485 8.485 0 0011.209 0M12 17.747a8.485 8.485 0 01-11.209 0M12 6.253a8.485 8.485 0 0111.209 0M12 6.253L12 3M3.34 7.774L12 3m0 0l8.66 4.774M3.34 16.226L12 21m0 0l8.66-4.774M12 21V3" /></svg>;
// const LabsIcon = () => <svg className="w-8 h-8 mb-4 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.97l-2.387.975a2 2 0 01-1.022.547H5.572a2 2 0 01-1.022-.547L3.428 15a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.97l-2.387.975A2 2 0 013.5 21H20.5a2 2 0 011.022-.547l2.387-.975a6 6 0 003.86-.97l2.387-.477a2 2 0 001.022-.547V15a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.97z" /></svg>;


interface FeatureCardProps {
  title: string;
  description: string;
  href: string;
  icon: React.ElementType;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, href, icon: Icon }) => {
  return (
    <Link href={href} className="block p-6 bg-white dark:bg-slate-900 rounded-lg shadow-lg hover-card-rise border border-slate-200 dark:border-slate-800">
      <div className="flex flex-col items-center text-center md:items-start md:text-left">
        <Icon />
        <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
        <p className="text-sm text-slate-600 dark:text-slate-400">{description}</p>
        <span className="mt-4 text-sm font-medium text-sky-600 dark:text-sky-400 hover:underline">
          Learn more <ArrowRight className="inline h-4 w-4" />
        </span>
      </div>
    </Link>
  );
};