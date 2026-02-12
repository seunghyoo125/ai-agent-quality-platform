export default function GoldenSets() {
    return (
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Golden Sets</h1>
          <p className="text-sm text-[#6b6a63]">Manage test cases for agent evaluations</p>
        </div>
  
        {/* Action Buttons */}
        <div className="mb-6 flex gap-3">
          <button className="px-4 py-2 bg-white border border-[#e8e6dc] rounded-lg text-sm flex items-center gap-2">
            📋 Instructions
          </button>
          <button className="px-4 py-2 bg-white border border-[#e8e6dc] rounded-lg text-sm flex items-center gap-2">
            📥 Import TSV
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg text-sm flex items-center gap-2">
            ✨ Import Eval Results
          </button>
          <button className="px-4 py-2 bg-white border border-[#e8e6dc] rounded-lg text-sm flex items-center gap-2">
            📤 Export TSV
          </button>
          <button className="px-4 py-2 bg-[#d97757] text-white rounded-lg text-sm flex items-center gap-2">
            + New Golden Set
          </button>
        </div>
  
        {/* Filter */}
        <div className="mb-6 flex gap-3">
          <button className="px-4 py-2 bg-[#d97757] text-white rounded-lg text-sm font-medium">
            All Agents
          </button>
          <button className="px-4 py-2 bg-white border border-[#e8e6dc] rounded-lg text-sm">
            PwC Intelligence Hub
          </button>
        </div>
  
        {/* Coverage Dashboard */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold mb-4">Coverage Dashboard</h2>
          
          <div className="grid grid-cols-4 gap-6">
            {/* By Test Type */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <h3 className="text-sm font-semibold mb-4">By Test Type</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Core Functional</span>
                    <span className="text-xs font-semibold">347 (66%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '66%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Retrieval Isolated</span>
                    <span className="text-xs font-semibold">80 (15%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Generation Isolated</span>
                    <span className="text-xs font-semibold">59 (11%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '11%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Boundary & Edge</span>
                    <span className="text-xs font-semibold">41 (8%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '8%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Adversarial & Safety</span>
                    <span className="text-xs font-semibold">20 (4%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '4%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Regression Anchor</span>
                    <span className="text-xs font-semibold">10 (2%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{width: '2%'}}></div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* By Capability */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <h3 className="text-sm font-semibold mb-4">By Capability</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Retrieval</span>
                    <span className="text-xs font-semibold">304 (58%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '58%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Synthesis</span>
                    <span className="text-xs font-semibold">90 (17%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '17%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Reasoning</span>
                    <span className="text-xs font-semibold">77 (15%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Extraction</span>
                    <span className="text-xs font-semibold">29 (6%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '6%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Clarification</span>
                    <span className="text-xs font-semibold">28 (5%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '5%'}}></div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* By Difficulty */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <h3 className="text-sm font-semibold mb-4">By Difficulty</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Easy</span>
                    <span className="text-xs font-semibold">0 (0%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-emerald-500 h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Medium</span>
                    <span className="text-xs font-semibold">0 (0%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '0%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Hard</span>
                    <span className="text-xs font-semibold">528 (100%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-red-500 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* By Domain */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <h3 className="text-sm font-semibold mb-4">By Domain</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">BRD</span>
                    <span className="text-xs font-semibold">201 (38%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#d97757] h-2 rounded-full" style={{width: '38%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">FSD</span>
                    <span className="text-xs font-semibold">232 (44%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#d97757] h-2 rounded-full" style={{width: '44%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">SOW</span>
                    <span className="text-xs font-semibold">77 (15%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#d97757] h-2 rounded-full" style={{width: '15%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Governance</span>
                    <span className="text-xs font-semibold">64 (12%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#d97757] h-2 rounded-full" style={{width: '12%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Test Artifacts</span>
                    <span className="text-xs font-semibold">47 (9%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#d97757] h-2 rounded-full" style={{width: '9%'}}></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">Meeting/Comma</span>
                    <span className="text-xs font-semibold">20 (4%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#d97757] h-2 rounded-full" style={{width: '4%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
  
          <div className="text-right mt-4">
            <p className="text-sm font-semibold">528 cases</p>
          </div>
        </div>
  
        {/* Golden Set Cards */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">HelloWorks</h3>
                <p className="text-sm text-[#6b6a63]">250 test cases</p>
                <p className="text-xs text-[#6b6a63] mt-1">
                  Imported from HelloWorks_Golden_Set_250_Cases.tsv (250 cases)
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded">👁️</button>
                <button className="p-2 hover:bg-gray-100 rounded">✏️</button>
                <button className="p-2 hover:bg-gray-100 rounded">🗑️</button>
              </div>
            </div>
            
            <div className="flex gap-4 text-sm">
              <div className="px-3 py-1 bg-gray-100 rounded">Core Functional: 190</div>
              <div className="px-3 py-1 bg-gray-100 rounded">Retrieval Isolated: 30</div>
              <div className="px-3 py-1 bg-gray-100 rounded">Boundary & Edge: 20</div>
              <div className="px-3 py-1 bg-gray-100 rounded">Adversarial & Safety: 10</div>
            </div>
  
            <div className="mt-3 flex gap-4 text-sm">
              <div className="px-3 py-1 bg-gray-100 rounded">Regression Anchor: 5</div>
            </div>
  
            <div className="mt-4 text-sm text-[#6b6a63]">
              🏷️ PwC Intelligence Hub
            </div>
          </div>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">FDA</h3>
                <p className="text-sm text-[#6b6a63]">250 test cases</p>
                <p className="text-xs text-[#6b6a63] mt-1">
                  Imported from FDA_Golden_Set_250_Cases 10.28.02 PM.tsv (250 cases)
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded">👁️</button>
                <button className="p-2 hover:bg-gray-100 rounded">✏️</button>
                <button className="p-2 hover:bg-gray-100 rounded">🗑️</button>
              </div>
            </div>
            
            <div className="flex gap-4 text-sm flex-wrap">
              <div className="px-3 py-1 bg-gray-100 rounded">Core Functional: 130</div>
              <div className="px-3 py-1 bg-gray-100 rounded">Retrieval Isolated: 50</div>
              <div className="px-3 py-1 bg-gray-100 rounded">Boundary & Edge: 20</div>
              <div className="px-3 py-1 bg-gray-100 rounded">Adversarial & Safety: 10</div>
            </div>
  
            <div className="mt-4 text-sm text-[#6b6a63]">
              🏷️ PwC Intelligence Hub
            </div>
          </div>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center justify-between mb-4">
              <div className="flex-1">
                <h3 className="font-semibold text-lg mb-1">HelloWorks</h3>
                <p className="text-sm text-[#6b6a63]">28 test cases</p>
                <p className="text-xs text-[#6b6a63] mt-1">
                  Imported from Intelligence_Hub_Eval_Results_Set_2_normalized.tsv (28 cases)
                </p>
              </div>
              <div className="flex gap-2">
                <button className="p-2 hover:bg-gray-100 rounded">👁️</button>
                <button className="p-2 hover:bg-gray-100 rounded">✏️</button>
                <button className="p-2 hover:bg-gray-100 rounded">🗑️</button>
              </div>
            </div>
            
            <div className="flex gap-4 text-sm">
              <div className="px-3 py-1 bg-gray-100 rounded">Core Functional: 27</div>
              <div className="px-3 py-1 bg-gray-100 rounded">Boundary & Edge: 1</div>
            </div>
  
            <div className="mt-4 text-sm text-[#6b6a63]">
              🏷️ PwC Intelligence Hub
            </div>
          </div>
        </div>
      </div>
    )
  }