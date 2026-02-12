export default function LaunchReadiness() {
    const agents = [
      {
        name: "PwC Intelligence Hub",
        owner: "Seung Yoo",
        tier: "critical",
        target: "2/28/2025",
        status: "not_assessed",
        passRate: null,
        alerts: 1,
        alertText: "Never assessed",
        actions: 1,
        actionText: "Initial assessment needed"
      },
      {
        name: "User Story Generator",
        owner: "Laura Liu",
        tier: "standard",
        target: "1/20/14",
        status: "not_assessed",
        passRate: null,
        alerts: 1,
        alertText: "Never assessed",
        actions: 1,
        actionText: "Initial assessment needed"
      },
      {
        name: "Fit-Gap Analyzer",
        owner: "Maylen Leung",
        tier: "standard",
        target: null,
        status: "not_assessed",
        passRate: null,
        alerts: 1,
        alertText: "Never assessed",
        actions: 1,
        actionText: "Initial assessment needed"
      },
      {
        name: "KDD Builder",
        owner: "Laura Liu",
        tier: "standard",
        target: null,
        status: "not_assessed",
        passRate: null,
        alerts: 1,
        alertText: "Never assessed",
        actions: 1,
        actionText: "Initial assessment needed"
      },
      {
        name: "RAICEF Listing Generator",
        owner: "Laura Liu",
        tier: "standard",
        target: null,
        status: "not_assessed",
        passRate: null,
        alerts: 1,
        alertText: "Never assessed",
        actions: 1,
        actionText: "Initial assessment needed"
      },
      {
        name: "Configuration Workbook Details Agent",
        owner: "Laura Liu",
        tier: "standard",
        target: null,
        status: "not_assessed",
        passRate: null,
        alerts: 1,
        alertText: "Never assessed",
        actions: 1,
        actionText: "Initial assessment needed"
      }
    ]
  
    return (
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4">
            <span className="text-sm">⚠️ medium</span>
            <span className="text-sm ml-4">Initial assessment needed</span>
            <span className="text-sm ml-4">RAICEF Listing Generator has never been assessed...</span>
            <div className="mt-2">
              <span className="text-sm font-semibold">RAICEF Listing Generator</span>
              <span className="text-sm ml-4">Laura Liu</span>
              <span className="text-sm ml-4">1/20/14</span>
              <button className="text-sm text-[#d97757] ml-4">Take Action luz1h2</button>
            </div>
          </div>
  
          <h1 className="text-2xl font-semibold mb-2">Agents</h1>
          <p className="text-sm text-[#6b6a63] mb-4">View all 8 actions</p>
        </div>
  
        {/* Agent Cards Grid */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold">{agents[0].name}</h3>
                  <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">NOT ASSESSED</span>
                </div>
              </div>
            </div>
  
            <div className="grid grid-cols-4 gap-6 mb-4">
              <div>
                <div className="text-xs text-[#6b6a63] mb-1">Pass Rate</div>
                <div className="text-2xl font-bold">—</div>
              </div>
              <div>
                <div className="text-xs text-[#6b6a63] mb-1">Gates</div>
                <div className="text-sm">— Worst</div>
                <div className="text-sm">—</div>
              </div>
              <div>
                <div className="text-xs text-[#6b6a63] mb-1">Latency</div>
                <div className="text-sm">— Cost</div>
                <div className="text-sm">—</div>
              </div>
            </div>
  
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 text-sm text-red-600 mb-1">
                  <span>⚠</span>
                  <span className="font-semibold">ALERTS (1)</span>
                </div>
                <div className="text-sm text-[#6b6a63]">• Never assessed</div>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm mb-1">
                  <span>○</span>
                  <span className="font-semibold">ACTIONS (1)</span>
                </div>
                <div className="text-sm text-[#6b6a63]">• Initial assessment needed</div>
              </div>
            </div>
  
            <div className="flex items-center justify-between pt-4 border-t border-[#e8e6dc]">
              <div className="flex gap-6 text-sm">
                <div>
                  <span className="text-[#6b6a63]">Owner: </span>
                  <span>{agents[0].owner}</span>
                </div>
                <div>
                  <span className="text-[#6b6a63]">Target: </span>
                  <span>—</span>
                </div>
                <div>
                  <span className="text-[#6b6a63]">Tier: </span>
                  <span>{agents[0].tier}</span>
                </div>
                <div>
                  <span className="text-[#6b6a63]">Assessed: </span>
                  <span>Never</span>
                </div>
              </div>
              <button className="text-sm text-[#d97757] font-medium">View Details →</button>
            </div>
          </div>
  
          {/* Repeat for other agents */}
          {agents.slice(1).map((agent, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold">{agent.name}</h3>
                    <span className="px-2 py-1 bg-gray-200 text-gray-700 text-xs rounded">NOT ASSESSED</span>
                  </div>
                </div>
              </div>
  
              <div className="grid grid-cols-4 gap-6 mb-4">
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Pass Rate</div>
                  <div className="text-2xl font-bold">—</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Gates</div>
                  <div className="text-sm">— Worst</div>
                  <div className="text-sm">—</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Latency</div>
                  <div className="text-sm">— Cost</div>
                  <div className="text-sm">—</div>
                </div>
              </div>
  
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 text-sm text-red-600 mb-1">
                    <span>⚠</span>
                    <span className="font-semibold">ALERTS ({agent.alerts})</span>
                  </div>
                  <div className="text-sm text-[#6b6a63]">• {agent.alertText}</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm mb-1">
                    <span>○</span>
                    <span className="font-semibold">ACTIONS ({agent.actions})</span>
                  </div>
                  <div className="text-sm text-[#6b6a63]">• {agent.actionText}</div>
                </div>
              </div>
  
              <div className="flex items-center justify-between pt-4 border-t border-[#e8e6dc]">
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-[#6b6a63]">Owner: </span>
                    <span>{agent.owner}</span>
                  </div>
                  <div>
                    <span className="text-[#6b6a63]">Target: </span>
                    <span>{agent.target || "—"}</span>
                  </div>
                  <div>
                    <span className="text-[#6b6a63]">Tier: </span>
                    <span>{agent.tier}</span>
                  </div>
                  <div>
                    <span className="text-[#6b6a63]">Assessed: </span>
                    <span>Never</span>
                  </div>
                </div>
                <button className="text-sm text-[#d97757] font-medium">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }