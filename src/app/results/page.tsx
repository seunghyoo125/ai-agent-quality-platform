import Link from 'next/link'

const runHistory = [
  { label: 'Run 1', date: '2/6/2026', passRate: 41, passed: 9, total: 22 },
  { label: 'Run 2', date: '2/10/2026', passRate: 46, passed: 11, total: 24 },
  { label: 'Run 3', date: '2/11/2026', passRate: 54, passed: 15, total: 28 },
]

const testerInsights = [
  {
    note: 'Retrieval is pulling outdated document versions in 40% of source-cited failures',
    severity: 'High',
    severityColor: 'bg-[#fde8e8] text-[#c98888]',
    team: 'Retrieval',
  },
  {
    note: 'Agent is verbose on synthesis queries even when it gets the answer right',
    severity: 'Medium',
    severityColor: 'bg-[#faeade] text-[#d97757]',
    team: 'Prompt',
  },
  {
    note: 'Missing-info tag concentrates on multi-doc synthesis scenario types',
    severity: 'Medium',
    severityColor: 'bg-[#faeade] text-[#d97757]',
    team: 'Dev',
  },
  {
    note: 'Expected answers in 3 cases may be incorrect — flagged for golden set correction',
    severity: 'Low',
    severityColor: 'bg-[#e8eef5] text-[#7a95b0]',
    team: 'Data',
  },
]

