'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <main className="min-h-screen gradient-bg grid-pattern flex items-center justify-center p-4 sm:p-6 md:p-8 overflow-hidden">
      {/* Floating orbs background effect */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-green-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Main content card */}
      <div className={`relative z-10 w-full max-w-2xl transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="backdrop-blur-xl bg-white/5 rounded-2xl sm:rounded-3xl border border-white/10 shadow-2xl overflow-hidden">
          {/* Top gradient line */}
          <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent"></div>

          <div className="p-6 sm:p-8 md:p-12">
            {/* Logo section with animation */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 animate-float">
                <div className="absolute inset-0 bg-green-500/20 rounded-full blur-xl animate-pulse-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-green-500/30 animate-glow">
                  <Image
                    src="https://img.cdn1.vip/i/69fe76040e242_1778284036.jpg"
                    alt="OpenRealm Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Status indicator */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-green-500/10 border border-green-500/30 animate-fade-in">
                <div className="relative flex h-3 w-3 sm:h-4 sm:w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-green-500"></span>
                </div>
                <span className="text-green-400 font-medium text-sm sm:text-base">网络正常</span>
              </div>
            </div>

            {/* Main heading */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent animate-slide-up leading-tight">
              您正在访问OpenRealm边缘节点
            </h1>

            {/* Subtitle */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-center text-gray-400 mb-4 sm:mb-6 animate-slide-up font-light" style={{ animationDelay: '0.1s' }}>
              网络测试页面
            </h2>

            {/* Description with icon */}
            <div className="flex justify-center items-center gap-2 sm:gap-3 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <svg className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-center text-gray-300 text-base sm:text-lg md:text-xl">
                出现此页面则网络正常
              </p>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mt-8 sm:mt-10 md:mt-12 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-green-400 mb-1">100%</div>
                <div className="text-xs sm:text-sm text-gray-400">连接成功率</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-400 mb-1">&lt;50ms</div>
                <div className="text-xs sm:text-sm text-gray-400">响应延迟</div>
              </div>
              <div className="text-center p-3 sm:p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105 col-span-2 sm:col-span-1">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-400 mb-1">24/7</div>
                <div className="text-xs sm:text-sm text-gray-400">在线服务</div>
              </div>
            </div>

            {/* Footer info */}
            <div className="mt-8 sm:mt-10 pt-6 sm:pt-8 border-t border-white/10 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <p className="text-center text-gray-500 text-xs sm:text-sm">
                Powered by <span className="text-white font-semibold">OpenRealm</span> Edge Network
              </p>
            </div>
          </div>
        </div>

        {/* Decorative corner accents */}
        <div className="absolute -top-4 -left-4 w-16 h-16 sm:w-20 sm:h-20 border-t-2 border-l-2 border-green-500/30 rounded-tl-3xl animate-fade-in"></div>
        <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 border-b-2 border-r-2 border-blue-500/30 rounded-br-3xl animate-fade-in"></div>
      </div>
    </main>
  )
}
