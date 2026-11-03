import { createContext, useContext, useEffect, useRef, useState, type ReactNode } from 'react';

export type Theme = 'dark' | 'light';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'priyam_portfolio_theme';

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const transitionTimerRef = useRef<number | null>(null);

  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'dark';
    try {
      const saved = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
      if (saved === 'dark' || saved === 'light') {
        return saved;
      }
    } catch {
      // Ignore localStorage read errors in restricted contexts
    }
    // First preview / default visit is ALWAYS the original dark theme (Black & Orange)
    return 'dark';
  });

  const applyThemeTransition = () => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;

    // Respect reduced motion setting
    const prefersReducedMotion =
      window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      return;
    }

    root.classList.add('theme-transitioning');
    if (transitionTimerRef.current !== null) {
      clearTimeout(transitionTimerRef.current);
    }

    // 700ms window cleanly envelops the 650ms animation curve
    transitionTimerRef.current = window.setTimeout(() => {
      root.classList.remove('theme-transitioning');
      transitionTimerRef.current = null;
    }, 700);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      root.classList.remove('light');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore localStorage write errors
    }
  }, [theme]);

  // Clean up any pending timer on unmount
  useEffect(() => {
    return () => {
      if (transitionTimerRef.current !== null) {
        clearTimeout(transitionTimerRef.current);
      }
    };
  }, []);

  const toggleTheme = () => {
    applyThemeTransition();
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: Theme) => {
    if (newTheme !== theme) {
      applyThemeTransition();
      setThemeState(newTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
