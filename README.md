# AI Agent Evaluation Platform

> Systematic evaluation, experiment tracking, and performance optimization for RAG agents

I built this platform at PwC for evaluating production AI agents. This repo is a rebuild on my personal machine for public sharing.

---

## Overview

Modern AI teams building RAG systems face a core infrastructure challenge: **how do you systematically measure agent behavior, compare configurations, and optimize for production?**

This platform provides the evaluation infrastructure to answer those questions through:
- Controlled experimentation across RAG configurations
- Multi-dimensional performance measurement
- Calibrated automation for scaled evaluation
- Production readiness decision support

**Built for:** ML/AI teams developing production RAG systems who need to compare configurations, measure performance across test sets, optimize retrieval strategies, and make evidence-based deployment decisions.

---

## Core Abstraction

The core abstraction is the **experiment run**: a versioned test set evaluated against a specific agent configuration, producing structured metrics, failure artifacts, and regression comparisons.

This enables reproducible evaluation, systematic tradeoff analysis, and confidence-backed release decisions.

---

## Key Capabilities

### 1. **Experiment Tracking** (Experiments)

Systematic comparison of configurations through controlled evaluation runs.

**A/B Experiments:**
- RAG configuration comparison (Vector vs Hybrid vs Research modes)
- Performance breakdown by query difficulty and agent capability
- Cost/quality/speed tradeoff analysis
- Optimization insights for intelligent routing

**Judge Calibration:**
- LLM-as-judge alignment to human evaluation
- Agreement metrics across scoring dimensions
- Prompt iteration and accuracy tracking

**Model Comparison:**
- Side-by-side performance across LLM providers
- Latency and cost benchmarking

**Value:** Move from trial-and-error to systematic optimization through controlled experiments.

---

### 2. **Systematic Evaluation** (Golden Sets + Results)

Curated test sets with dimensional performance analysis.

**Golden Sets:**
- 528 test cases with multi-dimensional taxonomy
- Coverage tracking across test types, capabilities, difficulty, domains
- Import/export workflows for collaboration

**Results Dashboard:**
- Dimensional failure analysis (Answer Correctness, Sources, Response Quality)
- Granular issue breakdown (missing-info, wrong-docs, too-verbose, etc.)
- Performance slicing by difficulty, capability, domain
- Pass rate trends over time

**Value:** Understand not just "what failed" but "why it failed" and "where to optimize."

---

### 3. **Production Readiness** (Launch Readiness)

Threshold-based release gating with blocking conditions and decision artifacts.

**Agent Portfolio View:**
- Performance status and quality thresholds per agent
- Blocking conditions and alert system
- Owner tracking and target timelines
- Release decision documentation

**Value:** Production decisions based on explicit criteria and documented tradeoffs.

---

### 4. **Portfolio Observability** (Dashboard)

Aggregate visibility across the agent development lifecycle.

**Lifecycle Tracking:**
- Agent status across stages (Backlog → Build → Testing → Live)
- Quality metrics aggregated portfolio-wide
- System readiness indicators
- Recent activity feed

**Value:** Portfolio-level observability for prioritization and stakeholder communication.

---

### 5. **Evaluation Automation** (Prompt Calibration)

Calibrated LLM-as-judge for scaled evaluation capacity.

**3-Question Framework:**
- Simplified scoring (Answer/Sources/Response quality)
- Issue tag taxonomy for granular analysis
- Prompt registry and versioning

**Calibration Workflow:**
- Human-LLM agreement measurement
- Threshold-based automation trust
- Iteration tracking for prompt improvement

**Value:** Scale human evaluation capacity 10x through calibrated automation.

---

## Key Design Decisions

### 1. **3-Question Evaluation Framework**

Simplified from complex rubrics to three yes/partial/no questions:
- **Is the answer correct?** (Yes/Partially/No)
- **Are the sources correct?** (Yes/Partially/No)  
- **Is the response appropriate?** (Good/Average/Not Good)

Each dimension includes granular issue tags for detailed failure analysis.

**Why this works:**
- Reduces cognitive load - evaluators score 3x faster
- Maintains analytical depth through issue tags
- Enables LLM-as-judge calibration to 85%+ agreement
- Balances simplicity with actionable insights

**Implementation:**
- Human evaluators answer three simple questions
- Issue tags applied only when answer isn't "Yes"
- LLM judges trained to match human scoring patterns
- Disagreements flagged for human review

---

### 2. **Retrieval Configuration Experiments**

Tested 3 RAG configurations across 250 test cases to find optimal settings for different query types.

**Configurations:**
- **Fastest Mode:** Vector-only search, top-k=5, no reranking
- **Balanced Mode:** Hybrid search (vector + BM25), top-k=10, rerank top-3
- **Research Mode:** Hybrid + web search, top-k=15, rerank top-5, multi-hop reasoning

**Analysis Dimensions:**
- Query difficulty (Easy/Medium/Hard)
- Agent capability (Core Functional/Retrieval/Synthesis/Reasoning/Edge Cases)
- Performance metrics (pass rate, latency, cost)

**Key Findings:**

| Configuration | Overall | Easy | Medium | Hard | Latency | Cost |
|--------------|---------|------|--------|------|---------|------|
| Fastest | 78% | 78% ✓ | 74% | 65% | 0.6s ⚡ | $0.002 💰 |
| Balanced | 85% | 82% | 85% ✓ | 78% | 1.2s | $0.005 |
| Research | 91% | 85% | 89% | 91% ✓ | 3.5s | $0.015 |

