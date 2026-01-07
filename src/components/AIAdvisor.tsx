import { useState } from 'react'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  CircularProgress,
} from '@mui/material'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import { motion, AnimatePresence } from 'framer-motion'
import { Platform } from '../App'

interface Metrics {
  reach: number
  engagement: number
  pageViews: number
  orders: number
  revenue: number
  roi: number | null
  cpa: number | null
}

interface Props {
  metrics: Metrics
  platform: Platform
  followers: number
  cvr: number
  aov: number
  collaborationCost: number | null
}

const platformNames: Record<Platform, string> = {
  fb_post: 'Facebook 貼文',
  fb_video: 'Facebook 影片',
  ig_post: 'Instagram 貼文',
  ig_reels: 'Instagram Reels',
  youtube: 'YouTube 影片',
}

function AIAdvisor({ metrics, platform, followers, cvr }: Props) {
  const [isLoading, setIsLoading] = useState(false)
  const [advice, setAdvice] = useState<string | null>(null)

  const hasData = followers > 0 && metrics.revenue > 0

  const generateAdvice = () => {
    setIsLoading(true)

    // Simulate AI processing
    setTimeout(() => {
      const adviceText = generateAdviceText()
      setAdvice(adviceText)
      setIsLoading(false)
    }, 1500)
  }

  const generateAdviceText = () => {
    const lines: string[] = []

    // Platform analysis
    lines.push(`📊 **平台分析 (${platformNames[platform]})**`)
    if (platform === 'ig_reels' || platform === 'fb_video') {
      lines.push('影片內容的觸及率和互動率通常較高，建議持續投資這類內容。')
    } else {
      lines.push('靜態貼文適合深度內容，但可考慮增加影片內容以提升觸及。')
    }

    lines.push('')

    // ROI Analysis
    lines.push('💰 **ROI 分析**')
    if (metrics.roi !== null) {
      if (metrics.roi > 200) {
        lines.push(`預估 ROI ${metrics.roi.toFixed(1)}% 表現優異！這是一個值得投資的合作機會。`)
      } else if (metrics.roi > 100) {
        lines.push(`預估 ROI ${metrics.roi.toFixed(1)}% 表現良好，合作具有正向回報。`)
      } else if (metrics.roi > 0) {
        lines.push(`預估 ROI ${metrics.roi.toFixed(1)}%，建議評估是否能提升轉換率或降低合作費用。`)
      } else {
        lines.push(`預估 ROI 為負，建議重新評估合作條件或選擇其他 KOL。`)
      }
    } else {
      lines.push('請輸入預估合作費用以計算 ROI。')
    }

    lines.push('')

    // CVR suggestions
    lines.push('🎯 **轉換率建議**')
    if (cvr < 1.5) {
      lines.push('目前使用保守轉換率估算。若 KOL 有強力導購能力，可考慮提高預估。')
    } else if (cvr < 3) {
      lines.push('轉換率估算合理。建議搭配限時優惠或專屬折扣碼提升成效。')
    } else {
      lines.push('高轉換率估算適用於強力導購型 KOL，確認 KOL 過往數據支持此預估。')
    }

    lines.push('')

    // Optimization tips
    lines.push('✨ **優化建議**')
    const tips = [
      '考慮與 KOL 協商分潤模式，降低前期風險。',
      '要求 KOL 提供過往合作數據驗證預估。',
      '設定明確的 CTA 和追蹤連結以衡量成效。',
      '預留預算進行 A/B 測試不同創意內容。',
    ]
    const randomTip = tips[Math.floor(Math.random() * tips.length)]
    lines.push(randomTip)

    return lines.join('\n')
  }

  return (
    <Card
      sx={{
        background: 'linear-gradient(135deg, #FAFAFA 0%, #F5F3FF 100%)',
        border: '1px solid',
        borderColor: 'grey.200',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Header */}
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 2 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 4,
                height: 24,
                borderRadius: 1,
                background: 'linear-gradient(180deg, #7C3AED 0%, #3B82F6 100%)',
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Typography variant="h6" fontWeight={600}>
                Gemini
              </Typography>
              <Typography variant="h6" fontWeight={400} color="text.secondary">
                智慧商務顧問
              </Typography>
            </Box>
          </Box>

          <Button
            variant="contained"
            onClick={generateAdvice}
            disabled={!hasData || isLoading}
            startIcon={
              isLoading ? (
                <CircularProgress size={18} color="inherit" />
              ) : (
                <AutoAwesomeIcon />
              )
            }
            sx={{
              background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
              borderRadius: 3,
              px: 3,
              '&:hover': {
                background: 'linear-gradient(135deg, #6D28D9 0%, #DB2777 100%)',
              },
              '&.Mui-disabled': {
                background: 'grey.300',
                color: 'grey.500',
              },
            }}
          >
            取得 AI 決策建議
          </Button>
        </Box>

        {/* Content Area */}
        <Box
          sx={{
            minHeight: 120,
            borderRadius: 3,
            bgcolor: 'white',
            border: '1px dashed',
            borderColor: 'grey.300',
            p: 3,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                  <Box
                    sx={{
                      width: 48,
                      height: 48,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      animation: 'pulse 1.5s ease-in-out infinite',
                    }}
                  >
                    <AutoAwesomeIcon sx={{ color: 'white' }} />
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    AI 正在分析您的數據...
                  </Typography>
                </Box>
              </motion.div>
            ) : advice ? (
              <motion.div
                key="advice"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                style={{ width: '100%' }}
              >
                <Box sx={{ whiteSpace: 'pre-wrap' }}>
                  {advice.split('\n').map((line, index) => {
                    if (line.startsWith('**') || line.includes('**')) {
                      const cleanLine = line.replace(/\*\*/g, '')
                      return (
                        <Typography
                          key={index}
                          variant="body1"
                          sx={{
                            fontWeight: 600,
                            mt: index > 0 ? 2 : 0,
                            mb: 0.5,
                            color: 'text.primary',
                          }}
                        >
                          {cleanLine}
                        </Typography>
                      )
                    }
                    if (line.trim() === '') return null
                    return (
                      <Typography
                        key={index}
                        variant="body2"
                        sx={{
                          color: 'text.secondary',
                          lineHeight: 1.8,
                        }}
                      >
                        {line}
                      </Typography>
                    )
                  })}
                </Box>
              </motion.div>
            ) : (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    textAlign: 'center',
                  }}
                >
                  {hasData
                    ? '輸入預估數據，解鎖 AI 行銷顧問建議'
                    : '請先輸入網紅指標數據'}
                </Typography>
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </CardContent>
    </Card>
  )
}

export default AIAdvisor
