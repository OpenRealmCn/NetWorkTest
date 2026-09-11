import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'OpenRealm Network Test',
  description: 'OpenRealm边缘节点网络测试页面',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  )
}
