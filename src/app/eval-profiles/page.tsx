import Link from 'next/link'

const profiles = [
  {
    name: 'Search / Retrieval',
    evalMode: 'Answer-based',
    scoringScale: 'Yes / Partially / No',
    judgeStatus: 'calibrated',
    agents: ['PwC Intelligence Hub'],
    goldenSets: 3,
    dimensions: [
      {
        name: 'Answer Correctness',
        color: 'bg-red-100 text-red-700',
        tags: ['factually-incorrect', 'missing-info', 'over-interpretation'],
      },
      {
        name: 'Source Correctness',
        color: 'bg-orange-100 text-orange-700',
        tags: ['missed-docs', 'wrong-docs', 'unverifiable'],
      },
      {
        name: 'Response Quality',
        color: 'bg-blue-100 text-blue-700',
        tags: ['too-verbose', 'didnt-answer', 'scope-creep'],
      },
    ],
  },
  {
    name: 'Document Generation',
    evalMode: 'Criteria-based',
    scoringScale: 'Good / Average / Not Good',
    judgeStatus: 'calibrated',
    agents: [],
    goldenSets: 0,
    dimensions: [
      {
        name: 'Completeness',
        color: 'bg-red-100 text-red-700',
        tags: ['missing-section', 'incomplete-requirements', 'omitted-constraints'],
      },
      {
        name: 'Accuracy',
        color: 'bg-orange-100 text-orange-700',
        tags: ['factually-incorrect', 'misrepresented-data', 'wrong-format'],
      },
      {
        name: 'Clarity',
        color: 'bg-blue-100 text-blue-700',
        tags: ['ambiguous-language', 'too-technical', 'disorganized'],
      },
    ],
  },
  {
    name: 'Dashboard / Analytics',
    evalMode: 'Criteria-based, human-graded',
    scoringScale: 'Good / Average / Not Good',
    judgeStatus: 'not calibrated',
    agents: [],
    goldenSets: 0,
    dimensions: [
      {
        name: 'Insight Correctness',
        color: 'bg-red-100 text-red-700',
        tags: ['wrong-metric', 'misinterpreted-trend', 'false-correlation'],
      },
      {
        name: 'Visualization Quality',
        color: 'bg-orange-100 text-orange-700',
        tags: ['wrong-chart-type', 'misleading-scale', 'missing-labels'],
      },
      {
        name: 'Narrative Quality',
        color: 'bg-blue-100 text-blue-700',
        tags: ['too-verbose', 'no-actionable-insight', 'scope-creep'],
      },
    ],
  },
  {
    name: 'Triage / Classification',
    evalMode: 'Criteria-based',
    scoringScale: 'Good / Average / Not Good',
    judgeStatus: 'calibrated',
    agents: [],
    goldenSets: 0,
    dimensions: [
      {
        name: 'Classification Accuracy',
        color: 'bg-red-100 text-red-700',
        tags: ['wrong-category', 'missed-priority', 'ambiguous-case'],
      },
      {
        name: 'Reasoning Transparency',
        color: 'bg-orange-100 text-orange-700',
        tags: ['unexplained-decision', 'missing-evidence', 'contradictory-logic'],
      },
      {
        name: 'Routing Correctness',
        color: 'bg-blue-100 text-blue-700',
        tags: ['wrong-team', 'missed-escalation', 'duplicate-routing'],
      },
    ],
  },
  {
    name: 'Analysis',
    evalMode: 'Criteria-based',
    scoringScale: 'Good / Average / Not Good',
    judgeStatus: 'not calibrated',
    agents: [],
    goldenSets: 0,
    dimensions: [
      {
        name: 'Depth of Analysis',
        color: 'bg-red-100 text-red-700',
        tags: ['surface-level', 'missed-nuance', 'incomplete-coverage'],
      },
      {
        name: 'Evidence Use',
        color: 'bg-orange-100 text-orange-700',
        tags: ['unsupported-claim', 'wrong-citation', 'cherry-picked'],
      },
      {
        name: 'Conclusion Quality',
        color: 'bg-blue-100 text-blue-700',
        tags: ['over-conclusion', 'hedging-too-much', 'irrelevant-recommendation'],
      },
    ],
  },
]

export default function EvalProfiles() {
  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <h1 className="text-2xl font-semibold mb-2">Eval Profiles</h1>
          <p className="text-sm text-[#6b6a63]">
            Built-in evaluation frameworks for different agent archetypes. Each profile defines
            dimensions, controlled vocabulary tags, scoring scale, and judge prompt configuration.
          </p>
        </div>
        <button className="px-4 py-2 bg-[#d97757] text-white rounded-lg text-sm flex items-center gap-2">
          + New Profile
        </button>
      </div>

      {/* Summary bar */}
      <div className="mb-6 flex gap-4 text-sm">
        <div className="bg-white border border-[#e8e6dc] rounded-xl px-4 py-3 flex items-center gap-2">
          <span className="font-semibold text-[#d97757]">5</span>
          <span className="text-[#6b6a63]">profiles</span>
        </div>
        <div className="bg-white border border-[#e8e6dc] rounded-xl px-4 py-3 flex items-center gap-2">
          <span className="font-semibold text-green-600">3</span>
          <span className="text-[#6b6a63]">calibrated</span>
        </div>
        <div className="bg-white border border-[#e8e6dc] rounded-xl px-4 py-3 flex items-center gap-2">
          <span className="font-semibold text-yellow-600">2</span>
          <span className="text-[#6b6a63]">not calibrated</span>
        </div>
      </div>

      {/* Profile Cards */}
      <div className="space-y-6">
        {profiles.map((profile) => (
          <div
            key={profile.name}
            className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm"
          >
            {/* Card header */}
            <div className="flex items-start justify-between mb-5">
              <div>
                <div className="flex items-center gap-3 mb-1">
                  <h2 className="text-lg font-semibold">{profile.name}</h2>
                  <span className="px-2.5 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                    {profile.evalMode}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-[#6b6a63]">
                  <span>Scoring: <span className="font-medium text-gray-700">{profile.scoringScale}</span></span>
                  <span className={`flex items-center gap-1 font-medium ${profile.judgeStatus === 'calibrated' ? 'text-green-600' : 'text-yellow-600'}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${profile.judgeStatus === 'calibrated' ? 'bg-green-500' : 'bg-yellow-500'}`}></span>
                    Judge: {profile.judgeStatus}
                  </span>
                </div>
              </div>
              <div className="text-right text-xs text-[#6b6a63]">
                <div className="mb-1">{profile.goldenSets} golden set{profile.goldenSets !== 1 ? 's' : ''}</div>
                {profile.agents.length > 0 && (
                  <div className="flex flex-wrap gap-1 justify-end">
                    {profile.agents.map((a) => (
                      <span key={a} className="px-2 py-0.5 bg-[#faf9f5] border border-[#e8e6dc] rounded text-xs">
                        {a}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Dimensions */}
            <div className="grid grid-cols-3 gap-4">
              {profile.dimensions.map((dim) => (
                <div key={dim.name} className="border border-[#e8e6dc] rounded-xl p-4">
                  <div className={`inline-block px-2 py-0.5 rounded text-xs font-semibold mb-3 ${dim.color}`}>
                    {dim.name}
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {dim.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 bg-[#faf9f5] border border-[#e8e6dc] rounded-full text-xs text-[#6b6a63] font-mono"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
