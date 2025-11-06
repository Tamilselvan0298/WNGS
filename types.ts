export interface CoreGenomeItem {
  gene: string;
  interpretation: string;
}

export interface WNGSReport {
  genome_sequence: string;
  core_genome: CoreGenomeItem[];
  neuro_semantic_map: {
    semantic_clusters: string;
    topical_depth: string;
    conceptual_density: string;
    knowledge_flow: string;
    cognitive_friction_points: string;
  };
  behavior_genome: {
    scan_patterns: string;
    user_reading_intent: string;
    attention_bottlenecks: string;
    click_probability_zones: string;
    navigation_flow: string;
  };
  conversion_psychology: {
    emotional_triggers_used: string;
    conversion_blocks: string;
    persuasion_gaps: string;
    trust_accelerators: string;
    value_clarity: string;
  };
  brand_personality: {
    archetype: string;
    tone_dna: string;
    visual_identity_dna: string;
    consistency_score: string;
  };
  business_signature: {
    business_model: string;
    scalability_potential: string;
    customer_acquisition_dna: string;
    revenue_impacting_genes: string;
  };
  search_ecosystem_map: {
    content_indexability: string;
    search_entity_recognition: string;
    knowledge_graph_fit: string;
    schema_intelligence: string;
    semantic_authority_regions: string;
  };
  trust_physics: {
    score: number;
    explanation: string;
  };
  ranking_probability: {
    percent: number;
    time_to_rank: string;
    difficulty: "easy" | "moderate" | "hard" | "extreme";
  };
  conversion_probability: {
    current: number;
    optimized: number;
  };
  mutation_plan: Mutation[];
  evolution_simulation: {
    "7_days": string[];
    "30_days": string[];
    "90_days": string[];
  };
  final_genome_prediction: string;
}

export interface Mutation {
  gene: string;
  mutation_type: string;
  change_to_make: string;
  impact: string;
  difficulty: string;
}