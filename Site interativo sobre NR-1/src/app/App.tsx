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

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'risks':
        return <RiskManagementPage />;
      case 'training':
        return <TrainingPage />;
      case 'checklist':
        return <ChecklistPage />;
      case 'blog':
        return <BlogPage />;
      case 'contact':
        return <ContactPage />;
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