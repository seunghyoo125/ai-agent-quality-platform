const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  new: { label: 'New', color: 'text-gray-700', bg: 'bg-gray-100' },
  confirmed: { label: 'Confirmed', color: 'text-yellow-700', bg: 'bg-yellow-100' },
  diagnosed: { label: 'Diagnosed', color: 'text-orange-700', bg: 'bg-orange-100' },
  'in-progress': { label: 'In Progress', color: 'text-amber-700', bg: 'bg-amber-100' },
  verifying: { label: 'Verifying', color: 'text-red-700', bg: 'bg-red-100' },
  resolved: { label: 'Resolved', color: 'text-green-700', bg: 'bg-green-100' },
}

const lifecycleSteps = ['New', 'Confirmed', 'Diagnosed', 'In Progress', 'Verifying', 'Resolved']

const patterns = [
  {
    id: 'P-001',
    name: 'Missed authoritative source when conflicting versions present',
    dimension: 'Source Correctness',
    dimensionColor: 'bg-orange-100 text-orange-700',
    caseCount: 27,
    status: 'in-progress',
    assignee: 'Retrieval Team',
    linkedRuns: ['Run-003', 'Run-002', 'Run-001'],
    description:
      'When multiple document versions exist, the retrieval layer consistently surfaces non-authoritative copies over the designated canonical version, leading to citation of outdated or superseded content.',
    firstSeen: '2026-02-06',
    lastSeen: '2026-02-11',
  },
  {
    id: 'P-002',
    name: 'Verbosity on synthesis queries',
    dimension: 'Response Quality',
    dimensionColor: 'bg-orange-100 text-orange-700',
    caseCount: 6,
    status: 'confirmed',
    assignee: 'Prompt Team',
    linkedRuns: ['Run-003', 'Run-002'],
    description:
      'On multi-document synthesis questions, the agent generates responses 2-3× longer than necessary. Tag: too-verbose. The pattern holds even when the underlying answer is correct.',
    firstSeen: '2026-02-10',
    lastSeen: '2026-02-11',
  },
  {
    id: 'P-003',
    name: 'Factual errors on version-conflict scenarios',
    dimension: 'Answer Correctness',
    dimensionColor: 'bg-red-100 text-red-700',
    caseCount: 3,
    status: 'diagnosed',
    assignee: 'Dev Team',
    linkedRuns: ['Run-003'],
    description:
      'In scenarios where two document versions assert conflicting facts, the agent selects the incorrect fact in 3 of 3 observed cases. Root cause traced to retrieval ranking — older version ranked higher due to filename lexicographic order.',
    firstSeen: '2026-02-11',
    lastSeen: '2026-02-11',
  },
  {
    id: 'P-004',
    name: "Didn't answer multi-doc synthesis questions",
    dimension: 'Answer Correctness',
    dimensionColor: 'bg-red-100 text-red-700',
    caseCount: 15,
    status: 'new',
    assignee: 'Unassigned',
    linkedRuns: ['Run-003'],
    description:
      "Agent returns partial answers or deflects to \"I cannot determine\" on questions requiring synthesis across 3+ documents. Tag: didnt-answer. Scenario type: Multi-doc Synthesis (20% of golden set).",
    firstSeen: '2026-02-11',
    lastSeen: '2026-02-11',
  },
]

function LifecycleBar({ status }: { status: string }) {
  const currentIndex = lifecycleSteps.findIndex(
    (s) => s.toLowerCase().replace(' ', '-') === status
  )
  return (
    <div className="flex items-center gap-0.5 mt-3">
      {lifecycleSteps.map((step, i) => (
        <div key={step} className="flex items-center gap-0.5 flex-1">
          <div
            className={`h-1.5 rounded-full flex-1 ${
              i <= currentIndex ? 'bg-[#d97757]' : 'bg-[#e8e6dc]'
            }`}
          />
          {i < lifecycleSteps.length - 1 && <div className="w-0.5" />}
        </div>
      ))}
    </div>
  )
}

export default function IssuePatterns() {
  const statusCounts = patterns.reduce<Record<string, number>>((acc, p) => {
    acc[p.status] = (acc[p.status] || 0) + 1
    return acc
  }, {})

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Issue Patterns</h1>
          <p className="text-sm text-[#6b6a63]">
            Auto-detected failure patterns across evaluation runs. Patterns are clustered by
            dimension and tracked through a resolution lifecycle.
          </p>
        </div>
        <button className="px-4 py-2 bg-white border border-[#e8e6dc] rounded-lg text-sm">
          Export Report
        </button>
      </div>

      {/* Status summary */}
      <div className="mb-6 flex gap-3 flex-wrap">
        {Object.entries(statusConfig).map(([key, cfg]) => {
          const count = statusCounts[key] ?? 0
          if (count === 0) return null
          return (
            <div
              key={key}
              className={`px-4 py-2 rounded-xl text-sm font-medium flex items-center gap-2 ${cfg.bg} ${cfg.color}`}
            >
              <span className="font-bold">{count}</span> {cfg.label}
            </div>
          )
        })}
        <div className="px-4 py-2 rounded-xl text-sm bg-[#faf9f5] border border-[#e8e6dc] text-[#6b6a63] flex items-center gap-2">
          <span className="font-bold">{patterns.reduce((s, p) => s + p.caseCount, 0)}</span> total cases
        </div>
      </div>

      {/* Lifecycle legend */}
      <div className="mb-6 bg-white border border-[#e8e6dc] rounded-xl p-4">
        <p className="text-xs font-semibold text-[#6b6a63] mb-2">RESOLUTION LIFECYCLE</p>
        <div className="flex items-center gap-2">
          {lifecycleSteps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <span className="text-xs text-gray-700">{step}</span>
              {i < lifecycleSteps.length - 1 && (
                <span className="text-[#6b6a63] text-xs">→</span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Pattern Cards */}
      <div className="space-y-4">
        {patterns.map((pattern) => {
          const cfg = statusConfig[pattern.status]
          return (
            <div
              key={pattern.id}
              className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <span className="text-xs text-[#6b6a63] font-mono">{pattern.id}</span>
                    <h3 className="font-semibold text-base">{pattern.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${pattern.dimensionColor}`}>
                      {pattern.dimension}
                    </span>
                    <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold ${cfg.bg} ${cfg.color}`}>
                      {cfg.label}
                    </span>
                    <span className="text-xs text-[#6b6a63]">
                      {pattern.caseCount} cases
                    </span>
                  </div>
                </div>
                <div className="text-right text-xs text-[#6b6a63] ml-4 shrink-0">
                  <div className="mb-1">
                    Assignee: <span className="font-medium text-gray-700">{pattern.assignee}</span>
                  </div>
                  <div>First seen: {pattern.firstSeen}</div>
                </div>
              </div>

              <p className="text-sm text-[#6b6a63] mb-4 leading-relaxed">{pattern.description}</p>

              <div className="flex items-center gap-4">
                <div className="text-xs text-[#6b6a63]">
                  Linked runs:{' '}
                  {pattern.linkedRuns.map((r, i) => (
                    <span key={r}>
                      <span className="font-mono text-gray-700">{r}</span>
                      {i < pattern.linkedRuns.length - 1 ? ', ' : ''}
                    </span>
                  ))}
                </div>
              </div>

              {/* Lifecycle progress bar */}
              <LifecycleBar status={pattern.status} />
              <div className="flex justify-between mt-1">
                {lifecycleSteps.map((step) => (
                  <span key={step} className="text-[10px] text-[#6b6a63]">
                    {step}
                  </span>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
