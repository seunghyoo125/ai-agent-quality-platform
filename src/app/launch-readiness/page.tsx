export default function LaunchReadiness() {
    const agents = [
      {
        name: "PwC Intelligence Hub",
        owner: "Seung Yoo",
        tier: "Critical",
        target: "2/28/2025",
        status: "At Risk",
        passRate: "54%",
        alerts: 2,
        alertTexts: ["Below 70% threshold", "Source citation at 62%"],
        actions: 2,
        actionTexts: ["Improve document selection", "Calibrate retrieval weights"]
      },
      {
        name: "User Story Generator",
        owner: "Tom Brady",
        tier: "Standard",
        target: "3/15/2025",
        status: "Not Assessed",
        passRate: "—",
        alerts: 1,
        alertTexts: ["Never assessed"],
        actions: 1,
        actionTexts: ["Initial assessment needed"]
      },
      {
        name: "Fit-Gap Analyzer",
        owner: "Michael Jordan",
        tier: "Standard",
        target: "3/20/2025",
        status: "On Track",
        passRate: "78%",
        alerts: 0,
        alertTexts: [],
        actions: 1,
        actionTexts: ["Run final validation"]
      },
      {
        name: "KDD Builder",
        owner: "Kobe Bryant",
        tier: "Standard",
        target: null,
        status: "Not Assessed",
        passRate: "—",
        alerts: 1,
        alertTexts: ["No target date set"],
        actions: 1,
        actionTexts: ["Schedule assessment"]
      },
      {
        name: "RAICEF Listing Generator",
        owner: "Justin Jefferson",
        tier: "Standard",
        target: "4/1/2025",
        status: "Not Assessed",
        passRate: "—",
        alerts: 1,
        alertTexts: ["Never assessed"],
        actions: 1,
        actionTexts: ["Initial assessment needed"]
      },
    ]
  
    const getStatusColor = (status: string) => {
      switch(status) {
        case "At Risk": return "bg-red-100 text-red-700"
        case "On Track": return "bg-green-100 text-green-700"
        case "Not Assessed": return "bg-gray-200 text-gray-700"
        default: return "bg-gray-200 text-gray-700"
      }
    }
  
    return (
      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold mb-2">Launch Readiness</h1>
          <p className="text-sm text-[#6b6a63] mb-4">Production readiness status across agent portfolio</p>
        </div>
  
        {/* Agent Cards Grid */}
        <div className="space-y-4">
          {agents.map((agent, idx) => (
            <div key={idx} className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="font-semibold text-lg">{agent.name}</h3>
                    <span className={`px-2 py-1 text-xs rounded font-medium ${getStatusColor(agent.status)}`}>
                      {agent.status.toUpperCase()}
                    </span>
                  </div>
                </div>
              </div>
  
              <div className="grid grid-cols-4 gap-6 mb-4">
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Pass Rate</div>
                  <div className={`text-2xl font-bold ${agent.passRate === "—" ? "text-gray-400" : agent.passRate === "54%" ? "text-red-500" : "text-green-600"}`}>
                    {agent.passRate}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Owner</div>
                  <div className="text-sm font-medium">{agent.owner}</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Target Date</div>
                  <div className="text-sm">{agent.target || "—"}</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Tier</div>
                  <div className="text-sm">{agent.tier}</div>
                </div>
              </div>
  
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className={`flex items-center gap-2 text-sm mb-2 ${agent.alerts > 0 ? 'text-red-600' : 'text-gray-500'}`}>
                    <span>{agent.alerts > 0 ? '⚠' : '✓'}</span>
                    <span className="font-semibold">ALERTS ({agent.alerts})</span>
                  </div>
                  {agent.alertTexts.length > 0 ? (
                    <div className="space-y-1">
                      {agent.alertTexts.map((alert, i) => (
                        <div key={i} className="text-sm text-[#6b6a63]">• {alert}</div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-400">No alerts</div>
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2 text-sm mb-2">
                    <span>○</span>
                    <span className="font-semibold">ACTIONS ({agent.actions})</span>
                  </div>
                  <div className="space-y-1">
                    {agent.actionTexts.map((action, i) => (
                      <div key={i} className="text-sm text-[#6b6a63]">• {action}</div>
                    ))}
                  </div>
                </div>
              </div>
  
              <div className="flex items-center justify-between pt-4 border-t border-[#e8e6dc]">
                <div className="flex gap-6 text-sm">
                  <div>
                    <span className="text-[#6b6a63]">Last Assessed: </span>
                    <span>{agent.status === "Not Assessed" ? "Never" : "2/10/2025"}</span>
                  </div>
                </div>
                <button className="text-sm text-[#d97757] font-medium hover:underline">View Details →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }