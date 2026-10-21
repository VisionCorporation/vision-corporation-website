export type HeadingStyle = 'underline' | 'circle';

export interface HeadingPart {
    text: string;
    style?: HeadingStyle;
}

export type JourneyIllustration = 'web' | 'energy' | 'transport' | 'hardware' | 'ai';

export interface HeroChip {
    title: string;
    text: string;
    icon: string[];
}

export interface JourneyPrinciple {
    title: string;
    description: string;
}

export interface JourneyHeroData {
    headline: HeadingPart[]
    subtext: string;
    buttonText: string;
    buttonLink: string;
    buttonFragment?: string;
    illustration: JourneyIllustration;
    illustrationLabel: string;
    chips: HeroChip[];
    tags?: string[];
}

export interface JourneyProblemData {
    heading: HeadingPart[];
    description: string;
}

export interface JourneyWorkData {
    heading: HeadingPart[];
    paragraphs?: string[];
    items?: JourneyPrinciple[];
}

export interface JourneyApproachData {
    heading: HeadingPart[];
    items: JourneyPrinciple[];
}

export interface JourneyWhyVisionData {
    heading: HeadingPart[];
    description: string;
}

export interface JourneyCtaData {
    heading: string;
    text: string;
    primaryLabel: string;
    primaryLink: string;
    secondaryLabel?: string;
    secondaryLink?: string;
}

export interface JourneyAiApplication {
    journey: string;
    description: string;
}

export interface JourneyAiApplicationsData {
    heading: HeadingPart[];
    description: string;
    items: JourneyAiApplication[];
}

export interface JourneyPageData {
    slug: string;
    label: string;
    metaTitle: string;
    metaDescription: string;
    hero: JourneyHeroData;
    problem: JourneyProblemData;
    work?: JourneyWorkData;
    approach: JourneyApproachData;
    whyVision: JourneyWhyVisionData;
    cta: JourneyCtaData;
    aiApplications?: JourneyAiApplicationsData;
}