**Optimization Strategy:**
Intelligent routing by query difficulty:
- Easy queries → Fastest mode (minimal quality loss, 3x faster)
- Medium queries → Balanced mode (best cost/quality tradeoff)
- Hard queries → Research mode (13% improvement worth 3x cost)

**Impact:** 31% cost reduction vs always-Research while maintaining 87% average quality (vs 91% all-Research).

**Insight:** Configuration isn't one-size-fits-all. Different query types benefit from different retrieval strategies. Systematic experimentation reveals the tradeoffs.

---

### 3. **Dimensional Test Taxonomy**

Test cases tagged across multiple dimensions for granular performance analysis.

**Taxonomy:**
- **Test Type:** Core Functional, Retrieval Isolated, Generation Isolated, Boundary & Edge, Adversarial & Safety, Regression Anchor
- **Capability:** Retrieval, Synthesis, Reasoning, Extraction, Clarification
- **Difficulty:** Easy, Medium, Hard
- **Domain:** BRD, FSD, SOW, Governance, Test Artifacts, Meeting/Comms

**Value:** Enables slicing results to understand "which configurations work best for what types of queries."

**Example Insights:**
- Research mode critical for Retrieval-Isolated tasks (92% vs 68% Fastest)
- Balanced mode sufficient for Core Functional (88% vs 90% Research - not worth 3x cost)
- Edge Cases demand comprehensive search regardless of difficulty (88% Research vs 55% Fastest)

**Coverage Dashboard:**
Visual tracking of test distribution across dimensions to identify gaps. Example: "We have 347 Core Functional tests but only 20 Adversarial tests - need more safety coverage."

---

### 4. **Production Readiness Framework**

Threshold-based release gating with structured decision artifacts.

**Beyond Point-in-Time Metrics:**
- Quality thresholds per agent
- Blocking conditions with severity levels
- Decision documentation and approval workflow
- Risk assessment tracking

**Example Decision Artifact:**
"PwC Intelligence Hub at 54% pass rate - below 70% threshold. Blocking: Source citation accuracy (62%). Recommended action: Focus retrieval tuning on document selection. Target resolution: 2/28."

**Value:**
Production decisions involve tradeoffs and risk assessment. This provides infrastructure for structured decisions with documented reasoning.

---

## Experiment Workflow Example

**Scenario:** Optimize retrieval for PwC Intelligence Hub agent

**1. Hypothesis**
Different query types may benefit from different retrieval strategies. Easy queries might not need expensive hybrid search.

**2. Experiment Design**
- Configurations: Fastest, Balanced, Research
- Test set: 250 cases from HelloWorks golden set
- Analysis: Slice by difficulty and capability

**3. Execution**
- Run all 3 configs against same test set
- Measure pass rate, latency, cost per query
- Tag failures with issue types

**4. Analysis**
Performance by difficulty:
- Easy: Fastest 78%, Balanced 82%, Research 85%
- Medium: Fastest 74%, Balanced 85%, Research 89%
- Hard: Fastest 65%, Balanced 78%, Research 91%

Performance by capability:
- Retrieval-Isolated: Fastest 68%, Balanced 79%, Research 92%
- Core Functional: Fastest 82%, Balanced 88%, Research 90%

**5. Insight**
Research mode provides diminishing returns for Easy queries (7% improvement) but critical gains for Hard queries (26% improvement) and Retrieval-Isolated tasks (24% improvement).

**6. Optimization Decision**
Implement intelligent routing:
- Classify query difficulty at runtime
- Route Easy → Fastest, Medium → Balanced, Hard → Research
- Expected: 87% quality at 31% lower cost

**7. Validation**
Run routing strategy against holdout set to confirm cost/quality projections.

---

## Technical Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Styling
- **React Hooks** - State management

---

## Running Locally
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

---

## Platform Modules

### Dashboard
Agent lifecycle stages, quality metrics, system status, activity feed

### Experiments
- A/B Experiments: RAG config comparison, performance analysis
- Judge Calibration: LLM-human alignment measurement
- Golden Set Evals: Test execution history, regression tracking

### Launch Readiness
Agent portfolio cards, quality thresholds, blocking conditions, release gating

### Results
Top failure drivers, issue tag breakdown, performance by difficulty/capability/domain, trends

### Golden Sets
Test case management, coverage dashboard, dimensional taxonomy, import/export

### Prompt Calibration
Judge prompt registry, calibration status, accuracy tracking, configuration

---

## Design Philosophy

**Systematic over ad-hoc:** Controlled experiments replace trial-and-error
**Multi-dimensional analysis:** Understand performance across query types, not just aggregates
**Calibrated automation:** Scale human evaluation through aligned LLM judges
**Production-oriented:** Decision support for real deployment trade-offs
**Evidence-based:** Data-driven optimization, not gut feel

---

## Future Directions

**Natural extensions:**
- Real-time evaluation execution engine
- Integration with vector databases and LLM APIs
- Statistical significance testing for experiments
- Automated regression detection and alerting
- Collaborative review workflows (case assignment, annotation tracking)
- Trace-level debugging (retrieval steps, LLM calls, tool use)
- Cost tracking and budget management
- Prompt optimization suggestions based on failure patterns

---

## About

This platform was built to enable systematic evaluation and optimization of AI agents. The frameworks and analysis approaches reflect production requirements: comparing configurations, measuring behavior across test sets, optimizing for cost and quality, and making evidence-based deployment decisions.

---

## Contact

Questions or feedback? Open an issue.

**Repository:** [github.com/seunghyoo125/ai-agent-quality-platform](https://github.com/seunghyoo125/ai-agent-quality-platform)