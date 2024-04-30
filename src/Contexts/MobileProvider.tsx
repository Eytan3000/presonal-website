import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';

// Define the type for the context value
type MobileContextType = {
  isMobile: boolean;
};

// Create a context
const MobileContext = createContext<MobileContextType | undefined>(undefined);

// Create a provider component
interface MobileProviderProps {
  children: ReactNode;
}

// Create a provider component
export const MobileProvider: React.FC<MobileProviderProps> = ({ children }) => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // You can adjust the width threshold according to your needs
    };

    // Initial check on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener('resize', handleResize);

    // Clean up event listener
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <MobileContext.Provider value={{ isMobile }}>
      {children}
    </MobileContext.Provider>
  );
};

// Custom hook to consume the context
export const useMobile = (): MobileContextType => {
  const context = useContext(MobileContext);
  if (!context) {
    throw new Error('useMobile must be used within a MobileProvider');
  }
  return context;
};
