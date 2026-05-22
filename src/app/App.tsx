import { useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Navigation from './components/Navigation';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import RiskManagementPage from './components/RiskManagementPage';
import TrainingPage from './components/TrainingPage';
import ChecklistPage from './components/ChecklistPage';
import BlogPage from './components/BlogPage';
import ContactPage from './components/ContactPage';
import FloatingChat from './components/FloatingChat';
import NR1SectionPage from './components/NR1SectionPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage onNavigate={setCurrentPage} />;
      case 'risks':
        return <RiskManagementPage />;
      case 'training':
        return <TrainingPage onNavigate={setCurrentPage} />;
      case 'checklist':
        return <ChecklistPage onNavigate={setCurrentPage} />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
      case 'nr1-1-1':
      case 'nr1-1-2':
      case 'nr1-1-3':
      case 'nr1-1-4':
      case 'nr1-1-5':
      case 'nr1-1-6':
        return <NR1SectionPage sectionId={currentPage} onNavigate={setCurrentPage} />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
        <main>{renderPage()}</main>
        <FloatingChat />
      </div>
    </ThemeProvider>
  );
}
