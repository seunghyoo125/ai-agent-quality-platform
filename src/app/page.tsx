export default function Dashboard() {
    return (
      <div className="p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">AI Agent Quality Platform</h1>
        </div>
  
        {/* Agents - Where's the Work? */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">AGENTS — WHERE'S THE WORK?</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Live</span>
                <button className="text-sm text-[#d97757]">View</button>
              </div>
              <div className="text-4xl font-bold mb-2">0</div>
              <div className="text-sm text-[#6b6a63]">None yet</div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">In Testing</span>
              </div>
              <div className="text-4xl font-bold mb-2">1</div>
              <div className="text-sm text-[#141413]">PwC Intelligence Hub</div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">In Build</span>
              </div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-sm text-[#141413]">User Story Generator, Fit-Gap Analyzer</div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Backlog</span>
              </div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-sm text-[#141413]">KDD Builder, RAICEF Listing Generator v3</div>
            </div>
          </div>
        </section>
  
        {/* Quality - How Are We Doing? */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">QUALITY — HOW ARE WE DOING?</h2>
          <div className="grid grid-cols-4 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Pass Rate</span>
                <button className="text-sm text-[#d97757]">Details</button>
              </div>
              <div className="text-4xl font-bold text-[#d97757] mb-4">54%</div>
              <div className="w-full bg-[#faf9f5] rounded-full h-2">
                <div className="bg-[#d97757] h-2 rounded-full" style={{width: '54%'}}></div>
              </div>
              <div className="text-xs text-[#6b6a63] mt-2">10/28 cases</div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Evaluations</span>
                <button className="text-sm text-[#d97757]">Run</button>
              </div>
              <div className="text-4xl font-bold mb-2">2</div>
              <div className="text-sm text-[#6b6a63]">completed</div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Golden Sets</span>
                <button className="text-sm text-[#d97757]">View</button>
              </div>
              <div className="text-4xl font-bold mb-2">3</div>
              <div className="text-sm text-[#6b6a63]">528 test cases</div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Feedback</span>
                <button className="text-sm text-[#d97757]">View</button>
              </div>
              <div className="text-4xl font-bold mb-2">5</div>
              <div className="text-sm text-[#6b6a63]">⭐ 1 ⚡ 1 🔥 3</div>
            </div>
          </div>
        </section>
  
        {/* Agent Performance */}
        <section className="mb-8">
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-semibold">Agent Performance</h3>
              <button className="text-sm text-[#d97757]">Full Report →</button>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm">PwC Intelligence Hub</span>
                  <span className="text-sm font-semibold">54%</span>
                </div>
                <div className="w-full bg-[#faf9f5] rounded-full h-2">
                  <div className="bg-[#d97757] h-2 rounded-full" style={{width: '54%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-[#6b6a63]">Unknown Agent</span>
                  <span className="text-sm text-[#6b6a63]">0%</span>
                </div>
                <div className="w-full bg-[#faf9f5] rounded-full h-2">
                  <div className="bg-gray-300 h-2 rounded-full" style={{width: '0%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* System - Is the Platform Ready? */}
        <section className="mb-8">
          <h2 className="text-lg font-semibold mb-4">SYSTEM — IS THE PLATFORM READY?</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Intake Pending</span>
                <button className="text-sm text-[#d97757]">View</button>
              </div>
              <div className="flex items-center gap-2 text-sm text-emerald-600 mb-2">
                <span>✓</span>
                <span>All reviewed</span>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Prompts</span>
                <button className="text-sm text-[#d97757]">Manage</button>
              </div>
              <div className="text-2xl font-bold mb-2">2</div>
              <div className="text-sm text-[#6b6a63]">active prompts</div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Calibration</span>
                <button className="text-sm text-[#d97757]">Run</button>
              </div>
              <div className="text-2xl font-bold mb-2">1/2</div>
              <div className="text-sm text-[#6b6a63]">prompts calibrated</div>
            </div>
          </div>
        </section>
  
        {/* Activity */}
        <section>
          <h2 className="text-lg font-semibold mb-4">ACTIVITY — WHAT'S HAPPENING?</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Latest Evaluation</span>
                <button className="text-sm text-[#d97757]">View</button>
              </div>
              <div className="mb-3">
                <div className="text-sm mb-1">Calibration 2/11/2026</div>
                <div className="text-3xl font-bold text-red-500">40%</div>
              </div>
              <div className="text-xs text-[#6b6a63]">2026-02-12T04:09:04.3542</div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Recent Activity</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>• Evaluation completed<br/><span className="text-[#6b6a63]">Agent — 40%</span></div>
                <div>• Evaluation completed<br/><span className="text-[#6b6a63]">PwC Intelligence Hub — 54%</span></div>
              </div>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#6b6a63]">Needs Attention</span>
              </div>
              <div className="space-y-2 text-sm">
                <div>⚠ PwC Intelligence Hub at 54% pass rate<br/><span className="text-[#6b6a63] text-xs">Needs review</span></div>
                <div>⚠ Judge not calibrated<br/><span className="text-[#6b6a63] text-xs">Agents — Run Tests</span></div>
                <div>⚠ 2 agents need migration testing<br/><span className="text-[#6b6a63] text-xs">Run Tests</span></div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }