import { Box, Card, CardContent, Typography } from '@mui/material'
import { motion } from 'framer-motion'

interface Props {
  reach: number
  engagement: number
  pageViews: number
  orders: number
}

interface FunnelStage {
  label: string
  value: number
  color: string
  bgColor: string
}

function ConversionFunnel({ reach, engagement, pageViews, orders }: Props) {
  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('zh-TW').format(Math.round(num))
  }

  const maxValue = reach || 1

  const stages: FunnelStage[] = [
    {
      label: '觸及人數',
      value: reach,
      color: '#94A3B8',
      bgColor: '#F1F5F9',
    },
    {
      label: '互動數',
      value: engagement,
      color: '#7C3AED',
      bgColor: '#EDE9FE',
    },
    {
      label: '頁面瀏覽',
      value: pageViews,
      color: '#3B82F6',
      bgColor: '#DBEAFE',
    },
    {
      label: '成交訂單',
      value: orders,
      color: '#10B981',
      bgColor: '#D1FAE5',
    },
  ]

  return (
    <Card>
      <CardContent sx={{ p: 3 }}>
        {/* Section Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
          <Box
            sx={{
              width: 4,
              height: 24,
              borderRadius: 1,
              background: 'linear-gradient(180deg, #7C3AED 0%, #3B82F6 100%)',
            }}
          />
          <Typography variant="h6" fontWeight={600}>
            合作轉換漏斗 (Conversion Funnel)
          </Typography>
        </Box>

        {/* Funnel Stages */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {stages.map((stage, index) => {
            const percentage = (stage.value / maxValue) * 100
            const displayPercentage = Math.min(percentage, 100)

            return (
              <motion.div
                key={stage.label}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  {/* Label */}
                  <Typography
                    variant="body2"
                    sx={{
                      width: 80,
                      color: 'text.secondary',
                      fontWeight: 500,
                      textAlign: 'right',
                      flexShrink: 0,
                    }}
                  >
                    {stage.label}
                  </Typography>

                  {/* Progress Bar */}
                  <Box sx={{ flex: 1, position: 'relative' }}>
                    <Box
                      sx={{
                        height: 32,
                        bgcolor: stage.bgColor,
                        borderRadius: 2,
                        overflow: 'hidden',
                        position: 'relative',
                      }}
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${displayPercentage}%` }}
                        transition={{ duration: 0.8, delay: 0.2 + index * 0.1, ease: [0.4, 0, 0.2, 1] }}
                        style={{
                          height: '100%',
                          background: stage.color,
                          borderRadius: 8,
                          minWidth: stage.value > 0 ? 8 : 0,
                        }}
                      />
                    </Box>
                  </Box>

                  {/* Value */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 600,
                        color: stage.color,
                        minWidth: 80,
                        textAlign: 'right',
                      }}
                    >
                      {index === stages.length - 1
                        ? stage.value.toFixed(1)
                        : formatNumber(stage.value)}
                    </Typography>
                  </motion.div>
                </Box>
              </motion.div>
            )
          })}
        </Box>

        {/* Conversion Rate Summary */}
        <Box
          sx={{
            mt: 3,
            pt: 2,
            borderTop: '1px dashed',
            borderColor: 'grey.200',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 2,
          }}
        >
          <Box sx={{ textAlign: 'center', flex: 1, minWidth: 80 }}>
            <Typography variant="caption" color="text.secondary">
              觸及 → 互動
            </Typography>
            <Typography variant="body2" fontWeight={600} color="primary.main">
              {reach > 0 ? ((engagement / reach) * 100).toFixed(2) : 0}%
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', flex: 1, minWidth: 80 }}>
            <Typography variant="caption" color="text.secondary">
              互動 → 瀏覽
            </Typography>
            <Typography variant="body2" fontWeight={600} color="secondary.main">
              {engagement > 0 ? ((pageViews / engagement) * 100).toFixed(0) : 0}%
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'center', flex: 1, minWidth: 80 }}>
            <Typography variant="caption" color="text.secondary">
              瀏覽 → 成交
            </Typography>
            <Typography variant="body2" fontWeight={600} color="success.main">
              {pageViews > 0 ? ((orders / pageViews) * 100).toFixed(2) : 0}%
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ConversionFunnel
