import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AI Agent Quality Platform',
  description: 'Systematic agent evaluation and production readiness',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen">
          {/* Sidebar */}
          <aside className="w-64 bg-white border-r border-[#e8e6dc] flex flex-col">
            <div className="p-6 border-b border-[#e8e6dc]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#d97757] rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AI</span>
                </div>
                <div>
                  <h1 className="font-semibold text-sm">AI Agent Platform</h1>
                  <p className="text-xs text-[#6b6a63]">PwC Advisory AI</p>
                </div>
              </div>
            </div>

            <nav className="flex-1 p-4">
              <div className="space-y-6">
                {/* Overview */}
                <div>
                  <p className="text-xs font-semibold text-[#6b6a63] mb-2 px-3">OVERVIEW</p>
                  <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-[#d97757] text-white">
                    <span className="text-sm">Dashboard</span>
                  </Link>
                </div>

                {/* Lifecycle */}
                <div>
                  <p className="text-xs font-semibold text-[#6b6a63] mb-2 px-3">LIFECYCLE</p>
                  <div className="space-y-1">
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#6b6a63] hover:bg-[#faf9f5]">
                      <span className="text-sm">Intake & Prioritization</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#6b6a63] hover:bg-[#faf9f5]">
                      <span className="text-sm">Agent Registry</span>
                    </Link>
                  </div>
                </div>

                {/* Evaluation */}
                <div>
                  <p className="text-xs font-semibold text-[#6b6a63] mb-2 px-3">EVALUATION</p>
                  <div className="space-y-1">
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#6b6a63] hover:bg-[#faf9f5]">
                      <span className="text-sm">Golden Sets</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#6b6a63] hover:bg-[#faf9f5]">
                      <span className="text-sm">Experiments</span>
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#6b6a63] hover:bg-[#faf9f5]">
                      <span className="text-sm">Results</span>
                    </Link>
                    <Link href="/launch-readiness" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#6b6a63] hover:bg-[#faf9f5]">
                      <span className="text-sm">Launch Readiness</span>
                    </Link>
                  </div>
                </div>

                {/* Platform */}
                <div>
                  <p className="text-xs font-semibold text-[#6b6a63] mb-2 px-3">PLATFORM</p>
                  <Link href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-[#6b6a63] hover:bg-[#faf9f5]">
                    <span className="text-sm">Prompt Calibration</span>
                  </Link>
                </div>
              </div>
            </nav>

            <div className="p-4 border-t border-[#e8e6dc]">
              <p className="text-xs text-[#6b6a63]">v1.0.0</p>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}