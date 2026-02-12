export default function Results() {
    return (
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Results Dashboard</h1>
          <p className="text-sm text-[#6b6a63]">Aggregate results and performance trends</p>
        </div>
  
        {/* Filter Tabs */}
        <div className="mb-6 flex gap-4">
          <button className="px-4 py-2 bg-[#d97757] text-white rounded-lg text-sm font-medium">
            Golden Set Evals
          </button>
          <button className="px-4 py-2 bg-white border border-[#e8e6dc] rounded-lg text-sm">
            A/B Experiments
          </button>
        </div>
  
        <div className="mb-6">
          <label className="text-sm text-[#6b6a63] mr-3">Filters:</label>
          <select className="px-3 py-2 border border-[#e8e6dc] rounded-lg text-sm">
            <option>PwC Intelligence Hub</option>
          </select>
        </div>
  
        {/* Summary Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="text-sm text-[#6b6a63] mb-2">Latest Run - Pass Rate</div>
            <div className="text-4xl font-bold text-[#d97757] mb-2">54%</div>
            <div className="text-xs text-[#6b6a63]">15 passed, 13 failed of 28 cases</div>
          </div>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="text-sm text-[#6b6a63] mb-2">Overall - Pass Rate</div>
            <div className="text-4xl font-bold mb-2">54%</div>
            <div className="text-xs text-[#6b6a63]">1 run - 28 cases evaluated</div>
          </div>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="text-sm text-[#6b6a63] mb-2">Trend - Last 1 runs</div>
            <div className="text-sm text-[#6b6a63]">Trend begins after 2 runs</div>
          </div>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="text-sm text-[#6b6a63] mb-2">Latest Run - Failure Drivers</div>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Answer Correctness</span>
                <span className="font-semibold">10/13 (77%)</span>
              </div>
              <div className="flex justify-between">
                <span>Response Quality</span>
                <span className="font-semibold">11/13 (85%)</span>
              </div>
              <div className="flex justify-between">
                <span>Source</span>
                <span className="font-semibold">8/13 (62%)</span>
              </div>
            </div>
          </div>
        </div>
  
        {/* Top Failure Drivers */}
        <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] mb-8">
          <h3 className="text-base font-semibold mb-4">Top Failure Drivers - Latest Run</h3>
          <p className="text-sm text-[#6b6a63] mb-4">13 failed of 28 cases evaluated - drivers may overlap</p>
          
          <div className="space-y-3">
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Answer Correctness</span>
                <span className="text-sm font-semibold">10/13 (77%)</span>
              </div>
              <div className="w-full bg-[#faf9f5] rounded-full h-2">
                <div className="bg-[#d97757] h-2 rounded-full" style={{width: '77%'}}></div>
              </div>
            </div>
  
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Response Quality</span>
                <span className="text-sm font-semibold">11/13 (85%)</span>
              </div>
              <div className="w-full bg-[#faf9f5] rounded-full h-2">
                <div className="bg-[#d97757] h-2 rounded-full" style={{width: '85%'}}></div>
              </div>
            </div>
  
            <div>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm">Source Citation</span>
                <span className="text-sm font-semibold">8/13 (62%)</span>
              </div>
              <div className="w-full bg-[#faf9f5] rounded-full h-2">
                <div className="bg-[#d97757] h-2 rounded-full" style={{width: '62%'}}></div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Issue Tag Breakdown */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Issue Tag Breakdown</h2>
          <p className="text-sm text-[#6b6a63] mb-4">Across 56 evaluated cases</p>
  
          <div className="grid grid-cols-3 gap-8">
            {/* Answer Issues */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <h3 className="text-sm font-semibold mb-4">Answer Issues</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">missing-info</span>
                    <span className="text-xs">23 (41%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{width: '41%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">over-interpretation</span>
                    <span className="text-xs">3 (5%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">factually-incorrect</span>
                    <span className="text-xs">3 (5%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Source Issues */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <h3 className="text-sm font-semibold mb-4">Source Issues</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">missed-docs</span>
                    <span className="text-xs">27 (48%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{width: '48%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">wrong-docs</span>
                    <span className="text-xs">4 (7%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{width: '7%'}}></div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Response Issues */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <h3 className="text-sm font-semibold mb-4">Response Issues</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">didnt-answer</span>
                    <span className="text-xs">15 (27%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{width: '27%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">too-verbose</span>
                    <span className="text-xs">6 (11%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{width: '11%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Performance by Difficulty */}
        <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] mb-8">
          <h3 className="text-base font-semibold mb-4">Performance by Difficulty</h3>
          <p className="text-sm text-[#6b6a63] mb-6">Expected pattern: Easy &gt; Medium &gt; Hard</p>
  
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">Hard</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold">48%</span>
                  <span className="text-xs text-[#6b6a63]">27/56 passed</span>
                </div>
              </div>
              <div className="w-full bg-[#faf9f5] rounded-full h-3">
                <div className="bg-[#d97757] h-3 rounded-full" style={{width: '48%'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }