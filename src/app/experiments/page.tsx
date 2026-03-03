'use client'
import { useState } from 'react'

export default function Experiments() {
  const [activeTab, setActiveTab] = useState('ab-experiments')

  return (
    <div className="p-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-semibold mb-2">Experiments</h1>
        <p className="text-sm text-[#6b6a63]">Compare configurations and evaluate agents against golden sets</p>
      </div>

      {/* Tabs */}
      <div className="mb-6 flex gap-4">
        <button 
          onClick={() => setActiveTab('ab-experiments')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'ab-experiments' 
              ? 'bg-[#d97757] text-white shadow-sm' 
              : 'bg-white border border-[#e8e6dc] hover:bg-[#faf9f5]'
          }`}
        >
          A/B Experiments
        </button>
        <button 
          onClick={() => setActiveTab('judge-calibration')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'judge-calibration' 
              ? 'bg-[#d97757] text-white shadow-sm' 
              : 'bg-white border border-[#e8e6dc] hover:bg-[#faf9f5]'
          }`}
        >
          Judge Calibration
        </button>
        <button 
          onClick={() => setActiveTab('golden-set-evals')}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            activeTab === 'golden-set-evals' 
              ? 'bg-[#d97757] text-white shadow-sm' 
              : 'bg-white border border-[#e8e6dc] hover:bg-[#faf9f5]'
          }`}
        >
          Golden Set Evals
        </button>
      </div>

      {/* A/B Experiments Tab */}
      {activeTab === 'ab-experiments' && (
        <div>
          {/* RAG Configuration Experiments */}
          <div className="mb-12">
            <h2 className="text-xl font-semibold mb-2">Retrieval Configuration Experiments</h2>
            <p className="text-sm text-[#6b6a63] mb-6">
              Tested 3 retrieval modes across 250 cases from HelloWorks golden set to find optimal configuration for different query types.
            </p>

            {/* Configuration Overview */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm mb-6">
              <h3 className="text-base font-semibold mb-4">Configuration Details</h3>
              <div className="grid grid-cols-3 gap-6">
                <div className="border-l-4 border-[#c98888] pl-4">
                  <h4 className="font-semibold mb-2">Fastest Mode</h4>
                  <ul className="text-sm text-[#6b6a63] space-y-1">
                    <li>• Vector search only</li>
                    <li>• Top-k: 5 documents</li>
                    <li>• No reranking</li>
                    <li>• Target: Easy queries</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#d97757] pl-4">
                  <h4 className="font-semibold mb-2">Balanced Mode</h4>
                  <ul className="text-sm text-[#6b6a63] space-y-1">
                    <li>• Hybrid (Vector + BM25)</li>
                    <li>• Top-k: 10 documents</li>
                    <li>• Rerank top-3</li>
                    <li>• Target: Medium queries</li>
                  </ul>
                </div>
                <div className="border-l-4 border-[#c8a84c] pl-4">
                  <h4 className="font-semibold mb-2">Research Mode</h4>
                  <ul className="text-sm text-[#6b6a63] space-y-1">
                    <li>• Hybrid + Web search</li>
                    <li>• Top-k: 15 documents</li>
                    <li>• Rerank top-5 + Multi-hop</li>
                    <li>• Target: Hard queries</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Overall Results */}
            <div className="bg-white rounded-2xl border border-[#e8e6dc] shadow-sm overflow-hidden mb-6">
              <div className="p-4 bg-[#faf9f5] border-b border-[#e8e6dc]">
                <h3 className="text-base font-semibold">Overall Performance</h3>
              </div>
              <table className="w-full">
                <thead className="bg-[#faf9f5]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Metric</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Fastest</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Balanced</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Research</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e6dc]">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Overall Pass Rate</td>
                    <td className="px-6 py-4 text-center text-sm">78%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">85%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#7a95b0]">91%</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Avg Latency</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">0.6s </td>
                    <td className="px-6 py-4 text-center text-sm">1.2s</td>
                    <td className="px-6 py-4 text-center text-sm text-[#c98888]">3.5s</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Avg Cost per Query</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">$0.002 </td>
                    <td className="px-6 py-4 text-center text-sm">$0.005</td>
                    <td className="px-6 py-4 text-center text-sm text-[#c98888]">$0.015</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Cases Evaluated</td>
                    <td className="px-6 py-4 text-center text-sm">250</td>
                    <td className="px-6 py-4 text-center text-sm">250</td>
                    <td className="px-6 py-4 text-center text-sm">250</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Performance by Difficulty */}
            <div className="bg-white rounded-2xl border border-[#e8e6dc] shadow-sm overflow-hidden mb-6">
              <div className="p-4 bg-[#faf9f5] border-b border-[#e8e6dc]">
                <h3 className="text-base font-semibold">Performance by Query Difficulty</h3>
                <p className="text-sm text-[#6b6a63] mt-1">Pass rate breakdown showing which mode works best for each difficulty level</p>
              </div>
              <table className="w-full">
                <thead className="bg-[#faf9f5]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Difficulty</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Fastest</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Balanced</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Research</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Winner</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e6dc]">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Easy Queries</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">78% ✓</td>
                    <td className="px-6 py-4 text-center text-sm">82%</td>
                    <td className="px-6 py-4 text-center text-sm">85%</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">Fastest (minimal quality loss, 3x faster)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Medium Queries</td>
                    <td className="px-6 py-4 text-center text-sm">74%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">85% ✓</td>
                    <td className="px-6 py-4 text-center text-sm">89%</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">Balanced (best cost/quality tradeoff)</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Hard Queries</td>
                    <td className="px-6 py-4 text-center text-sm text-[#c98888]">65%</td>
                    <td className="px-6 py-4 text-center text-sm">78%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">91% ✓</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">Research (quality-critical, worth cost)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Performance by Capability */}
            <div className="bg-white rounded-2xl border border-[#e8e6dc] shadow-sm overflow-hidden mb-6">
              <div className="p-4 bg-[#faf9f5] border-b border-[#e8e6dc]">
                <h3 className="text-base font-semibold">Performance by Capability</h3>
                <p className="text-sm text-[#6b6a63] mt-1">Which retrieval mode performs best for different agent capabilities</p>
              </div>
              <table className="w-full">
                <thead className="bg-[#faf9f5]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Capability</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Fastest</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Balanced</th>
                    <th className="px-6 py-3 text-center text-xs font-semibold text-[#6b6a63] uppercase">Research</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Insight</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e6dc]">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Core Functional</td>
                    <td className="px-6 py-4 text-center text-sm">82%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">88% ✓</td>
                    <td className="px-6 py-4 text-center text-sm">90%</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">Balanced sufficient for most cases</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Retrieval Isolated</td>
                    <td className="px-6 py-4 text-center text-sm text-[#c98888]">68%</td>
                    <td className="px-6 py-4 text-center text-sm">79%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">92% ✓</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">Research mode critical for retrieval</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Synthesis</td>
                    <td className="px-6 py-4 text-center text-sm">76%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">84% ✓</td>
                    <td className="px-6 py-4 text-center text-sm">87%</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">Balanced works well</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Reasoning</td>
                    <td className="px-6 py-4 text-center text-sm">72%</td>
                    <td className="px-6 py-4 text-center text-sm">81%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">89% ✓</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">Complex reasoning needs more context</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">Edge Cases</td>
                    <td className="px-6 py-4 text-center text-sm text-[#c98888]">55%</td>
                    <td className="px-6 py-4 text-center text-sm">72%</td>
                    <td className="px-6 py-4 text-center text-sm font-semibold text-[#6aaa7b]">88% ✓</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">Edge cases demand comprehensive search</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Cost/Quality/Speed Tradeoff */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm mb-6">
              <h3 className="text-base font-semibold mb-4">Cost / Quality / Speed Tradeoff</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#c98888] rounded"></div>
                      <span className="text-sm font-medium">Fastest Mode</span>
                    </div>
                    <span className="text-sm text-[#6b6a63]">78% quality • 0.6s • $0.002</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Quality</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#c98888] h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Speed (inverted)</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#8fba98] h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Cost Efficiency</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#8fba98] h-2 rounded-full" style={{width: '100%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#d97757] rounded"></div>
                      <span className="text-sm font-medium">Balanced Mode</span>
                    </div>
                    <span className="text-sm text-[#6b6a63]">85% quality • 1.2s • $0.005</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Quality</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#d97757] h-2 rounded-full" style={{width: '85%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Speed (inverted)</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#d4a96a] h-2 rounded-full" style={{width: '50%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Cost Efficiency</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#d4a96a] h-2 rounded-full" style={{width: '60%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-[#c8a84c] rounded"></div>
                      <span className="text-sm font-medium">Research Mode</span>
                    </div>
                    <span className="text-sm text-[#6b6a63]">91% quality • 3.5s • $0.015</span>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Quality</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#c8a84c] h-2 rounded-full" style={{width: '91%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Speed (inverted)</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#c98888] h-2 rounded-full" style={{width: '17%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-[#6b6a63] mb-1">Cost Efficiency</div>
                      <div className="w-full bg-[#faf9f5] rounded-full h-2">
                        <div className="bg-[#c98888] h-2 rounded-full" style={{width: '20%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Routing Strategy */}
            <div className="bg-gradient-to-r from-[#fdf5f0] to-[#fdf8f0] rounded-2xl p-6 border-2 border-[#e8e6dc] shadow-sm">
              <h3 className="text-base font-semibold mb-3 flex items-center gap-2">
                <span>💡</span>
                <span>Intelligent Routing Strategy</span>
              </h3>
              <p className="text-sm mb-4">
                Based on these experiments, we implemented query-based routing to optimize for cost and quality:
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="px-2 py-1 bg-[#e8f5ec] text-[#6aaa7b] text-xs font-semibold rounded">EASY</div>
                    <span className="text-sm font-medium">→ Fastest Mode</span>
                  </div>
                  <p className="text-sm text-[#6b6a63]">
                    Saves 60% cost vs Balanced, only 7% quality loss. Good for straightforward lookups and simple queries.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="px-2 py-1 bg-[#fdf3e0] text-[#c8a84c] text-xs font-semibold rounded">MEDIUM</div>
                    <span className="text-sm font-medium">→ Balanced Mode</span>
                  </div>
                  <p className="text-sm text-[#6b6a63]">
                    Sweet spot for production workload. 85% quality at reasonable cost. Covers 60% of queries.
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="px-2 py-1 bg-[#fde8e8] text-[#c98888] text-xs font-semibold rounded">HARD</div>
                    <span className="text-sm font-medium">→ Research Mode</span>
                  </div>
                  <p className="text-sm text-[#6b6a63]">
                    Critical queries where quality matters. 13% improvement over Balanced worth the 3x cost increase.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-3 bg-[#faeade] rounded-lg">
                <p className="text-sm font-medium text-[#a05538]">
                  Result: 31% cost reduction vs always using Research mode, while maintaining 87% average quality (vs 91% all-Research).
                </p>
              </div>
            </div>
          </div>

          {/* Model Comparison */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Model Comparison</h2>
            <p className="text-sm text-[#6b6a63] mb-6">
              Run the same golden set across different models to compare performance, cost, and latency.
            </p>

            <div className="bg-white rounded-2xl border border-[#e8e6dc] shadow-sm overflow-hidden">
              <table className="w-full">
                <thead className="bg-[#faf9f5]">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Model</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Pass Rate</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Avg Latency</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Avg Cost</th>
                    <th className="px-6 py-3 text-left text-xs font-semibold text-[#6b6a63] uppercase">Cases</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e8e6dc]">
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">claude-sonnet-4-20250514</td>
                    <td className="px-6 py-4 text-sm">54%</td>
                    <td className="px-6 py-4 text-sm">1.2s</td>
                    <td className="px-6 py-4 text-sm">$0.005</td>
                    <td className="px-6 py-4 text-sm">28</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">gpt-4o</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">—</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">—</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">—</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">0</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 text-sm font-medium">claude-opus-4</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">—</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">—</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">—</td>
                    <td className="px-6 py-4 text-sm text-[#6b6a63]">0</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-[#fdf6e0] border border-[#e8d8a8] rounded-lg">
              <p className="text-sm text-[#a08040]">
                💡 <strong>Cost-Quality Tradeoff:</strong> Run evaluations across models to find the optimal balance. 
                Sometimes a faster, cheaper model performs adequately for your use case.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Judge Calibration Tab */}
      {activeTab === 'judge-calibration' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Judge Calibration Runs</h2>
          <p className="text-sm text-[#6b6a63] mb-6">
            Calibrate LLM-as-judge against human judgment to ensure automated scoring is reliable.
          </p>

          <div className="bg-[#faf9f5] border border-[#e8e6dc] rounded-lg p-4 mb-6">
            <p className="text-sm text-[#6b6a63]">
              💡 <strong>How calibration works:</strong> Upload human scores, run LLM judge on same cases, measure agreement.
              Iterate on judge prompts until alignment reaches target threshold (85%+).
            </p>
          </div>

          <div className="mb-6 flex gap-3">
            <button className="px-4 py-2 bg-[#d97757] text-white rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2">
              + New Calibration Run
            </button>
          </div>

          <div className="space-y-4">
            {/* Run 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e8f5ec] rounded-lg flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Calibration 2/11/2026</h3>
                    <p className="text-sm text-[#6b6a63]">Prompt: v1.2 • Model: gpt-4o • 2/11/2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#c98888]">40%</div>
                    <div className="text-xs text-[#6b6a63]">agreement</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Answer Correct</div>
                  <div className="text-lg font-semibold text-[#c98888]">54%</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Sources Correct</div>
                  <div className="text-lg font-semibold text-[#c98888]">18%</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Response Quality</div>
                  <div className="text-lg font-semibold text-[#c8a84c]">50%</div>
                </div>
              </div>

              <div className="text-sm text-[#6b6a63] mb-3">
                50 disagreements out of 100 cases
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  👁 View Details
                </button>
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  🗑 Delete
                </button>
              </div>
            </div>

            {/* Run 2 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e8f5ec] rounded-lg flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Calibration 2/11/2026</h3>
                    <p className="text-sm text-[#6b6a63]">Prompt: v1.2 • Model: gpt-4o • 2/11/2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#c8a84c]">49%</div>
                    <div className="text-xs text-[#6b6a63]">agreement</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Answer Correct</div>
                  <div className="text-lg font-semibold">76%</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Sources Correct</div>
                  <div className="text-lg font-semibold text-[#c98888]">24%</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Response Quality</div>
                  <div className="text-lg font-semibold text-[#c8a84c]">47%</div>
                </div>
              </div>

              <div className="text-sm text-[#6b6a63] mb-3">
                26 disagreements out of 50 cases
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  👁 View Details
                </button>
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  🗑 Delete
                </button>
              </div>
            </div>

            {/* Run 3 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#e8f5ec] rounded-lg flex items-center justify-center">
                    ✓
                  </div>
                  <div>
                    <h3 className="font-semibold">Calibration 2/10/2026</h3>
                    <p className="text-sm text-[#6b6a63]">Prompt: v1.1 • Model: gpt-4o • 2/10/2026</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <div className="text-3xl font-bold text-[#c8a84c]">46%</div>
                    <div className="text-xs text-[#6b6a63]">agreement</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-4">
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Answer Correct</div>
                  <div className="text-lg font-semibold">64%</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Sources Correct</div>
                  <div className="text-lg font-semibold text-[#c98888]">24%</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Response Quality</div>
                  <div className="text-lg font-semibold text-[#c8a84c]">49%</div>
                </div>
              </div>

              <div className="text-sm text-[#6b6a63] mb-3">
                73 disagreements out of 135 cases
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  👁 View Details
                </button>
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  🗑 Delete
                </button>
              </div>
            </div>
          </div>

          {/* 3-Question Framework */}
          <div className="mt-12 bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm">
            <h3 className="text-lg font-semibold mb-4">3-Question Evaluation Framework</h3>
            <p className="text-sm text-[#6b6a63] mb-6">
              Our evaluation simplifies scoring to reduce cognitive load while maintaining rigor. Each response is evaluated on three dimensions:
            </p>

            <div className="space-y-6">
              <div className="border-l-4 border-red-400 pl-4">
                <h4 className="font-semibold mb-2">1. Is the answer correct?</h4>
                <div className="text-sm text-[#6b6a63] mb-2">
                  <strong>Options:</strong> Yes • Partially • No
                </div>
                <div className="text-sm text-[#6b6a63]">
                  <strong>Issue tags when not "Yes":</strong> factually-incorrect, missing-info, contradicts-source, hallucinated, over-interpretation
                </div>
              </div>

              <div className="border-l-4 border-orange-400 pl-4">
                <h4 className="font-semibold mb-2">2. Are the sources correct?</h4>
                <div className="text-sm text-[#6b6a63] mb-2">
                  <strong>Options:</strong> Yes • Partially • No
                </div>
                <div className="text-sm text-[#6b6a63]">
                  <strong>Issue tags when not "Yes":</strong> missed-docs, wrong-docs, outdated-docs, bad-citations
                </div>
              </div>

              <div className="border-l-4 border-[#c8a84c] pl-4">
                <h4 className="font-semibold mb-2">3. Is the response appropriate?</h4>
                <div className="text-sm text-[#6b6a63] mb-2">
                  <strong>Options:</strong> Yes (Good) • Partially (Average) • No (Not Good)
                </div>
                <div className="text-sm text-[#6b6a63]">
                  <strong>Issue tags when not "Yes":</strong> too-verbose, too-brief, scope-creep, didnt-answer, poor-formatting, nonsense
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#faf9f5] rounded-lg">
              <p className="text-sm">
                <strong>Why this works:</strong> Simple yes/partial/no options reduce subjectivity and speed evaluation. 
                Issue tags provide granular failure analysis without overwhelming evaluators. This enables both human 
                review at scale and LLM-as-judge calibration.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Golden Set Evals Tab */}
      {activeTab === 'golden-set-evals' && (
        <div>
          <h2 className="text-xl font-semibold mb-2">Golden Set Evaluation Runs</h2>
          <p className="text-sm text-[#6b6a63] mb-6">
            Historical runs of agents evaluated against curated test sets. Track performance over time and identify regressions.
          </p>

          <div className="mb-6 flex gap-3">
            <button className="px-4 py-2 bg-[#d97757] text-white rounded-lg text-sm font-medium shadow-sm hover:shadow-md transition-all flex items-center gap-2">
              + New Eval Run
            </button>
            <select className="px-4 py-2 border border-[#e8e6dc] rounded-lg text-sm">
              <option>All Agents</option>
              <option>Intelligence Hub</option>
              <option>User Story Generator</option>
            </select>
          </div>

          <div className="space-y-4">
            {/* Run 1 */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#fdf3e0] rounded-lg flex items-center justify-center">
                    <span className="text-xl">⚠️</span>
                  </div>
                  <div>
                    <h3 className="font-semibold">Intelligence Hub - HelloWorks Set</h3>
                    <p className="text-sm text-[#6b6a63]">Run on 2/12/2026 • 28 cases</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-[#c8a84c]">54%</div>
                  <div className="text-xs text-[#6b6a63]">pass rate</div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4 mb-4">
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Passed</div>
                  <div className="text-lg font-semibold text-[#6aaa7b]">15</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Failed</div>
                  <div className="text-lg font-semibold text-[#c98888]">13</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Avg Latency</div>
                  <div className="text-lg font-semibold">1.2s</div>
                </div>
                <div>
                  <div className="text-xs text-[#6b6a63] mb-1">Avg Cost</div>
                  <div className="text-lg font-semibold">$0.005</div>
                </div>
              </div>

              <div className="flex gap-2">
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  📊 View Results
                </button>
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  🔍 View Cases
                </button>
                <button className="px-3 py-1.5 bg-white border border-[#e8e6dc] rounded text-sm hover:bg-[#faf9f5] transition-all">
                  🔄 Re-run
                </button>
              </div>
            </div>

            {/* Placeholder for more runs */}
            <div className="bg-white rounded-2xl p-6 border border-[#e8e6dc] shadow-sm">
              <div className="text-center py-8">
                <p className="text-sm text-[#6b6a63]">No additional evaluation runs yet.</p>
                <p className="text-xs text-[#6b6a63] mt-2">Run your first eval to start tracking agent performance over time.</p>
              </div>
            </div>
          </div>

          <div className="mt-8 p-4 bg-[#faf9f5] border border-[#e8e6dc] rounded-lg">
            <p className="text-sm text-[#6b6a63]">
              💡 <strong>Track Performance:</strong> Run evaluations regularly to catch regressions early.
              Compare results across runs to understand if changes improved or degraded quality.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}