import React, { createContext, useContext, useState, ReactNode } from "react";

type Language = "ko" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

const translations = {
  ko: {
    // Hero Section
    heroHeadline: "필리핀 치과 임플란트 시장의 혁신을 이끌다",
    heroSubheadline: "한국 선진 기술 × 실전 중심 교육 × 통합 플랫폼",
    primaryCTA: "파트너십 문의",
    secondaryCTA: "교육 프로그램 보기",

    // Value Proposition
    valueTitle: "WeDent의 핵심 가치",
    valueSubtitle:
      "필리핀 치과 임플란트 시장에서 성공을 위한 세 가지 핵심 요소",
    practicalEducation: "실전 중심 교육",
    practicalEducationDesc:
      "현장에서 바로 적용 가능한 실무 중심의 교육 프로그램으로 치과 전문가를 양성합니다. 이론과 실습이 균형 잡힌 커리큘럼을 제공합니다.",
    integratedPlatform: "통합 플랫폼",
    integratedPlatformDesc:
      "교육부터 임상, 장비 공급까지 치과 임플란트 시장의 모든 요소를 아우르는 원스톱 솔루션을 제공합니다.",
    provenGrowth: "검증된 성장성",
    provenGrowthDesc:
      "필리핀 치과 임플란트 시장의 급속한 성장과 함께 검증된 비즈니스 모델로 지속 가능한 수익을 창출합니다.",

    // Market Opportunity
    marketTitle: "시장 기회",
    marketSubtitle: "필리핀 치과 임플란트 시장은 빠르게 성장하고 있습니다",
    marketProblemTitle: "시장 문제점과 해결책",
    problemLabel: "문제",
    solutionLabel: "해결",
    problemTitle: "체계적인 임플란트 교육 부재",
    problemDesc:
      "필리핀 치과의사들은 체계적인 임플란트 교육을 받을 기회가 제한적이며, 실습 중심 교육이 부족합니다.",
    solutionTitle: "한국형 실전 교육 시스템",
    solutionDesc:
      "WeDent의 단계별 실습 중심 교육과 한국 전문가 멘토링으로 임상 역량을 빠르게 향상시킵니다.",
    marketPotentialLabel: "시장 성장 잠재력",
    annualGrowthLabel: "연평균 시장 성장률",
    dentistsCountLabel: "필리핀 치과의사 수",
    marketSizeLabel: "2030년 시장 규모",
    demandIncreaseLabel: "임플란트 수요 증가",
    growthFactorsTitle: "시장 성장 요인",
    growthFactor1: "중산층 인구 증가 및 치과 의료 접근성 향상",
    growthFactor2: "미용 치과에 대한 관심 증가",
    growthFactor3: "치과 의료 관광 산업 성장",
    growthFactor4: "정부의 의료 인프라 투자 확대",
    companyIntroTitle: "WeDent Corp. 소개",
    companyMissionTitle: "우리의 미션",
    companyMission:
      "한국의 선진 치과 기술과 교육 노하우를 필리핀에 전파하여 현지 치과 의료 수준을 향상시키고, 지속 가능한 비즈니스 생태계를 구축합니다.",
    companyVisionTitle: "우리의 비전",
    companyVision:
      "2030년까지 필리핀 치과 임플란트 시장의 선도 기업이 되어 동남아시아 전체로 사업을 확장합니다.",
    coreCompetencyTitle: "핵심 역량",
    competency1: "한국 치과 기술 전문성",
    competency2: "현지 시장 이해도",
    competency3: "통합 교육 시스템",
    competency4: "파트너십 네트워크",

    // Education Program
    educationTitle: "교육 프로그램",
    educationSubtitle: "실전 중심의 차별화된 임플란트 교육 프로그램",
    beginnerLevel: "초급반",
    intermediateLevel: "중급반",
    advancedLevel: "고급반",
    programCost: "프로그램 비용",
    programFeatures: "프로그램 특징",
    applyProgram: "프로그램 신청하기",

    // Program Descriptions
    beginnerDescription:
      "임플란트 시술의 기본 원리와 기초 술기를 배우는 과정입니다. 치과의사 경력 1-2년 차에 적합합니다.",
    intermediateDescription:
      "다양한 케이스 스터디와 고급 술기를 배우는 심화 과정입니다. 임플란트 시술 경험이 있는 치과의사에게 적합합니다.",
    advancedDescription:
      "최신 임플란트 기술과 복잡한 수술 케이스를 다루는 전문가 과정입니다. 풍부한 임상 경험을 가진 치과의사를 위한 과정입니다.",

    // Program Features
    beginnerFeature1: "임플란트 기초 이론",
    beginnerFeature2: "기본 수술 술기 실습",
    beginnerFeature3: "환자 케이스 분석",
    beginnerFeature4: "수술 후 관리 방법",

    intermediateFeature1: "복잡한 케이스 관리",
    intermediateFeature2: "GBR 및 골이식 술기",
    intermediateFeature3: "상악동 거상술",
    intermediateFeature4: "디지털 가이드 수술",
    intermediateFeature5: "합병증 관리",

    advancedFeature1: "전체 구강 재건술",
    advancedFeature2: "즉시 하중 프로토콜",
    advancedFeature3: "심미 임플란트 술기",
    advancedFeature4: "디지털 워크플로우 통합",
    advancedFeature5: "복잡한 케이스 해결",
    advancedFeature6: "멘토링 및 코칭",

    // CTA Section
    ctaTitle: "파트너십 문의",
    ctaSubtitle:
      "WeDent와 함께 필리핀 치과 임플란트 시장의 성장 기회를 활용하세요.",
    contactPerson: "담당자:",
    contactPhone: "연락처:",
    nameLabel: "이름",
    namePlaceholder: "이름을 입력하세요",
    companyLabel: "회사명",
    companyPlaceholder: "회사명을 입력하세요",
    emailLabel: "이메일",
    emailPlaceholder: "이메일을 입력하세요",
    messageLabel: "메시지",
    messagePlaceholder: "문의 내용을 입력하세요",
    submitButton: "파트너십 제안하기",

    // Company Profile - Detailed Information
    companyOverviewTitle: "회사 개요",
    companyOverviewSubtitle: "필리핀 치과 임플란트 시장의 혁신을 이끌다",
    companyOverviewDesc:
      "WeDent Corp.는 필리핀 치과 임플란트 시장의 새로운 기준을 제시하는 혁신적인 기업입니다. 대한민국 임플란트 기술의 선두 주자인 우리모두의 주식회사(WooriModoo Inc.)의 필리핀 현지 법인으로서, 한국의 선진 의료 기술과 교육 노하우를 필리핀 현지에 맞게 통합하여 제공하고 있습니다.",
    companyVisionDesc:
      "저희의 비전은 필리핀 치과의사들이 세계적 수준의 임플란트 시술 역량을 갖추고, 모든 필리핀 국민이 양질의 치과 임플란트 서비스를 누릴 수 있는 미래를 만드는 것입니다. 이를 통해 하나님의 말씀과 사랑을 나누는 통로로서 생명을 살리는 일에 앞장서는 기업이 되고자 합니다.",

    businessNeedTitle: "사업의 필요성",
    businessNeedSubtitle: "필리핀 임플란트 시장의 기회와 도전",
    marketSizeDesc:
      "필리핀은 임플란트 시장의 거대한 잠재력을 가진 국가입니다. 2023년 기준 1,100만 달러 규모(약 148억 원)의 시장은 2030년까지 연평균 10.3% 성장하여 2,180만 달러(약 293억 원)에 이를 것으로 전망됩니다 (출처: Insights10 보고서, 2023). 약 35,000명 이상의 필리핀 치과의사 수 (출처: Manila Bulletin, 2024) 또한 거대한 잠재 시장을 시사합니다.",
    marketChallengesTitle: "시장의 한계",
    challenge1:
      "실습 중심 교육의 부재: 많은 치과의사들이 임플란트 이론 교육을 이수했음에도 불구하고, 실제 임상에서 자신 있게 시술할 수 있는 충분한 실습 기회가 부족하여 임상 역량 강화에 어려움을 겪습니다.",
    challenge2:
      "높은 수입 제품 의존도: 대부분의 임플란트 제품이 고가에 수입되어, 환자와 치과의사 모두에게 경제적 부담으로 작용합니다.",
    challenge3:
      "심각한 구강 건강 문제: 필리핀 인구의 87.4%가 충치, 78%가 잇몸 질환을 앓고 있어(출처: NMEDS), 임플란트 시술에 대한 근본적인 수요가 매우 높습니다.",

    solutionTitle: "우리의 솔루션",
    solutionSubtitle: "통합 플랫폼을 통한 가치 창출",

    innovativeEducationTitle: "혁신적인 실습 중심 교육",
    educationFeature1:
      "한국 전문가 중심의 집중형 임플란트 교육(월 1회)을 제공합니다.",
    educationFeature2:
      "초급반부터 수료 후 즉시 임상 적용이 가능하도록 실제 수술 실습에 집중하며, 임상 자신감을 부여합니다.",
    educationFeature3:
      "특히 중급 및 고급반에서는 숙련된 강사와 함께 실제 환자의 어려운 임플란트 케이스를 1:1 또는 1:3의 소수 정예로 진단부터 수술 과정까지 공동으로 진행하여, 필리핀 현지에서 찾아보기 힘든 최고 수준의 실전 역량을 강화합니다. (교육 시설은 최대 50명 동시 실습 가능 규모의 최첨단 시설로 구축 예정)",

    productSupplyTitle: "교육과 연계된 자사 임플란트 제품 공급",
    productSupplyDesc1:
      "교육 과정에서 사용되는 임플란트 키트 및 제품을 직접 공급하여, 치과의사들이 교육 후에도 익숙한 제품으로 실제 임상에서 시술을 이어갈 수 있도록 지원합니다.",
    productSupplyDesc2:
      "이를 통해 필리핀 내 주요 치과 병원 및 클리닉을 대상으로 OEM 또는 ODM 수출을 확대할 계획입니다.",

    manufacturingExpansionTitle: "중장기 현지 제조 확장",
    manufacturingExpansionDesc:
      "궁극적으로 필리핀 현지에 임플란트 조립 및 제조 라인을 구축하여, 고품질 임플란트 제품을 보다 저렴한 비용으로 안정적으로 공급할 계획입니다.",

    differentiatorTitle: "WeDent Corp.만의 차별점",
    differentiator1:
      "독보적인 실전 중심 교육: 이론에 치우친 기존 교육과 달리, 수료 후 즉시 임상 적용 가능한 압도적인 실습량과 실제 임상 케이스 참여 기회를 제공합니다.",
    differentiator2:
      "강력한 파트너십: 필리핀 명문 치과대학 CEU(Centro Escolar University)와의 공식 협력을 통해 안정적인 교육생 모집 채널을 확보하고 교육 신뢰도를 극대화합니다.",
    differentiator3:
      "한국 전문가 집단: 대한민국 임플란트 학계를 이끌고 임상 경험이 풍부한 전문 의료진과 명문 치과대학 교수진이 직접 지도하여 글로벌 수준의 교육을 제공합니다.",
    differentiator4:
      "수직 계열화된 비즈니스 모델: 교육, 제품 공급, A/S, 그리고 미래의 현지 제조까지 통합하는 독점적인 모델로, 시장 플레이어들이 제품 판매에만 집중하는 것과 차별화됩니다.",

    financialPerformanceTitle: "재무 성과 및 성장 전략",
    revenueModelTitle: "수익 모델 다각화",
    revenueModelDesc:
      "교육 수강료(초급: 150만~250만 원, 중급/고급: 400만~500만 원), 실습 제품/키트 판매, 교육 수료생 대상 제품 B2B 공급, 그리고 향후 필리핀 내 OEM/ODM 수출을 통해 안정적인 수익을 창출합니다.",
    projectedRevenueTitle: "예상 매출 (법인세 등 미반영 영업이익)",
    year1Revenue:
      "1년차: 총 매출 7.5억 원 (영업이익 1.9억 원) - 초기 교육 안정화 집중",
    year2Revenue:
      "2년차: 총 매출 27.5억 원 (영업이익 13.84억 원) - 제품 판매 및 중급/고급반 확대",
    year3Revenue:
      "3년차: 총 매출 50억 원 (영업이익 27.92억 원) - 사업 확장 본격화",

    growthRoadmapTitle: "성장 로드맵",
    phase1:
      "1단계 (2025.6~12): 필리핀 교육 안정화 및 수익 확보 (초급반 300명 목표)",
    phase2: "2단계 (2026~27): 중급/고급반 런칭, 필리핀 제품 유통망 확대",
    phase3: "3단계 (2027~28): 필리핀 현지 제조 공장 설립 및 운영 시작",
    phase4:
      "4단계 (2029 이후): 한국 본사 제조공장 설립 및 프리미엄 임플란트 브랜드 'Made in Korea Implant' 런칭, 필리핀 시장 수출 확대",

    partnershipInviteTitle: "WeDent Corp.와 함께할 파트너를 찾습니다",
    partnershipInviteDesc:
      "WeDent Corp.는 필리핀 치과 임플란트 시장의 거대한 잠재력을 현실로 만들고, 동시에 의료 봉사의 비전을 실현할 역량과 준비를 갖추고 있습니다. 저희의 혁신적인 사업 모델과 성장 가능성에 공감하고, 함께 비전을 공유하며 성장할 파트너를 찾습니다.",
    partnershipTypesDesc:
      "투자를 통한 동반 성장, 전략적 파트너십, 또는 OEM/ODM 제안 등 어떠한 형태의 협력도 환영합니다.",
    contactInfo: "문의처: 대표 조은주, 010-3883-2195, salvus02@naver.com",

    // Footer
    footerTagline: "필리핀 치과 임플란트 시장의 혁신을 이끌다",
    contactTitle: "연락처",
    quickLinksTitle: "바로가기",
    educationProgramLink: "교육 프로그램",
    partnershipLink: "파트너십 문의",
    aboutLink: "회사 소개",
    copyright: "© 2024 WeDent Corp. All rights reserved.",
  },
  en: {
    // Hero Section
    heroHeadline: "Leading Innovation in Philippine Dental Implant Market",
    heroSubheadline:
      "Korean Advanced Technology × Practical Education × Integrated Platform",
    primaryCTA: "Partnership Inquiry",
    secondaryCTA: "View Education Program",

    // Value Proposition
    valueTitle: "WeDent's Core Values",
    valueSubtitle:
      "Three key elements for success in the Philippine dental implant market",
    practicalEducation: "Practical Education",
    practicalEducationDesc:
      "We train dental professionals with hands-on education programs that can be immediately applied in the field. We provide a balanced curriculum of theory and practice.",
    integratedPlatform: "Integrated Platform",
    integratedPlatformDesc:
      "We provide a one-stop solution that covers all aspects of the dental implant market from education to clinical practice and equipment supply.",
    provenGrowth: "Proven Growth",
    provenGrowthDesc:
      "We generate sustainable profits with a proven business model alongside the rapid growth of the Philippine dental implant market.",

    // Market Opportunity
    marketTitle: "Market Opportunity",
    marketSubtitle: "The Philippine dental implant market is growing rapidly",
    marketProblemTitle: "Market Problems & Solutions",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    problemTitle: "Lack of Systematic Implant Education",
    problemDesc:
      "Filipino dentists have limited opportunities to receive systematic implant education, and practical training is insufficient.",
    solutionTitle: "Korean Practical Education System",
    solutionDesc:
      "WeDent's step-by-step practical education and Korean expert mentoring rapidly improve clinical capabilities.",
    marketPotentialLabel: "Market Growth Potential",
    annualGrowthLabel: "Annual Market Growth Rate",
    dentistsCountLabel: "Number of Filipino Dentists",
    marketSizeLabel: "Market Size by 2030",
    demandIncreaseLabel: "Implant Demand Increase",
    growthFactorsTitle: "Market Growth Factors",
    growthFactor1:
      "Growing middle class and improved dental care accessibility",
    growthFactor2: "Increasing interest in cosmetic dentistry",
    growthFactor3: "Growth of dental medical tourism industry",
    growthFactor4: "Government expansion of medical infrastructure investment",
    companyIntroTitle: "About WeDent Corp.",
    companyMissionTitle: "Our Mission",
    companyMission:
      "To spread Korea's advanced dental technology and educational know-how to the Philippines, improving local dental care standards and building a sustainable business ecosystem.",
    companyVisionTitle: "Our Vision",
    companyVision:
      "To become the leading company in the Philippine dental implant market by 2030 and expand business throughout Southeast Asia.",
    coreCompetencyTitle: "Core Competencies",
    competency1: "Korean Dental Technology Expertise",
    competency2: "Local Market Understanding",
    competency3: "Integrated Education System",
    competency4: "Partnership Network",

    // Education Program
    educationTitle: "Education Program",
    educationSubtitle:
      "Differentiated implant education program focused on practical application",
    beginnerLevel: "Beginner Level",
    intermediateLevel: "Intermediate Level",
    advancedLevel: "Advanced Level",
    programCost: "Program Cost",
    programFeatures: "Program Features",
    applyProgram: "Apply for Program",

    // Program Descriptions
    beginnerDescription:
      "A course to learn the basic principles and fundamental techniques of implant procedures. Suitable for dentists with 1-2 years of experience.",
    intermediateDescription:
      "An advanced course that covers various case studies and advanced techniques. Suitable for dentists with implant procedure experience.",
    advancedDescription:
      "An expert course covering the latest implant technologies and complex surgical cases. For dentists with extensive clinical experience.",

    // Program Features
    beginnerFeature1: "Basic Implant Theory",
    beginnerFeature2: "Basic Surgical Technique Practice",
    beginnerFeature3: "Patient Case Analysis",
    beginnerFeature4: "Post-operative Care Methods",

    intermediateFeature1: "Complex Case Management",
    intermediateFeature2: "GBR and Bone Grafting Techniques",
    intermediateFeature3: "Sinus Lift Procedures",
    intermediateFeature4: "Digital Guided Surgery",
    intermediateFeature5: "Complication Management",

    advancedFeature1: "Full Mouth Reconstruction",
    advancedFeature2: "Immediate Loading Protocols",
    advancedFeature3: "Aesthetic Implant Techniques",
    advancedFeature4: "Digital Workflow Integration",
    advancedFeature5: "Complex Case Resolution",
    advancedFeature6: "Mentoring and Coaching",

    // CTA Section
    ctaTitle: "Partnership Inquiry",
    ctaSubtitle:
      "Take advantage of growth opportunities in the Philippine dental implant market with WeDent.",
    contactPerson: "Contact Person:",
    contactPhone: "Phone:",
    nameLabel: "Name",
    namePlaceholder: "Enter your name",
    companyLabel: "Company",
    companyPlaceholder: "Enter your company name",
    emailLabel: "Email",
    emailPlaceholder: "Enter your email",
    messageLabel: "Message",
    messagePlaceholder: "Enter your inquiry",
    submitButton: "Submit Partnership Proposal",

    // Company Profile - Detailed Information
    companyOverviewTitle: "Company Overview",
    companyOverviewSubtitle:
      "Leading Innovation in the Philippine Dental Implant Market",
    companyOverviewDesc:
      "WeDent Corp. is an innovative company setting new standards in the Philippine dental implant market. As the Philippine local entity of WooriModoo Inc., a leader in South Korean implant technology, we integrate Korea's advanced medical expertise and educational know-how to suit the local Philippine context.",
    companyVisionDesc:
      "Our vision is to empower Filipino dentists with world-class implant skills and ensure that all Filipinos have access to high-quality dental implant services. Through this, we aspire to be a company that takes the lead in saving lives, acting as a channel for God's Word and love.",

    businessNeedTitle: "The Business Need",
    businessNeedSubtitle:
      "Opportunities and Challenges in the Philippine Implant Market",
    marketSizeDesc:
      "The Philippines presents immense potential in the dental implant market. Valued at approximately $11 million (₩14.8 billion) in 2023, the market is projected to grow at a CAGR of 10.3% to reach $21.8 million (₩29.3 billion) by 2030 (Source: Insights10 Report, 2023). With over 35,000 Filipino dentists (Source: Manila Bulletin, 2024), this indicates a massive potential market.",
    marketChallengesTitle: "Market Limitations",
    challenge1:
      "Lack of Practical, Hands-on Training: Despite many dentists completing theoretical implant education, they often lack sufficient hands-on practical experience to confidently perform procedures, creating difficulties in enhancing clinical capabilities.",
    challenge2:
      "High Reliance on Imported Products: Most implant products are expensive imports, creating a financial burden for both patients and dentists.",
    challenge3:
      "Significant Oral Health Issues: 87.4% of the Filipino population suffers from tooth decay and 78% from gum disease (Source: NMEDS), indicating a fundamental high demand for implant procedures.",

    solutionTitle: "Our Solution",
    solutionSubtitle: "Value Creation Through an Integrated Platform",

    innovativeEducationTitle: "Revolutionary Hands-on Education",
    educationFeature1:
      "We offer intensive implant training led by South Korean experts (once a month).",
    educationFeature2:
      "From beginner courses, we focus on extensive practical surgery training to ensure immediate clinical application and build confidence upon completion.",
    educationFeature3:
      "Particularly for intermediate and advanced courses, experienced instructors collaboratively guide participants through complex real-world implant cases in small groups (1:1 or 1:3 ratio) from diagnosis to surgical procedures, strengthening the highest level of practical capabilities that are hard to find locally in the Philippines. (Educational facilities are planned to be built as state-of-the-art facilities capable of accommodating up to 50 simultaneous practical sessions)",

    productSupplyTitle: "In-house Implant Product Supply Linked to Education",
    productSupplyDesc1:
      "We directly supply implant kits and products used in educational courses, enabling dentists to continue procedures in actual clinical practice with familiar products even after education.",
    productSupplyDesc2:
      "Through this, we plan to expand OEM or ODM exports targeting major dental hospitals and clinics in the Philippines.",

    manufacturingExpansionTitle:
      "Mid to Long-term Local Manufacturing Expansion",
    manufacturingExpansionDesc:
      "Ultimately, we plan to establish implant assembly and manufacturing lines locally in the Philippines to provide high-quality implant products at more affordable costs with stable supply.",

    differentiatorTitle: "WeDent Corp.'s Unique Differentiators",
    differentiator1:
      "Unrivaled Practical Training: Unlike existing theoretical-heavy programs, we offer an overwhelming amount of hands-on practice and real clinical case participation opportunities ensuring immediate clinical readiness upon completion.",
    differentiator2:
      "Strong Partnership: Our official collaboration with CEU (Centro Escolar University), the leading dental university in the Philippines, secures stable student recruitment channels and maximizes educational credibility.",
    differentiator3:
      "South Korean Expert Faculty: Our programs are led by highly experienced dental professionals and esteemed university professors who lead South Korea's implant academia and have rich clinical experience, providing global-level education.",
    differentiator4:
      "Vertically Integrated Business Model: Our unique model integrates education, product supply, A/S, and future local manufacturing, differentiating us from market players who focus only on product sales.",

    financialPerformanceTitle: "Financial Performance and Growth Strategy",
    revenueModelTitle: "Diversified Revenue Streams",
    revenueModelDesc:
      "We generate stable revenue from education fees (Beginner: ₩1.5-2.5 million, Intermediate/Advanced: ₩4-5 million), sales of practice kits/products, B2B product supply to course graduates, and future OEM/ODM exports within the Philippines.",
    projectedRevenueTitle:
      "Projected Revenue (Operating Profit excluding corporate tax)",
    year1Revenue:
      "Year 1: Total Revenue ₩750 million (Operating Profit ₩190 million) – Focus on initial education stabilization",
    year2Revenue:
      "Year 2: Total Revenue ₩2.75 billion (Operating Profit ₩1.384 billion) – Expansion of product sales and Intermediate/Advanced courses",
    year3Revenue:
      "Year 3: Total Revenue ₩5 billion (Operating Profit ₩2.792 billion) – Full-scale business expansion",

    growthRoadmapTitle: "Growth Roadmap",
    phase1:
      "Phase 1 (Jun-Dec 2025): Stabilize Philippine education operations and secure revenue (targeting 300 beginner students)",
    phase2:
      "Phase 2 (2026-2027): Launch Intermediate/Advanced courses, expand product distribution network in the Philippines",
    phase3:
      "Phase 3 (2027-2028): Establish and begin operating local manufacturing facilities in the Philippines",
    phase4:
      "Phase 4 (2029 onwards): Establish South Korean headquarters' manufacturing facility and launch premium 'Made in Korea Implant' brand, expand exports to Philippine market",

    partnershipInviteTitle: "We Invite You to Partner with WeDent Corp.",
    partnershipInviteDesc:
      "WeDent Corp. possesses the capabilities and preparedness to transform the immense potential of the Philippine dental implant market into reality, while also fulfilling our vision of medical service. We are seeking partners who share our vision and are eager to grow alongside our innovative business model.",
    partnershipTypesDesc:
      "We welcome any form of cooperation including investment for mutual growth, strategic partnerships, or OEM/ODM proposals.",
    contactInfo: "Contact: CEO Jo Eunju, 010-3883-2195, salvus02@naver.com",

    // Footer
    footerTagline: "Leading Innovation in Philippine Dental Implant Market",
    contactTitle: "Contact",
    quickLinksTitle: "Quick Links",
    educationProgramLink: "Education Program",
    partnershipLink: "Partnership Inquiry",
    aboutLink: "About Us",
    copyright: "© 2024 WeDent Corp. All rights reserved.",
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>("ko");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
