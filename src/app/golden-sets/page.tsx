import Link from 'next/link'

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
        <button className="px-4 py-2 bg-[#d97757] text-white rounded-lg text-sm flex items-center gap-2">
          ✨ Import Eval Results
        </button>
        <button className="px-4 py-2 bg-white border border-[#e8e6dc] rounded-lg text-sm flex items-center gap-2">
          📤 Export TSV
        </button>
        <button className="px-4 py-2 bg-[#d97757] text-white rounded-lg text-sm flex items-center gap-2">
          + New Golden Set
        </button>
        <Link
          href="/eval-profiles"
          className="px-4 py-2 bg-white border border-[#e8e6dc] rounded-lg text-sm flex items-center gap-2 hover:bg-[#faf9f5]"
        >
          Manage Profiles →
        </Link>
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

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* By Test Type */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">By Test Type</h3>
            <div className="space-y-3">
              {[
                { label: 'Core Functional', value: 347, pct: 66 },
                { label: 'Retrieval Isolated', value: 80, pct: 15 },
                { label: 'Generation Isolated', value: 59, pct: 11 },
                { label: 'Boundary & Edge', value: 41, pct: 8 },
                { label: 'Adversarial & Safety', value: 20, pct: 4 },
                { label: 'Regression Anchor', value: 10, pct: 2 },
              ].map(({ label, value, pct }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">{label}</span>
                    <span className="text-xs font-semibold">{value} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#d97757] h-2 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* By Capability */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">By Capability</h3>
            <div className="space-y-3">
              {[
                { label: 'Retrieval', value: 304, pct: 58 },
                { label: 'Synthesis', value: 90, pct: 17 },
                { label: 'Reasoning', value: 77, pct: 15 },
                { label: 'Extraction', value: 29, pct: 6 },
                { label: 'Clarification', value: 28, pct: 5 },
              ].map(({ label, value, pct }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">{label}</span>
                    <span className="text-xs font-semibold">{value} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#c4a882] h-2 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* By Difficulty — fixed to realistic distribution */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">By Difficulty</h3>
            <div className="space-y-3">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs">Easy</span>
                  <span className="text-xs font-semibold">158 (30%)</span>
                </div>
                <div className="w-full bg-[#faf9f5] rounded-full h-2">
                  <div className="bg-[#8fba98] h-2 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs">Medium</span>
                  <span className="text-xs font-semibold">238 (45%)</span>
                </div>
                <div className="w-full bg-[#faf9f5] rounded-full h-2">
                  <div className="bg-[#d4a96a] h-2 rounded-full" style={{ width: '45%' }} />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs">Hard</span>
                  <span className="text-xs font-semibold">132 (25%)</span>
                </div>
                <div className="w-full bg-[#faf9f5] rounded-full h-2">
                  <div className="bg-[#c98888] h-2 rounded-full" style={{ width: '25%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* By Domain */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">By Domain</h3>
            <div className="space-y-3">
              {[
                { label: 'BRD', value: 201, pct: 38 },
                { label: 'FSD', value: 232, pct: 44 },
                { label: 'SOW', value: 77, pct: 15 },
                { label: 'Governance', value: 64, pct: 12 },
                { label: 'Test Artifacts', value: 47, pct: 9 },
                { label: 'Meeting/Comma', value: 20, pct: 4 },
              ].map(({ label, value, pct }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">{label}</span>
                    <span className="text-xs font-semibold">{value} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#8fba98] h-2 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* By Scenario Type — new panel */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">By Scenario Type</h3>
            <div className="space-y-3">
              {[
                { label: 'Multi-doc Synthesis', pct: 20 },
                { label: 'Factual Lookup', pct: 18 },
                { label: 'Contradiction', pct: 14 },
                { label: 'Version Conflict', pct: 12 },
                { label: 'Extraction', pct: 11 },
                { label: 'Authority', pct: 10 },
                { label: 'Clarification', pct: 8 },
                { label: 'Boundary/Edge', pct: 7 },
              ].map(({ label, pct }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">{label}</span>
                    <span className="text-xs font-semibold">{pct}%</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className="bg-[#c8a84c] h-2 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* By Verification Status — new panel */}
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">By Verification Status</h3>
            <div className="space-y-3">
              {[
                { label: 'Unverified', pct: 42, color: 'bg-[#b5b0a8]' },
                { label: 'Verified', pct: 38, color: 'bg-[#8fba98]' },
                { label: 'Corrected', pct: 14, color: 'bg-[#d4a96a]' },
                { label: 'Disputed', pct: 6, color: 'bg-[#c98888]' },
              ].map(({ label, pct, color }) => (
                <div key={label}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs">{label}</span>
                    <span className="text-xs font-semibold">{pct}%</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-2">
                    <div className={`${color} h-2 rounded-full`} style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-right mt-2">
          <p className="text-sm font-semibold">528 cases</p>
        </div>
      </div>

      {/* Golden Set Cards */}
      <div className="space-y-4">
        {/* HelloWorks 250 */}
        <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-lg">HelloWorks</h3>
                <span className="px-2.5 py-0.5 bg-[#faeade] text-[#d97757] rounded-full text-xs font-medium">
                  Search/Retrieval
                </span>
              </div>
              <p className="text-sm text-[#6b6a63]">250 test cases</p>
              <p className="text-xs text-[#6b6a63] mt-1">
                Imported from HelloWorks_Golden_Set_250_Cases.tsv (250 cases)
              </p>
              <p className="text-xs text-[#6b6a63] mt-1">
                Sources: <span className="font-medium">184 must-cite / 66 acceptable</span>
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">👁️</button>
              <button className="p-2 hover:bg-gray-100 rounded">✏️</button>
              <button className="p-2 hover:bg-gray-100 rounded">🗑️</button>
            </div>
          </div>

          <div className="flex gap-4 text-sm flex-wrap">
            <div className="px-3 py-1 bg-gray-100 rounded">Core Functional: 190</div>
            <div className="px-3 py-1 bg-gray-100 rounded">Retrieval Isolated: 30</div>
            <div className="px-3 py-1 bg-gray-100 rounded">Boundary & Edge: 20</div>
            <div className="px-3 py-1 bg-gray-100 rounded">Adversarial & Safety: 10</div>
            <div className="px-3 py-1 bg-gray-100 rounded">Regression Anchor: 5</div>
          </div>

          <div className="mt-4 text-sm text-[#6b6a63]">
            🏷️ PwC Intelligence Hub
          </div>
        </div>

        {/* FDA 250 */}
        <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-lg">FDA</h3>
                <span className="px-2.5 py-0.5 bg-[#faeade] text-[#d97757] rounded-full text-xs font-medium">
                  Search/Retrieval
                </span>
              </div>
              <p className="text-sm text-[#6b6a63]">250 test cases</p>
              <p className="text-xs text-[#6b6a63] mt-1">
                Imported from FDA_Golden_Set_250_Cases 10.28.02 PM.tsv (250 cases)
              </p>
              <p className="text-xs text-[#6b6a63] mt-1">
                Sources: <span className="font-medium">198 must-cite / 52 acceptable</span>
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

        {/* HelloWorks 28 */}
        <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-1">
                <h3 className="font-semibold text-lg">HelloWorks</h3>
                <span className="px-2.5 py-0.5 bg-[#faeade] text-[#d97757] rounded-full text-xs font-medium">
                  Search/Retrieval
                </span>
              </div>
              <p className="text-sm text-[#6b6a63]">28 test cases</p>
              <p className="text-xs text-[#6b6a63] mt-1">
                Imported from Intelligence_Hub_Eval_Results_Set_2_normalized.tsv (28 cases)
              </p>
              <p className="text-xs text-[#6b6a63] mt-1">
                Sources: <span className="font-medium">22 must-cite / 6 acceptable</span>
              </p>
            </div>
            <div className="flex gap-2">
              <button className="p-2 hover:bg-gray-100 rounded">👁️</button>
              <button className="p-2 hover:bg-gray-100 rounded">✏️</button>
              <button className="p-2 hover:bg-gray-100 rounded">🗑️</button>
            </div>
          </div>

          <div className="flex gap-4 text-sm flex-wrap">
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
