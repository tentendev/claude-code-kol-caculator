import { useState, useMemo } from 'react'
import { Box, Container, Grid } from '@mui/material'
import { motion } from 'framer-motion'
import Header from './components/Header'
import KOLIndicators from './components/KOLIndicators'
import SalesIndicators from './components/SalesIndicators'
import RevenueCard from './components/RevenueCard'
import PageViewsCard from './components/PageViewsCard'
import ConversionFunnel from './components/ConversionFunnel'
import AIAdvisor from './components/AIAdvisor'

export type Platform = 'fb_post' | 'fb_video' | 'ig_post' | 'ig_reels' | 'youtube'

interface PlatformConfig {
  reachRate: number
  engagementRate: number
  pageViewMultiplier: number
}

const platformConfigs: Record<Platform, PlatformConfig> = {
  fb_post: { reachRate: 0.10, engagementRate: 0.02, pageViewMultiplier: 2 },
  fb_video: { reachRate: 0.15, engagementRate: 0.03, pageViewMultiplier: 2.5 },
  ig_post: { reachRate: 0.12, engagementRate: 0.025, pageViewMultiplier: 1.8 },
  ig_reels: { reachRate: 0.20, engagementRate: 0.04, pageViewMultiplier: 2.2 },
  youtube: { reachRate: 0.08, engagementRate: 0.015, pageViewMultiplier: 3 },
}

function App() {

  // State for KOL indicators
  const [platform, setPlatform] = useState<Platform>('fb_post')
  const [followers, setFollowers] = useState<number>(680000)
  const [customReach, setCustomReach] = useState<number | null>(null)
  const [customEngagement, setCustomEngagement] = useState<number | null>(null)
  const [customPageViews, setCustomPageViews] = useState<number | null>(null)

  // State for sales indicators
  const [cvr, setCvr] = useState<number>(2)
  const [aov, setAov] = useState<number>(3000)
  const [collaborationCost, setCollaborationCost] = useState<number | null>(null)

  // Calculate metrics based on formulas
  const metrics = useMemo(() => {
    const config = platformConfigs[platform]

    // Calculate reach (10% for 100k+ followers)
    const calculatedReach = followers >= 100000
      ? Math.round(followers * config.reachRate)
      : Math.round(followers * config.reachRate * 1.5)
    const reach = customReach ?? calculatedReach

    // Calculate engagement (reach * engagement rate)
    const calculatedEngagement = Math.round(reach * config.engagementRate)
    const engagement = customEngagement ?? calculatedEngagement

    // Calculate page views (engagement * multiplier)
    const calculatedPageViews = Math.round(engagement * config.pageViewMultiplier)
    const pageViews = customPageViews ?? calculatedPageViews

    // Calculate orders and revenue
    const orders = pageViews * (cvr / 100)
    const revenue = orders * aov

    // Calculate ROI and CPA
    const roi = collaborationCost && collaborationCost > 0
      ? ((revenue - collaborationCost) / collaborationCost) * 100
      : null
    const cpa = collaborationCost && orders > 0
      ? collaborationCost / orders
      : null

    return {
      reach,
      calculatedReach,
      engagement,
      calculatedEngagement,
      pageViews,
      calculatedPageViews,
      orders,
      revenue,
      roi,
      cpa,
    }
  }, [platform, followers, customReach, customEngagement, customPageViews, cvr, aov, collaborationCost])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    },
  }

  return (
    <Box sx={{ minHeight: '100vh', pb: 6 }}>
      <Header />

      <Container maxWidth="xl" sx={{ mt: 3 }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <Grid container spacing={3}>
            {/* Left Column - Input Panels */}
            <Grid item xs={12} md={5} lg={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                <motion.div variants={itemVariants}>
                  <KOLIndicators
                    platform={platform}
                    setPlatform={setPlatform}
                    followers={followers}
                    setFollowers={setFollowers}
                    customReach={customReach}
                    setCustomReach={setCustomReach}
                    customEngagement={customEngagement}
                    setCustomEngagement={setCustomEngagement}
                    customPageViews={customPageViews}
                    setCustomPageViews={setCustomPageViews}
                    calculatedReach={metrics.calculatedReach}
                    calculatedEngagement={metrics.calculatedEngagement}
                    calculatedPageViews={metrics.calculatedPageViews}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <SalesIndicators
                    cvr={cvr}
                    setCvr={setCvr}
                    aov={aov}
                    setAov={setAov}
                    collaborationCost={collaborationCost}
                    setCollaborationCost={setCollaborationCost}
                  />
                </motion.div>
              </Box>
            </Grid>

            {/* Right Column - Results */}
            <Grid item xs={12} md={7} lg={8}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Revenue and Page Views Cards */}
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} lg={7}>
                    <motion.div variants={itemVariants}>
                      <RevenueCard
                        revenue={metrics.revenue}
                        orders={metrics.orders}
                      />
                    </motion.div>
                  </Grid>
                  <Grid item xs={12} sm={6} lg={5}>
                    <motion.div variants={itemVariants}>
                      <PageViewsCard
                        pageViews={metrics.pageViews}
                        roi={metrics.roi}
                        cpa={metrics.cpa}
                      />
                    </motion.div>
                  </Grid>
                </Grid>

                {/* Conversion Funnel */}
                <motion.div variants={itemVariants}>
                  <ConversionFunnel
                    reach={metrics.reach}
                    engagement={metrics.engagement}
                    pageViews={metrics.pageViews}
                    orders={metrics.orders}
                  />
                </motion.div>

                {/* AI Advisor */}
                <motion.div variants={itemVariants}>
                  <AIAdvisor
                    metrics={metrics}
                    platform={platform}
                    followers={followers}
                    cvr={cvr}
                    aov={aov}
                    collaborationCost={collaborationCost}
                  />
                </motion.div>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}

export default App
