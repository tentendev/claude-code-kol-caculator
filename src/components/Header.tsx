import { Box, Typography, Button, useTheme, useMediaQuery } from '@mui/material'
import { motion } from 'framer-motion'
import CalculateIcon from '@mui/icons-material/Calculate'

function Header() {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
    <Box
      component="header"
      sx={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid',
        borderColor: 'grey.200',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          maxWidth: 'xl',
          mx: 'auto',
          px: { xs: 2, sm: 3 },
          py: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo and Title */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Box
              sx={{
                width: 44,
                height: 44,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 14px rgba(124, 58, 237, 0.25)',
              }}
            >
              <CalculateIcon sx={{ color: 'white', fontSize: 24 }} />
            </Box>
          </motion.div>

          <Box>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: 1.2,
                }}
              >
                KOL ROI Master
              </Typography>
            </motion.div>
            {!isMobile && (
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: 'text.secondary',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    fontSize: '0.65rem',
                    fontWeight: 500,
                  }}
                >
                  Lead & Sales Indicator Tool
                </Typography>
              </motion.div>
            )}
          </Box>
        </Box>

        {/* CTA Button */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            variant="outlined"
            size={isMobile ? 'small' : 'medium'}
            sx={{
              borderColor: 'primary.main',
              color: 'primary.main',
              borderRadius: 3,
              px: { xs: 2, sm: 3 },
              fontWeight: 600,
              fontSize: { xs: '0.75rem', sm: '0.875rem' },
              '&:hover': {
                background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
                color: 'white',
                borderColor: 'transparent',
              },
            }}
          >
            網紅合作成效計算機
          </Button>
        </motion.div>
      </Box>
    </Box>
  )
}

export default Header
