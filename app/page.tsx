'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      ease: [0.22, 1, 0.36, 1],
    },
  },
}

const pulseVariants = {
  initial: { scale: 1, opacity: 1 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-black vercel-grid flex items-center justify-center p-4 relative overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-black pointer-events-none" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo section */}
        <motion.div variants={itemVariants} className="flex justify-center mb-12">
          <motion.div
            className="relative"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-[#333] relative">
              <Image
                src="https://img.cdn1.vip/i/69fe76040e242_1778284036.jpg"
                alt="OpenRealm"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Subtle glow ring */}
            <motion.div
              className="absolute inset-0 rounded-full border border-white/20"
              variants={pulseVariants}
              initial="initial"
              animate="animate"
            />
          </motion.div>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-center mb-6 tracking-tight"
        >
          <span className="block text-white">您正在访问</span>
          <span className="block bg-gradient-to-br from-white via-white to-gray-500 bg-clip-text text-transparent">
            OpenRealm边缘节点
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-[#888] text-lg sm:text-xl md:text-2xl text-center mb-8 font-light"
        >
          网络测试页面
        </motion.p>

        {/* Status badge */}
        <motion.div variants={itemVariants} className="flex justify-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111] border border-[#333] vercel-glow"
            whileHover={{ scale: 1.02, borderColor: '#444' }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            <span className="text-sm text-white font-medium">网络正常</span>
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
          </motion.div>
        </motion.div>

        {/* Info card */}
        <motion.div
          variants={itemVariants}
          className="max-w-2xl mx-auto mb-12"
        >
          <motion.div
            className="bg-[#111] border border-[#333] rounded-2xl p-8 vercel-glow"
            whileHover={{ borderColor: '#444' }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <svg
                  className="w-6 h-6 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg mb-2">
                  连接成功
                </h3>
                <p className="text-[#888] text-sm leading-relaxed">
                  出现此页面则网络正常。您已成功连接到 OpenRealm 边缘节点，所有服务运行正常。
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto mb-16"
        >
          {[
            { label: '连接成功率', value: '100%', color: 'text-green-500' },
            { label: '响应延迟', value: '<50ms', color: 'text-blue-500' },
            { label: '在线服务', value: '24/7', color: 'text-purple-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              className="bg-[#111] border border-[#333] rounded-xl p-6 vercel-glow"
              whileHover={{
                scale: 1.02,
                borderColor: '#444',
                transition: { duration: 0.2 }
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5 + index * 0.1,
                duration: 0.5,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              <div className={`text-3xl font-bold ${stat.color} mb-2 font-mono`}>
                {stat.value}
              </div>
              <div className="text-[#666] text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 text-[#666] text-sm">
            <span>Powered by</span>
            <span className="text-white font-semibold">OpenRealm</span>
            <span className="text-[#333]">•</span>
            <span>Edge Network</span>
          </div>
        </motion.div>
      </motion.div>
    </main>
  )
}
