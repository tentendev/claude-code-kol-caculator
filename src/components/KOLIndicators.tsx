import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Tabs,
  Tab,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'
import { Platform } from '../App'

interface PlatformTabProps {
  icon: React.ReactElement
  label: string
  value: Platform
}

const platformTabs: PlatformTabProps[] = [
  { icon: <FacebookIcon />, label: 'FB 貼文', value: 'fb_post' },
  { icon: <PlayCircleOutlineIcon />, label: 'FB 影片', value: 'fb_video' },
  { icon: <InstagramIcon />, label: 'IG 貼文', value: 'ig_post' },
  { icon: <PlayCircleOutlineIcon />, label: 'IG Reels', value: 'ig_reels' },
  { icon: <YouTubeIcon />, label: 'YT 影片', value: 'youtube' },
]

interface Props {
  platform: Platform
  setPlatform: (p: Platform) => void
  followers: number
  setFollowers: (n: number) => void
  customReach: number | null
  setCustomReach: (n: number | null) => void
  customEngagement: number | null
  setCustomEngagement: (n: number | null) => void
  customPageViews: number | null
  setCustomPageViews: (n: number | null) => void
  calculatedReach: number
  calculatedEngagement: number
  calculatedPageViews: number
}

function KOLIndicators({
  platform,
  setPlatform,
  followers,
  setFollowers,
  customReach,
  setCustomReach,
  customEngagement,
  setCustomEngagement,
  customPageViews,
  setCustomPageViews,
  calculatedReach,
  calculatedEngagement,
  calculatedPageViews,
}: Props) {
  const handlePlatformChange = (_: React.SyntheticEvent, newValue: Platform) => {
    setPlatform(newValue)
  }

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('zh-TW').format(Math.round(num))
  }

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
            第一步：網紅領先指標
          </Typography>
        </Box>

        {/* Platform Tabs */}
        <Box
          sx={{
            mb: 3,
            borderRadius: 3,
            bgcolor: 'grey.50',
            p: 0.5,
          }}
        >
          <Tabs
            value={platform}
            onChange={handlePlatformChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{
              minHeight: 48,
              '& .MuiTabs-indicator': {
                display: 'none',
              },
              '& .MuiTab-root': {
                minHeight: 44,
                minWidth: 'auto',
                px: 2,
                py: 1,
                borderRadius: 2.5,
                mx: 0.25,
                transition: 'all 0.2s ease',
                '&.Mui-selected': {
                  bgcolor: 'white',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                  color: 'primary.main',
                },
              },
            }}
          >
            {platformTabs.map((tab) => (
              <Tab
                key={tab.value}
                value={tab.value}
                icon={tab.icon}
                label={tab.label}
                iconPosition="start"
                sx={{
                  gap: 0.5,
                  '& .MuiSvgIcon-root': {
                    fontSize: 18,
                  },
                }}
              />
            ))}
          </Tabs>
        </Box>

        {/* Input Fields */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2.5 }}>
          {/* Followers */}
          <Box>
            <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
              1. FB 粉絲人數
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={followers}
              onChange={(e) => setFollowers(Number(e.target.value) || 0)}
              placeholder="輸入粉絲人數"
              size="small"
            />
          </Box>

          {/* Reach */}
          <Box>
            <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
              2. 觸及人數
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={customReach ?? ''}
              onChange={(e) => {
                const val = e.target.value
                setCustomReach(val ? Number(val) : null)
              }}
              placeholder={`公式預估: ${formatNumber(calculatedReach)}`}
              size="small"
              InputProps={{
                sx: { bgcolor: customReach ? 'white' : 'grey.50' },
              }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}>
              10 萬以上預估觸及率 10%
            </Typography>
          </Box>

          {/* Engagement */}
          <Box>
            <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
              3. 平均互動數
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={customEngagement ?? ''}
              onChange={(e) => {
                const val = e.target.value
                setCustomEngagement(val ? Number(val) : null)
              }}
              placeholder={`公式預估: ${formatNumber(calculatedEngagement)}`}
              size="small"
              InputProps={{
                sx: { bgcolor: customEngagement ? 'white' : 'grey.50' },
              }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}>
              觸及人數 x 2%
            </Typography>
          </Box>

          {/* Page Views */}
          <Box>
            <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
              4. 頁面瀏覽數
            </Typography>
            <TextField
              fullWidth
              type="number"
              value={customPageViews ?? ''}
              onChange={(e) => {
                const val = e.target.value
                setCustomPageViews(val ? Number(val) : null)
              }}
              placeholder={`公式預估: ${formatNumber(calculatedPageViews)}`}
              size="small"
              InputProps={{
                sx: { bgcolor: customPageViews ? 'white' : 'grey.50' },
              }}
            />
            <Typography variant="caption" sx={{ color: 'text.secondary', mt: 0.5, display: 'block' }}>
              互動數 x 200%
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default KOLIndicators
