import { Box, Card, CardContent, Typography, Divider } from '@mui/material'
import TouchAppIcon from '@mui/icons-material/TouchApp'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  pageViews: number
  roi: number | null
  cpa: number | null
}

function PageViewsCard({ pageViews, roi, cpa }: Props) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('zh-TW').format(Math.round(num))
  }

  const formatCurrency = (num: number) => {
    return new Intl.NumberFormat('zh-TW', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(Math.round(num))
  }

  const formatPercent = (num: number) => {
    return num.toFixed(1)
  }

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent sx={{ p: 3 }}>
        {/* Page Views Section */}
        <Box sx={{ mb: 3 }}>
          <Typography
            variant="overline"
            sx={{
              color: 'text.secondary',
              fontWeight: 600,
              letterSpacing: '0.1em',
              display: 'block',
              mb: 0.5,
            }}
          >
            預估頁面瀏覽量 (LPV)
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 1 }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={pageViews}
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: 700,
                    background: 'linear-gradient(135deg, #1E293B 0%, #475569 100%)',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {formatNumber(pageViews)}
                </Typography>
              </motion.div>
            </AnimatePresence>
            <Typography variant="body2" color="text.secondary">
              次點擊
            </Typography>
          </Box>

          {/* Decorative icon */}
          <Box
            sx={{
              position: 'absolute',
              top: 16,
              right: 16,
              width: 48,
              height: 48,
              borderRadius: '50%',
              bgcolor: 'grey.100',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <TouchAppIcon sx={{ color: 'grey.400', fontSize: 24 }} />
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />

        {/* ROI and CPA */}
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box>
            <Typography variant="caption" color="text.secondary" display="block">
              預估 ROI
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: roi !== null ? (roi >= 0 ? 'success.main' : 'error.main') : 'text.secondary',
              }}
            >
              {roi !== null ? `${formatPercent(roi)}%` : '--'}
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="caption" color="text.secondary" display="block">
              每筆獲客成本 (CPA)
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 600,
                color: cpa !== null ? 'text.primary' : 'text.secondary',
              }}
            >
              {cpa !== null ? `$${formatCurrency(cpa)}` : '--'}
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default PageViewsCard
