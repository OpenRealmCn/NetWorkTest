'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import ParticleBackground from './components/ParticleBackground'

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-4 sm:p-6 md:p-8 relative overflow-hidden">
      {/* Particle background */}
      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* Logo */}
        <motion.div
          className="flex justify-center mb-10 sm:mb-12"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border border-white/10 relative">
            <Image
              src="https://img.cdn1.vip/i/69fe76040e242_1778284036.jpg"
              alt="OpenRealm"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* Main content card */}
        <motion.div
          className="glass rounded-3xl p-8 sm:p-10 md:p-12 mb-8"
          variants={slideUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.1 }}
        >
          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-white text-center mb-4 tracking-tight leading-tight">
            您正在访问OpenRealm边缘节点
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center mb-8 sm:mb-10">
            网络测试页面
          </p>

          {/* Status indicator */}
          <div className="flex justify-center mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 glass-card rounded-full">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm sm:text-base text-white">网络正常</span>
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>

          {/* Description */}
          <div className="max-w-2xl mx-auto mb-10 sm:mb-12">
            <p className="text-gray-300 text-center leading-relaxed">
              出现此页面则网络正常。您已成功连接到 OpenRealm 边缘节点，所有服务运行正常。
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {[
              { label: '连接成功率', value: '100%' },
              { label: '响应延迟', value: '<50ms' },
              { label: '在线服务', value: '24/7' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="glass-card rounded-2xl p-6 text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <div className="text-2xl sm:text-3xl font-semibold text-white mb-2 font-mono">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div
          className="text-center"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-gray-500">
            Powered by <span className="text-white font-medium">OpenRealm</span> Edge Network
          </p>
        </motion.div>
      </div>
    </main>
  )
}
