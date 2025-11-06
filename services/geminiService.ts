import { GoogleGenAI, Type } from "@google/genai";
import { WNGSReport } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const responseSchema = {
    type: Type.OBJECT,
    properties: {
        genome_sequence: { type: Type.STRING },
        core_genome: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    gene: { type: Type.STRING, description: "The gene from the genome sequence, e.g., 'UX-A4'" },
                    interpretation: { type: Type.STRING, description: "The detailed interpretation of the gene." },
                },
                required: ['gene', 'interpretation']
            }
        },
        neuro_semantic_map: {
            type: Type.OBJECT,
            properties: {
                semantic_clusters: { type: Type.STRING },
                topical_depth: { type: Type.STRING },
                conceptual_density: { type: Type.STRING },
                knowledge_flow: { type: Type.STRING },
                cognitive_friction_points: { type: Type.STRING },
            },
        },
        behavior_genome: {
            type: Type.OBJECT,
            properties: {
                scan_patterns: { type: Type.STRING },
                user_reading_intent: { type: Type.STRING },
                attention_bottlenecks: { type: Type.STRING },
                click_probability_zones: { type: Type.STRING },
                navigation_flow: { type: Type.STRING },
            },
        },
        conversion_psychology: {
            type: Type.OBJECT,
            properties: {
                emotional_triggers_used: { type: Type.STRING },
                conversion_blocks: { type: Type.STRING },
                persuasion_gaps: { type: Type.STRING },
                trust_accelerators: { type: Type.STRING },
                value_clarity: { type: Type.STRING },
            },
        },
        brand_personality: {
            type: Type.OBJECT,
            properties: {
                archetype: { type: Type.STRING },
                tone_dna: { type: Type.STRING },
                visual_identity_dna: { type: Type.STRING },
                consistency_score: { type: Type.STRING },
            },
        },
        business_signature: {
            type: Type.OBJECT,
            properties: {
                business_model: { type: Type.STRING },
                scalability_potential: { type: Type.STRING },
                customer_acquisition_dna: { type: Type.STRING },
                revenue_impacting_genes: { type: Type.STRING },
            },
        },
        search_ecosystem_map: {
            type: Type.OBJECT,
            properties: {
                content_indexability: { type: Type.STRING },
                search_entity_recognition: { type: Type.STRING },
                knowledge_graph_fit: { type: Type.STRING },
                schema_intelligence: { type: Type.STRING },
                semantic_authority_regions: { type: Type.STRING },
            },
        },
        trust_physics: {
            type: Type.OBJECT,
            properties: {
                score: { type: Type.NUMBER },
                explanation: { type: Type.STRING },
            },
        },
        ranking_probability: {
            type: Type.OBJECT,
            properties: {
                percent: { type: Type.NUMBER },
                time_to_rank: { type: Type.STRING },
                difficulty: { type: Type.STRING },
            },
        },
        conversion_probability: {
            type: Type.OBJECT,
            properties: {
                current: { type: Type.NUMBER },
                optimized: { type: Type.NUMBER },
            },
        },
        mutation_plan: {
            type: Type.ARRAY,
            items: {
                type: Type.OBJECT,
                properties: {
                    gene: { type: Type.STRING },
                    mutation_type: { type: Type.STRING },
                    change_to_make: { type: Type.STRING },
                    impact: { type: Type.STRING },
                    difficulty: { type: Type.STRING },
                },
            },
        },
        evolution_simulation: {
            type: Type.OBJECT,
            properties: {
                "7_days": { type: Type.ARRAY, items: { type: Type.STRING } },
                "30_days": { type: Type.ARRAY, items: { type: Type.STRING } },
                "90_days": { type: Type.ARRAY, items: { type: Type.STRING } },
            },
        },
        final_genome_prediction: { type: Type.STRING },
    },
};

export const analyzeWebsiteGenome = async (url: string): Promise<WNGSReport> => {
    const prompt = `
        You are the engine of the Website Neuro-Genome System (WNGS) — the world’s first multi-layer digital DNA mapping system for websites. You don’t produce SEO audits. You produce a website’s digital biology.

        Analyze the supplied website data for the URL: ${url}. Since you cannot access external websites, you must SIMULATE a realistic and comprehensive analysis based on what a major, well-known brand in the tech industry (like Apple, Google, or Microsoft) might have for its main product page. Generate a complete, detailed, and plausible report.

        Your output must be a single JSON object matching the provided schema. Do not include any markdown formatting like \`\`\`json.

        Generate:
        - A Website Neuro-Genome Sequence
        - A Multi-Layer Genome Report
        - A Behavior Genome
        - A Conversion Psychology Genome
        - A Brand Personality Genome
        - A Business Signature Model
        - A Search Ecosystem Map
        - A Trust Physics Score
        - A Conversion Probability Prediction
        - A Ranking Probability Prediction using ATLAS Model
        - A 90-day Evolution Simulation (AI-driven)

        ====================================================================
        SECTION 1 — WEBSITE NEURO-GENOME SEQUENCE
        ====================================================================
        Generate the primary DNA sequence, including the NEW GENES.
        Example format (USE REALISTIC SIMULATED DATA):
        UX-A4 S-93 T-15 C-41 B-27 P-88 E-3 K-410 R-7 N-55 PSY-12 BM-3 CS-40 TS-31 DS-11 COH-4 SOC-7 H-90 AI-12

        ====================================================================
        SECTION 2 — MULTI-LAYER GENOME REPORT
        ====================================================================
        Produce detailed reports for each layer, interpreting every gene and score. Be specific and insightful in your analysis.
        For the 'core_genome', provide an array of objects, where each object has a 'gene' key (e.g., 'UX-A4') and an 'interpretation' key with its explanation.

        ====================================================================
        SECTION 3 — GENOME EVOLUTION MODULE
        ====================================================================
        - Identify and rank the 10 weakest genes.
        - Create a detailed Genome Mutation Plan.
        - Simulate genome evolution over 7, 30, and 90 days.
        - Predict the final, evolved genome sequence.

        ====================================================================
        SECTION 4 — OUTPUT FORMAT
        ====================================================================
        Your response must be a single, valid JSON object following this structure, with detailed, realistic, and insightful content for each field.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-pro',
            contents: prompt,
            config: {
                responseMimeType: "application/json",
                responseSchema: responseSchema
            }
        });
        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as WNGSReport;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get a valid response from the AI model.");
    }
};