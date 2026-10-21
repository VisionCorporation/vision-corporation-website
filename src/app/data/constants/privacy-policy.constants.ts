interface Clause {
    num: string;
    text: string;
    title?: string;
    items?: Clause[];
}

interface Section {
    id: string;
    title: string;
    intro?: string;
    clauses: Clause[];
}

export const SECTIONS: Section[] = [
    {
        id: 'information-collected',
        title: 'Information We Collect',
        intro:
            'We collect information that identifies or can be reasonably associated with you (“Personal Information”).',
        clauses: [
            {
                num: '1.1',
                title: 'Information You Voluntarily Provide',
                text: 'This includes information you actively share with us when using our services.',
                items: [
                    {
                        num: '1.1.1',
                        title: 'Contact Data',
                        text: 'Name, email address, phone number, and mailing address.',
                    },
                    {
                        num: '1.1.2',
                        title: 'Account Data',
                        text: 'Username, password, and other registration details.',
                    },
                    {
                        num: '1.1.3',
                        title: 'Communication Data',
                        text: 'Records of communications, testimonials, support inquiries, and feedback.',
                    },
                ],
            },
            {
                num: '1.2',
                title: 'Information Collected Automatically',
                text: 'When you visit our website, certain information is automatically collected to help us understand user behavior and improve performance.',
                items: [
                    {
                        num: '1.2.1',
                        title: 'Technical Data',
                        text: 'IP address, browser type, and device information.',
                    },
                    {
                        num: '1.2.2',
                        title: 'Usage Data',
                        text: 'Pages viewed, time spent on pages, and navigation patterns.',
                    },
                    {
                        num: '1.2.3',
                        title: 'Cookies & Tracking Data',
                        text: 'Cookies and similar tools (see our Cookie Policy for details).',
                    },
                ],
            },
        ],
    },
    {
        id: 'use-of-information',
        title: 'How We Use Your Information',
        intro: 'We use your Personal Information for the following purposes:',
        clauses: [
            {
                num: '2.1',
                text: 'To provide, operate, and improve our services.',
            },
            {
                num: '2.2',
                text: 'For security, fraud prevention, and system monitoring.',
            },
            {
                num: '2.3',
                text: 'To communicate with you regarding updates, inquiries, or support.',
            },
            {
                num: '2.4',
                text: 'For marketing and promotional purposes (only with your consent).',
            },
        ],
    },
    {
        id: 'sharing-information',
        title: 'How and Why We Share Your Information',
        intro:
            'We <strong>do not sell</strong> your Personal Information. We may share your information under these circumstances:',
        clauses: [
            {
                num: '3.1',
                title: 'Trusted Service Providers',
                text: 'We may share data with third-party companies that assist us in delivering services, such as:',
                items: [
                    {
                        num: '3.1.1',
                        text: 'Website hosting providers.',
                    },
                    {
                        num: '3.1.2',
                        text: 'Data analytics tools.',
                    },
                    {
                        num: '3.1.3',
                        text: 'Email delivery systems.',
                    },
                    {
                        num: '3.1.4',
                        text: 'CRM and support software.',
                    },
                ],
            },
            {
                num: '3.2',
                title: 'Legal Requirements',
                text: 'We may disclose your information if required to:',
                items: [
                    {
                        num: '3.2.1',
                        text: 'Comply with applicable laws or legal processes.',
                    },
                    {
                        num: '3.2.2',
                        text: 'Protect our rights or property.',
                    },
                    {
                        num: '3.2.3',
                        text: 'Protect the safety of users or the public.',
                    },
                ],
            },
            {
                num: '3.3',
                title: 'With Your Consent',
                text: 'We may share your information with third parties <strong>only with your explicit consent</strong>.',
            },
        ],
    },
    {
        id: 'data-security',
        title: 'How We Protect Your Information',
        intro:
            'We use industry-standard security measures to safeguard your data.',
        clauses: [
            {
                num: '4.1',
                text: 'Secure servers and encrypted connections.',
            },
            {
                num: '4.2',
                text: 'Limited access to Personal Information by authorized personnel only.',
            },
            {
                num: '4.3',
                text: 'Continuous monitoring and system updates to prevent breaches.',
            },
        ],
    },
    {
        id: 'data-retention',
        title: 'How Long We Keep Your Information',
        clauses: [
            {
                num: '5.1',
                text: 'We retain your Personal Information only for as long as necessary to fulfill the purposes outlined in this policy.',
            },
            {
                num: '5.2',
                text: 'Retention is in accordance with the Data Protection Act, 2012 (Act 843) and other applicable laws.',
            },
            {
                num: '5.3',
                text: 'Once data is no longer required, we securely delete or anonymize it.',
            },
        ],
    },
    {
        id: 'data-protection-rights',
        title: 'Your Data Protection Rights',
        intro:
            'Depending on your location and applicable laws, you may have the following rights:',
        clauses: [
            {
                num: '6.1',
                text: 'The right to request copies of your Personal Information.',
            },
            {
                num: '6.2',
                text: 'The right to request corrections to inaccurate or incomplete data.',
            },
            {
                num: '6.3',
                text: 'The right to request the deletion of your Personal Information under certain conditions.',
            },
        ],
    },
    {
        id: 'policy-changes',
        title: 'Changes to This Privacy Policy',
        clauses: [
            {
                num: '7.1',
                text: 'We may update or revise this Privacy Policy from time to time.',
            },
            {
                num: '7.2',
                text: 'Changes may occur due to updates in our services, technology, or legal requirements.',
            },
            {
                num: '7.3',
                text: 'When updated, the revised policy will be posted here with a new “Last Updated” date.',
            },
        ],
    },
];
