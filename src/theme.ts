import { createTheme, alpha } from '@mui/material/styles'

// Material 3 + DeepMind inspired color palette
const palette = {
  primary: {
    main: '#7C3AED',
    light: '#A78BFA',
    dark: '#5B21B6',
    contrastText: '#FFFFFF',
  },
  secondary: {
    main: '#3B82F6',
    light: '#60A5FA',
    dark: '#1D4ED8',
    contrastText: '#FFFFFF',
  },
  success: {
    main: '#10B981',
    light: '#34D399',
    dark: '#059669',
  },
  warning: {
    main: '#F59E0B',
    light: '#FBBF24',
    dark: '#D97706',
  },
  error: {
    main: '#EF4444',
    light: '#F87171',
    dark: '#DC2626',
  },
  background: {
    default: '#F8FAFC',
    paper: '#FFFFFF',
  },
  text: {
    primary: '#1E293B',
    secondary: '#64748B',
  },
  grey: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
}

export const theme = createTheme({
  palette,
  typography: {
    fontFamily: '"Inter", "Noto Sans TC", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 700,
      lineHeight: 1.2,
      letterSpacing: '-0.02em',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 700,
      lineHeight: 1.3,
      letterSpacing: '-0.01em',
    },
    h3: {
      fontSize: '1.5rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '1.25rem',
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '1.125rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1rem',
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      color: palette.text.secondary,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0px 1px 2px rgba(15, 23, 42, 0.04)',
    '0px 1px 3px rgba(15, 23, 42, 0.06), 0px 1px 2px rgba(15, 23, 42, 0.04)',
    '0px 4px 6px -1px rgba(15, 23, 42, 0.06), 0px 2px 4px -1px rgba(15, 23, 42, 0.04)',
    '0px 10px 15px -3px rgba(15, 23, 42, 0.06), 0px 4px 6px -2px rgba(15, 23, 42, 0.04)',
    '0px 20px 25px -5px rgba(15, 23, 42, 0.06), 0px 10px 10px -5px rgba(15, 23, 42, 0.02)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
    '0px 25px 50px -12px rgba(15, 23, 42, 0.15)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: palette.background.default,
          scrollbarWidth: 'thin',
          '&::-webkit-scrollbar': {
            width: '8px',
            height: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: palette.grey[100],
          },
          '&::-webkit-scrollbar-thumb': {
            background: palette.grey[300],
            borderRadius: '4px',
          },
          '&::-webkit-scrollbar-thumb:hover': {
            background: palette.grey[400],
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
          boxShadow: '0px 4px 20px rgba(15, 23, 42, 0.04)',
          border: `1px solid ${alpha(palette.grey[200], 0.8)}`,
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0px 8px 30px rgba(15, 23, 42, 0.08)',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 24px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
        contained: {
          background: `linear-gradient(135deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
          '&:hover': {
            background: `linear-gradient(135deg, ${palette.primary.dark} 0%, ${palette.secondary.dark} 100%)`,
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            backgroundColor: palette.grey[50],
            transition: 'all 0.2s ease-in-out',
            '& fieldset': {
              borderColor: palette.grey[200],
              borderWidth: 1,
            },
            '&:hover fieldset': {
              borderColor: palette.grey[300],
            },
            '&.Mui-focused fieldset': {
              borderColor: palette.primary.main,
              borderWidth: 2,
            },
            '&.Mui-focused': {
              backgroundColor: '#FFFFFF',
            },
          },
        },
      },
    },
    MuiSlider: {
      styleOverrides: {
        root: {
          height: 8,
          '& .MuiSlider-track': {
            background: `linear-gradient(90deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
            border: 'none',
          },
          '& .MuiSlider-rail': {
            backgroundColor: palette.grey[200],
          },
          '& .MuiSlider-thumb': {
            width: 20,
            height: 20,
            backgroundColor: '#FFFFFF',
            border: `3px solid ${palette.primary.main}`,
            boxShadow: '0 2px 8px rgba(124, 58, 237, 0.3)',
            '&:hover, &.Mui-focusVisible': {
              boxShadow: '0 4px 12px rgba(124, 58, 237, 0.4)',
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: 48,
        },
        indicator: {
          height: 3,
          borderRadius: '3px 3px 0 0',
          background: `linear-gradient(90deg, ${palette.primary.main} 0%, ${palette.secondary.main} 100%)`,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          minHeight: 48,
          textTransform: 'none',
          fontWeight: 500,
          fontSize: '0.875rem',
          '&.Mui-selected': {
            fontWeight: 600,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
})
