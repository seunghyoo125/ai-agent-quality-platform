export default function Calibration() {
    return (
      <div className="p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-semibold mb-2">Prompt Calibration</h1>
          <p className="text-sm text-[#6b6a63]">Manage prompts, calibration, and configuration</p>
        </div>
  
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                📋
              </div>
              <div>
                <div className="text-2xl font-bold">8</div>
                <div className="text-sm text-[#6b6a63]">Total Prompts</div>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                ✓
              </div>
              <div>
                <div className="text-2xl font-bold">2</div>
                <div className="text-sm text-[#6b6a63]">Active</div>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                ⚡
              </div>
              <div>
                <div className="text-2xl font-bold">1</div>
                <div className="text-sm text-[#6b6a63]">Calibrated</div>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] col-span-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                📊
              </div>
              <div>
                <div className="text-2xl font-bold">88%</div>
                <div className="text-sm text-[#6b6a63]">Avg Accuracy</div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Tabs */}
        <div className="mb-6 flex gap-4 border-b border-[#e8e6dc]">
          <button className="px-4 py-2 border-b-2 border-[#d97757] text-[#d97757] font-medium">
            Prompt Registry
          </button>
          <button className="px-4 py-2 text-[#6b6a63]">
            Calibration
          </button>
          <button className="px-4 py-2 text-[#6b6a63]">
            Configuration
          </button>
        </div>
  
        {/* Evaluation Section */}
        <div className="mb-8">
          <h2 className="text-base font-semibold mb-4">Evaluation</h2>
          <p className="text-sm text-[#6b6a63] mb-4">Judge and score agent outputs</p>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">LLM-as-Judge</h3>
                <span className="text-xs px-2 py-1 bg-red-100 text-red-700 rounded mt-1 inline-block">
                  Not Calibrated
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm border border-[#e8e6dc] rounded">
                  📝 Version
                </button>
                <button className="px-3 py-1 text-sm border border-[#e8e6dc] rounded">
                  ✓ Accuracy
                </button>
                <button className="px-3 py-1 text-sm border border-[#e8e6dc] rounded">
                  📊 Versions
                </button>
                <button className="px-3 py-1 text-sm border border-[#e8e6dc] rounded">
                  🔧 Edit
                </button>
              </div>
            </div>
            <p className="text-sm text-[#6b6a63]">
              Evaluates agent outputs on 3 dimensions: answer correctness, source quality, response appropriateness
            </p>
          </div>
        </div>
  
        {/* Prioritization Section */}
        <div className="mb-8">
          <h2 className="text-base font-semibold mb-4">Prioritization</h2>
          <p className="text-sm text-[#6b6a63] mb-4">Assess and rank requests</p>
  
          <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Prioritization Assessment</h3>
                <span className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded mt-1 inline-block">
                  Calibrated
                </span>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1 text-sm text-[#d97757]">v3</button>
                <button className="px-3 py-1 text-sm text-[#d97757]">88%</button>
                <button className="px-3 py-1 text-sm text-[#d97757]">3</button>
                <button className="px-3 py-1 text-sm border border-[#e8e6dc] rounded">
                  🔧 Edit
                </button>
              </div>
            </div>
            <p className="text-sm text-[#6b6a63]">
              Assesses intake requests on 8 dimensions with methodology context
            </p>
          </div>
        </div>
  
        {/* Classification Section */}
        <div>
          <h2 className="text-base font-semibold mb-4">Classification</h2>
          <p className="text-sm text-[#6b6a63] mb-4">Categorize items</p>
  
          <div className="space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Defect Triage Classifier</h3>
                  <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded mt-1 inline-block">
                    Planned
                  </span>
                </div>
                <div className="flex gap-2 text-sm text-[#6b6a63]">
                  <span>—</span>
                  <span>—</span>
                  <span>0</span>
                  <button className="px-3 py-1 border border-[#e8e6dc] rounded">
                    🔧 Edit
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#6b6a63]">
                Classifies defects by severity, type, and recommended action
              </p>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Query Difficulty Classifier</h3>
                  <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded mt-1 inline-block">
                    Planned
                  </span>
                </div>
                <div className="flex gap-2 text-sm text-[#6b6a63]">
                  <span>—</span>
                  <span>—</span>
                  <span>0</span>
                  <button className="px-3 py-1 border border-[#e8e6dc] rounded">
                    🔧 Edit
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#6b6a63]">
                Classifies queries as easy/medium/hard for routing
              </p>
            </div>
  
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc]">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold">Feedback Type Classifier</h3>
                  <span className="text-xs px-2 py-1 bg-gray-200 text-gray-700 rounded mt-1 inline-block">
                    Planned
                  </span>
                </div>
                <div className="flex gap-2 text-sm text-[#6b6a63]">
                  <span>—</span>
                  <span>—</span>
                  <span>0</span>
                  <button className="px-3 py-1 border border-[#e8e6dc] rounded">
                    🔧 Edit
                  </button>
                </div>
              </div>
              <p className="text-sm text-[#6b6a63]">
                Categorizes user feedback by type and sentiment
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }