import { Box, Card, CardContent, Typography, Chip } from '@mui/material'
import LockIcon from '@mui/icons-material/Lock'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  revenue: number
  orders: number
}

function RevenueCard({ revenue, orders }: Props) {
  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('zh-TW', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(num))
  }

  const formatOrders = (num: number) => {
    return Math.round(num)
  }

  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, #7C3AED 0%, #3B82F6 100%)',
        color: 'white',
        height: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background decoration */}
      <Box
        sx={{
          position: 'absolute',
          top: -50,
          right: -50,
          width: 200,
          height: 200,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.1)',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: -30,
          left: -30,
          width: 120,
          height: 120,
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
        }}
      />

      <CardContent sx={{ p: 3, position: 'relative', zIndex: 1 }}>
        <Typography
          variant="overline"
          sx={{
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: 600,
            letterSpacing: '0.1em',
            mb: 1,
            display: 'block',
          }}
        >
          預估總營收 (REVENUE)
        </Typography>

        <AnimatePresence mode="wait">
          <motion.div
            key={revenue}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1,
                mb: 2,
                textShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',
              }}
            >
              ${formatCurrency(revenue)}
            </Typography>
          </motion.div>
        </AnimatePresence>

        <Chip
          icon={<LockIcon sx={{ fontSize: 16, color: 'rgba(255, 255, 255, 0.9) !important' }} />}
          label={`預估訂單：${formatOrders(orders)} 筆`}
          sx={{
            bgcolor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            fontWeight: 500,
            borderRadius: 2,
            '& .MuiChip-label': {
              px: 1,
            },
          }}
        />
      </CardContent>
    </Card>
  )
}

export default RevenueCard
