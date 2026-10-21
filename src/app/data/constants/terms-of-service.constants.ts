interface Clause {
    num: string;
    text: string;
    items?: { num: string; text: string }[];
}

interface Section {
    id: string;
    title: string;
    clauses: Clause[];
}

export const SECTIONS: Section[] = [
    {
        id: 'acceptance',
        title: 'Acceptance of Terms',
        clauses: [
            {
                num: '1.1',
                text: 'By using our website or engaging Vision Corporation for any services, you confirm that you have read and accepted these Terms & Conditions.',
            },
            {
                num: '1.2',
                text: 'If you do not agree with any part of these Terms, you must discontinue the use of our services immediately.',
            },
        ],
    },
    {
        id: 'services',
        title: 'Our Services',
        clauses: [
            {
                num: '2.1',
                text: 'Vision Corporation provides software development, web design, IT consulting, system maintenance, and digital solutions.',
            },
            { num: '2.2', text: 'For software projects, work begins once the required upfront deposit is made.' },
            { num: '2.3', text: 'Project timelines will be communicated at the start of each project.' },
            { num: '2.4', text: 'Any anticipated delays will be communicated to the client in advance.' },
        ],
    },
    {
        id: 'payment',
        title: 'Payment Terms',
        clauses: [
            {
                num: '3.1',
                text: 'Unless otherwise agreed, our standard payment breakdown for software projects is:',
                items: [
                    { num: '3.1.1', text: '30% deposit before work begins' },
                    { num: '3.1.2', text: '40% after completing the main system features' },
                    { num: '3.1.3', text: '30% on final delivery and approval' },
                ],
            },
            { num: '3.2', text: 'Payments must be made through approved channels provided by Vision Corporation.' },
            {
                num: '3.3',
                text: 'Failure to follow the payment schedule may cause delays or suspension of the project.',
            },
        ],
    },
    {
        id: 'domain-hosting',
        title: 'Domain & Hosting Support',
        clauses: [
            {
                num: '4.1',
                text: 'If included in your package, Vision Corporation will assist in purchasing or registering your domain.',
            },
            {
                num: '4.2',
                text: 'Vision Corporation is not responsible for downtime or technical issues caused by third-party hosting providers.',
            },
        ],
    },
    {
        id: 'maintenance',
        title: 'Maintenance & Updates',
        clauses: [
            {
                num: '5.1',
                text: 'Clients receive <strong>a free maintenance and updates based on their chosen package</strong> after the project is approved.',
            },
            {
                num: '5.2',
                text: 'After the free maintenance period, all updates and support services will be billed at agreed rates.',
            },
            { num: '5.3', text: 'Clients will receive a quotation before any paid maintenance work begins.' },
            {
                num: '5.4',
                text: 'Minor updates and bug fixes are included; major feature upgrades may require new charges.',
            },
        ],
    },
    {
        id: 'cancellation',
        title: 'Cancellation & Refund Policy',
        clauses: [
            { num: '6.1', text: 'The client may cancel the project with <strong>one week written notice</strong>.' },
            {
                num: '6.2',
                text: 'The upfront deposit is <strong>non-refundable</strong> once work has begun.',
            },
            { num: '6.3', text: 'Completed phases of the project cannot be refunded.' },
        ],
    },
    {
        id: 'client-responsibilities',
        title: 'Client Responsibilities',
        clauses: [
            {
                num: '7.1',
                text: 'Clients must provide all necessary content, data, documents, and login credentials on time.',
            },
            {
                num: '7.2',
                text: 'Delays in providing required materials may lead to changes in project timelines.',
            },
            {
                num: '7.3',
                text: 'Clients must ensure that all content submitted is legally owned or properly licensed.',
            },
            { num: '7.4', text: 'Clients must review and approve deliverables promptly to avoid delays.' },
        ],
    },
    {
        id: 'intellectual-property',
        title: 'Intellectual Property',
        clauses: [
            {
                num: '8.1',
                text: 'Vision Corporation retains ownership of all software, code, and project assets <strong>until full payment is made</strong>.',
            },
            { num: '8.2', text: 'Upon full payment, ownership rights are transferred to the client.' },
            {
                num: '8.3',
                text: 'Unless otherwise requested in writing, Vision Corporation may display completed work in its portfolio.',
            },
            {
                num: '8.4',
                text: 'Source code, design files, and documentation are released only after full payment is completed.',
            },
        ],
    },
    {
        id: 'confidentiality',
        title: 'Confidentiality',
        clauses: [
            {
                num: '9.1',
                text: 'Both parties agree to keep all project information confidential, including business details, project data, credentials, and documentation.',
            },
            {
                num: '9.2',
                text: 'Confidentiality obligations continue even after the completion of the project.',
            },
            {
                num: '9.3',
                text: 'Neither party may disclose confidential information to third parties without written consent.',
            },
        ],
    },
    {
        id: 'liability',
        title: 'Limitation of Liability',
        clauses: [
            {
                num: '10.1',
                text: 'Vision Corporation is not liable for losses caused by third-party hosting, integrations, or external services.',
            },
            {
                num: '10.2',
                text: 'We are not responsible for delays caused by client inaction or late submissions.',
            },
            { num: '10.3', text: 'We are not liable for security breaches caused by client negligence.' },
            {
                num: '10.4',
                text: 'Our maximum liability is limited to the total amount paid by the client for the project.',
            },
        ],
    },
    {
        id: 'amendments',
        title: 'Amendments',
        clauses: [
            { num: '11.1', text: 'Vision Corporation may update or modify these Terms at any time.' },
            { num: '11.2', text: 'Updates take effect immediately once published on this website.' },
            { num: '11.3', text: 'Continued use of our services indicates acceptance of updated Terms.' },
        ],
    },
    {
        id: 'governing-law',
        title: 'Governing Law',
        clauses: [
            {
                num: '12.1',
                text: 'These Terms & Conditions are governed by the laws of the Republic of Ghana.',
            },
            {
                num: '12.2',
                text: 'Any disputes shall be resolved through negotiation or appropriate legal channels within Ghana.',
            },
        ],
    },
];