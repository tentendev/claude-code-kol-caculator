import {
  Box,
  Card,
  CardContent,
  Typography,
  TextField,
  Slider,
  InputAdornment,
} from '@mui/material'

interface Props {
  cvr: number
  setCvr: (n: number) => void
  aov: number
  setAov: (n: number) => void
  collaborationCost: number | null
  setCollaborationCost: (n: number | null) => void
}

function SalesIndicators({
  cvr,
  setCvr,
  aov,
  setAov,
  collaborationCost,
  setCollaborationCost,
}: Props) {
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
            第二步：商品銷售指標
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {/* CVR Slider */}
          <Box>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 1 }}>
              <Typography variant="body2" fontWeight={500}>
                購買轉換率 (CVR)
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <TextField
                  type="number"
                  value={cvr}
                  onChange={(e) => {
                    const val = Math.min(10, Math.max(0, Number(e.target.value) || 0))
                    setCvr(val)
                  }}
                  size="small"
                  inputProps={{
                    min: 0,
                    max: 10,
                    step: 0.1,
                    style: { textAlign: 'center', width: 50 },
                  }}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                />
                <Typography variant="body2" color="text.secondary">
                  %
                </Typography>
              </Box>
            </Box>

            <Box sx={{ px: 1, mt: 2 }}>
              <Slider
                value={cvr}
                onChange={(_, value) => setCvr(value as number)}
                min={0}
                max={10}
                step={0.1}
                valueLabelDisplay="auto"
                valueLabelFormat={(v) => `${v}%`}
              />
            </Box>

            {/* CVR Labels */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1, px: 1 }}>
              <Typography
                variant="caption"
                sx={{
                  color: cvr <= 1 ? '#EF4444' : 'text.secondary',
                  fontWeight: cvr <= 1 ? 600 : 400,
                }}
              >
                保守 (1%)
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: cvr > 1 && cvr <= 3 ? '#F59E0B' : 'text.secondary',
                  fontWeight: cvr > 1 && cvr <= 3 ? 600 : 400,
                }}
              >
                一般 (2-3%)
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: cvr > 3 ? '#10B981' : 'text.secondary',
                  fontWeight: cvr > 3 ? 600 : 400,
                }}
              >
                強力導購 (5%+)
              </Typography>
            </Box>
          </Box>

          {/* AOV and Collaboration Cost */}
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
                平均客單價 (AOV)
              </Typography>
              <TextField
                fullWidth
                type="number"
                value={aov}
                onChange={(e) => setAov(Number(e.target.value) || 0)}
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography variant="body2" color="text.secondary">$</Typography>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>

            <Box sx={{ flex: 1 }}>
              <Typography variant="body2" fontWeight={500} sx={{ mb: 1 }}>
                預估合作費用
              </Typography>
              <TextField
                fullWidth
                type="number"
                value={collaborationCost ?? ''}
                onChange={(e) => {
                  const val = e.target.value
                  setCollaborationCost(val ? Number(val) : null)
                }}
                placeholder="輸入費用"
                size="small"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Typography variant="body2" color="text.secondary">$</Typography>
                    </InputAdornment>
                  ),
                }}
              />
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  )
}

export default SalesIndicators