export default function Results() {
  const maxRate = Math.max(...runHistory.map((r) => r.passRate))

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <div className="flex items-center gap-3 mb-1">
            <h1 className="text-2xl font-semibold">Results Dashboard</h1>
            <Link
              href="/eval-profiles"
              className="px-2.5 py-0.5 bg-[#faeade] text-[#d97757] rounded-full text-xs font-medium hover:bg-[#f5dcd0]"
            >
              Eval Profile: Search/Retrieval
            </Link>
          </div>
          <p className="text-sm text-[#6b6a63]">Aggregate results and performance trends</p>
        </div>
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
          <div className="text-sm text-[#6b6a63] mb-2">Latest Run — Pass Rate</div>
          <div className="text-4xl font-bold text-[#d97757] mb-2">54%</div>
          <div className="text-xs text-[#6b6a63]">15 passed, 13 failed of 28 cases</div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
          <div className="text-sm text-[#6b6a63] mb-2">Overall — Pass Rate</div>
          <div className="text-4xl font-bold mb-2">54%</div>
          <div className="text-xs text-[#6b6a63]">3 runs · 80 cases evaluated</div>
        </div>

        {/* Trend card */}
        <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
          <div className="text-sm text-[#6b6a63] mb-2">Trend — Last 3 runs</div>
          <div className="flex items-end gap-1 mb-2" style={{ height: 48 }}>
            {runHistory.map((run) => (
              <div key={run.label} className="flex flex-col items-center gap-1 flex-1">
                <div
                  className="w-full bg-[#d97757] rounded-sm"
                  style={{ height: `${(run.passRate / maxRate) * 40}px` }}
                />
                <span className="text-[10px] text-[#6b6a63]">{run.passRate}%</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-1 text-[#6aaa7b] text-xs font-medium">
            <span>↑</span>
            <span>+13pp over 3 runs</span>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
          <div className="text-sm text-[#6b6a63] mb-2">Latest Run — Failure Drivers</div>
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

      {/* Run History Trend */}
      <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] mb-8">
        <h3 className="text-base font-semibold mb-4">Run History</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-xs text-[#6b6a63] border-b border-[#e8e6dc]">
                <th className="pb-2 pr-6">Run</th>
                <th className="pb-2 pr-6">Date</th>
                <th className="pb-2 pr-6">Pass Rate</th>
                <th className="pb-2 pr-6">Cases</th>
                <th className="pb-2">Change</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e8e6dc]">
              {runHistory.map((run, i) => {
                const prev = i > 0 ? runHistory[i - 1].passRate : null
                const delta = prev !== null ? run.passRate - prev : null
                return (
                  <tr key={run.label}>
                    <td className="py-3 pr-6 font-medium">{run.label}</td>
                    <td className="py-3 pr-6 text-[#6b6a63]">{run.date}</td>
                    <td className="py-3 pr-6">
                      <div className="flex items-center gap-2">
                        <div className="w-24 bg-[#faf9f5] rounded-full h-2">
                          <div
                            className="bg-[#d97757] h-2 rounded-full"
                            style={{ width: `${run.passRate}%` }}
                          />
                        </div>
                        <span className="font-semibold">{run.passRate}%</span>
                      </div>
                    </td>
                    <td className="py-3 pr-6 text-[#6b6a63]">{run.passed}/{run.total}</td>
                    <td className="py-3">
                      {delta !== null ? (
                        <span className={`font-medium ${delta > 0 ? 'text-[#6aaa7b]' : delta < 0 ? 'text-[#c98888]' : 'text-[#b5b0a8]'}`}>
                          {delta > 0 ? '+' : ''}{delta}pp
                        </span>
                      ) : (
                        <span className="text-[#6b6a63]">—</span>
                      )}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Human vs LLM split */}
      <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] mb-8">
        <h3 className="text-base font-semibold mb-1">Human vs LLM Evaluation</h3>
        <p className="text-sm text-[#6b6a63] mb-4">Latest run — 28 cases</p>
        <div className="grid grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-[#faeade] rounded-xl flex items-center justify-center mx-auto mb-2 text-2xl">
              👤
            </div>
            <div className="text-2xl font-bold text-[#d97757] mb-1">11</div>
            <div className="text-xs text-[#6b6a63]">Human-evaluated cases</div>
            <div className="text-xs text-[#6b6a63] mt-0.5">deep verification</div>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-[#faeade] rounded-xl flex items-center justify-center mx-auto mb-2 text-2xl">
              🤖
            </div>
            <div className="text-2xl font-bold text-[#d97757] mb-1">17</div>
            <div className="text-xs text-[#6b6a63]">LLM-judged cases</div>
            <div className="text-xs text-[#6b6a63] mt-0.5">automated evaluation</div>
          </div>
          <div className="text-center border-l border-[#e8e6dc] pl-6">
            <div className="text-2xl font-bold text-[#6aaa7b] mb-1">64%</div>
            <div className="text-xs text-[#6b6a63]">Human–LLM agreement</div>
            <div className="text-xs text-[#6b6a63] mt-0.5">on 11 overlapping cases</div>
            <div className="mt-3 w-full bg-[#faf9f5] rounded-full h-2">
              <div className="bg-[#8fba98] h-2 rounded-full" style={{ width: '64%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Tester Insights */}
      <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] mb-8">
        <h3 className="text-base font-semibold mb-1">Tester Insights</h3>
        <p className="text-sm text-[#6b6a63] mb-4">Synthesized evaluator notes grouped by theme</p>
        <div className="space-y-3">
          {testerInsights.map((insight, i) => (
            <div key={i} className="flex items-start gap-4 p-4 bg-[#faf9f5] rounded-xl">
              <span className={`shrink-0 px-2 py-0.5 rounded text-xs font-semibold ${insight.severityColor}`}>
                {insight.severity}
              </span>
              <p className="text-sm flex-1 leading-relaxed">{insight.note}</p>
              <span className="shrink-0 px-2 py-0.5 bg-white border border-[#e8e6dc] rounded text-xs text-[#6b6a63]">
                Team: {insight.team}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Top Failure Drivers */}
      <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] mb-8">
        <h3 className="text-base font-semibold mb-4">Top Failure Drivers — Latest Run</h3>
        <p className="text-sm text-[#6b6a63] mb-4">13 failed of 28 cases evaluated — drivers may overlap</p>

        <div className="space-y-3">
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Answer Correctness</span>
              <span className="text-sm font-semibold">10/13 (77%)</span>
            </div>
            <div className="w-full bg-[#faf9f5] rounded-full h-2">
              <div className="bg-[#d97757] h-2 rounded-full" style={{ width: '77%' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Response Quality</span>
              <span className="text-sm font-semibold">11/13 (85%)</span>
            </div>
            <div className="w-full bg-[#faf9f5] rounded-full h-2">
              <div className="bg-[#d97757] h-2 rounded-full" style={{ width: '85%' }} />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm">Source Citation</span>
              <span className="text-sm font-semibold">8/13 (62%)</span>
            </div>
            <div className="w-full bg-[#faf9f5] rounded-full h-2">
              <div className="bg-[#d97757] h-2 rounded-full" style={{ width: '62%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Issue Tag Breakdown */}
      <div className="mb-8">
        <h2 className="text-lg font-semibold mb-4">Issue Tag Breakdown</h2>
        <p className="text-sm text-[#6b6a63] mb-4">Across 56 evaluated cases</p>

        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">Answer Issues</h3>
            <div className="space-y-3">
              {[
                { tag: 'missing-info', count: 23, pct: 41 },
                { tag: 'over-interpretation', count: 3, pct: 5 },
                { tag: 'factually-incorrect', count: 3, pct: 5 },
              ].map(({ tag, count, pct }) => (
                <div key={tag}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono">{tag}</span>
                    <span className="text-xs">{count} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">Source Issues</h3>
            <div className="space-y-3">
              {[
                { tag: 'missed-docs', count: 27, pct: 48 },
                { tag: 'wrong-docs', count: 4, pct: 7 },
              ].map(({ tag, count, pct }) => (
                <div key={tag}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono">{tag}</span>
                    <span className="text-xs">{count} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <h3 className="text-sm font-semibold mb-4">Response Issues</h3>
            <div className="space-y-3">
              {[
                { tag: 'didnt-answer', count: 15, pct: 27 },
                { tag: 'too-verbose', count: 6, pct: 11 },
              ].map(({ tag, count, pct }) => (
                <div key={tag}>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono">{tag}</span>
                    <span className="text-xs">{count} ({pct}%)</span>
                  </div>
                  <div className="w-full bg-[#faf9f5] rounded-full h-1.5">
                    <div className="bg-[#d97757] h-1.5 rounded-full" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance by Difficulty */}
      <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] mb-8">
        <h3 className="text-base font-semibold mb-4">Performance by Difficulty</h3>
        <p className="text-sm text-[#6b6a63] mb-6">Expected pattern: Easy &gt; Medium &gt; Hard</p>
        <div className="space-y-4">
          {[
            { label: 'Easy', pct: 71, passed: 11, total: 16, color: '#8fba98' },
            { label: 'Medium', pct: 52, passed: 9, total: 18, color: '#d4a96a' },
            { label: 'Hard', pct: 29, passed: 2, total: 7, color: '#c98888' },
          ].map(({ label, pct, passed, total, color }) => (
            <div key={label}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm">{label}</span>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-semibold">{pct}%</span>
                  <span className="text-xs text-[#6b6a63]">{passed}/{total} passed</span>
                </div>
              </div>
              <div className="w-full bg-[#faf9f5] rounded-full h-3">
                <div className="h-3 rounded-full" style={{ width: `${pct}%`, backgroundColor: color }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
