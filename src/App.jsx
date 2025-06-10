import React, { useContext } from 'react';
import Orchids from './pages/Orchids';
import Footer from './components/Footer';
import Header from './components/Navbar';
import { ThemeProvider, ThemeContext } from './context/ThemeContext';
import MyButton from './components/MyButton';

function AppContent() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme} min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white`}>
      <Header />
      <div className="p-4">
        <MyButton />
        <Orchids />
      </div>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
