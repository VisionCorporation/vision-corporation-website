import type { StructuredData } from '../../services/seo-service'

export const HOMEPAGE_SCHEMA: StructuredData = {
    "@context": "https://schema.org",
    "@graph": [
        {
            "@type": [
                "Organization",
                "ProfessionalService"
            ],
            "@id": "https://www.visioncorporation.africa/#organization",
            "name": "Vision Corporation",
            "url": "https://www.visioncorporation.africa/",
            "slogan": "Powering Africa's technological renaissance.",
            "logo": "https://www.visioncorporation.africa/assets/images/vision-corporation-logo-file.png",
            "email": "info@visioncorporation.africa",
            "telephone": "+233 56 125 1006",
            "sameAs": [
                "https://www.linkedin.com/company/vision-corporationafrica/",
                "https://www.instagram.com/visioncorporationafrica/",
                "https://www.youtube.com/@visioncorporationafrica",
                "https://x.com/visioncorp_af"
            ],
            "contactPoint": {
                "@type": "ContactPoint",
                "contactType": "customer service",
                "email": "info@visioncorporation.africa",
                "telephone": "+233 56 125 1006",
                "areaServed": "GH",
                "availableLanguage": "English"
            },
            "description": "Vision Corporation is a Ghanaian technology company based in Sekondi-Takoradi. Today it is a web design, web development and digital marketing agency. Its longer-term mission is to design and build practical, locally led technology for Africa's infrastructure in energy, transportation, hardware and AI.",
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Sekondi-Takoradi",
                "addressRegion": "Western Region",
                "addressCountry": "GH"
            },
            "areaServed": [
                {
                    "@type": "Continent",
                    "name": "Africa"
                },
                {
                    "@type": "AdministrativeArea",
                    "name": "Worldwide"
                }
            ],
            "knowsAbout": [
                "Web design",
                "Web development",
                "E-commerce development",
                "Web application development",
                "UI/UX design",
                "Search engine optimisation",
                "Digital marketing",
                "Artificial intelligence",
                "Energy infrastructure in Africa",
                "Transportation systems in Africa",
                "Integrated circuit and control system design"
            ],
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web design, development and digital marketing services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Portfolio website design",
                            "description": "Portfolio websites for freelancers, creatives, consultants and professionals.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Business website design",
                            "description": "Business websites for companies, shops, hotels, clinics and service providers, built to be found in search.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "E-commerce website development",
                            "description": "Online stores with product catalogues, shopping carts, secure checkout and order management, designed for mobile.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom web application development",
                            "description": "Portals, dashboards, booking and management systems with user accounts and secure login.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "UI/UX design",
                            "description": "User interface and user experience design that is clear on a small phone screen.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Search engine optimisation (SEO)",
                            "description": "Improving site structure, content and speed so search engines and AI tools understand what a business offers.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Paid advertising on Meta and Google",
                            "description": "Planning and running Facebook, Instagram, and Google ads for the right audience and budget.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Blog writing",
                            "description": "Helpful articles that answer customers' real questions in plain language.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Email marketing",
                            "description": "Welcome messages, offers and updates sent to existing customers.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Content creation",
                            "description": "Posts, graphics and short videos for websites and social pages.",
                            "provider": {
                                "@id": "https://www.visioncorporation.africa/#organization"
                            },
                            "areaServed": {
                                "@type": "AdministrativeArea",
                                "name": "Worldwide"
                            }
                        }
                    }
                ]
            }
        },
        {
            "@type": "WebSite",
            "@id": "https://www.visioncorporation.africa/#website",
            "url": "https://www.visioncorporation.africa/",
            "name": "Vision Corporation",
            "inLanguage": "en",
            "publisher": {
                "@id": "https://www.visioncorporation.africa/#organization"
            }
        },
        {
            "@type": "WebPage",
            "@id": "https://www.visioncorporation.africa/#webpage",
            "url": "https://www.visioncorporation.africa/",
            "name": "Web Design & Digital Marketing in Ghana | Vision Corporation",
            "isPartOf": {
                "@id": "https://www.visioncorporation.africa/#website"
            },
            "about": {
                "@id": "https://www.visioncorporation.africa/#organization"
            },
            "inLanguage": "en"
        },
        {
            "@type": "FAQPage",
            "@id": "https://www.visioncorporation.africa/#faq",
            "url": "https://www.visioncorporation.africa/#faq",
            "mainEntity": [
                {
                    "@type": "Question",
                    "name": "What should a startup in Ghana look for in a full-stack web development agency?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Look for an agency that can handle design, front-end, back-end and hosting under one roof, explains its choices in plain language, and builds for how Ghanaians actually use the web: mostly on phones, often on slower connections, and paying by mobile money. Vision Corporation is a full-stack web design and development agency in Ghana. We work with startups from the first idea to a live product, and we can grow the site with you after launch."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does custom software development cost in West Africa?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "The cost depends on what you need built, so there is no single price. The main factors are the number of pages or features, whether you need online payments or user accounts, how much custom design is involved, and how much integration with other systems you want. A simple portfolio site costs far less than an e-commerce store, and a custom web application costs more than either. We give you a clear quote after a free consultation, so you know the cost before any work starts."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What makes a good UI/UX design firm in Ghana?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A good UI/UX firm starts with your users, not with decoration. It should ask who your customers are, test ideas with real people where it can, and design interfaces that are clear on a small phone screen. At Vision Corporation, design and development are done together, so what we design is something we can build well."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What is the difference between a website and a web application?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "A website mainly gives information, such as who you are, what you sell and how to reach you. A web application lets people do things: log in, book, pay, upload or manage their own data. Many businesses start with a website and add an application later."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you build e-commerce websites?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We build online stores with product pages, a cart, secure checkout and order management, designed to work well on mobile. Tell us how you want to take payments and we will recommend the best setup for your customers."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Can you build a portfolio website for me?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. A portfolio site is a good fit for freelancers, creatives, consultants and professionals. We design it to show your best work clearly and make it easy for clients to contact you."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does it take to build a website?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on the size of the project. A simple portfolio site is quick to build, while an online store or custom application takes longer. We agree on a timeline with you at the start, and we tell you early if anything changes."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will people be able to find my website on Google and AI tools like ChatGPT?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We build every site with search in mind: clear structure, fast loading, descriptive page content and technical foundations that search engines and AI tools can read. No one can promise a specific ranking, but a well-built site gives you the best chance of being found."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Will my website work well on mobile phones?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. We design for phones first, because that is where most of your customers will see it. Pages are made to load quickly and to be easy to use with one thumb."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do I own my website after it is built?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We agree on ownership clearly before the project begins, so you know exactly what you are getting, including your domain, your content and your site files."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Do you help after the website is live?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Yes. Launch is the beginning, not the end. We can help with updates, fixes, new pages and new features as your business grows."
                    }
                },
                {
                    "@type": "Question",
                    "name": "What digital marketing services do you offer?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "We offer SEO, paid ads on Meta (Facebook and Instagram) and Google, blog writing, email marketing and content creation. You can add them to a new website we build, or use them on their own if you already have a site."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How much does digital marketing cost in Ghana?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "It depends on which services you need and how often. Some are monthly, like content and email, while others are project-based, like an SEO clean-up. Money you spend on ads goes straight to Meta or Google and is separate from our fee. After a free conversation about your goals, we suggest a starting plan and budget you are comfortable with."
                    }
                },
                {
                    "@type": "Question",
                    "name": "How long does SEO take to work?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "SEO is gradual. It can take a few months before you see a clear change, and no one can honestly promise a specific ranking. Paid ads can bring visitors sooner, so many businesses use both while their search presence grows. We explain what to expect before you commit."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Should I choose SEO or paid ads?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Often the answer is both, at different times. Paid ads bring people in quickly while you build, and SEO builds steady, lasting visitors over time. We help you decide based on your goal, your budget and how fast you need results."
                    }
                },
                {
                    "@type": "Question",
                    "name": "Why is a web design agency also working on energy, transport, hardware and AI?",
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": "Software is where we start, and it funds and speeds up our longer-term work. Building websites and web applications for businesses today is how we grow the skills, the team and the resources for bigger journeys. Every project you give us helps build that future."
                    }
                }
            ]
        }
    ]
};

export const WHY_VISION_SCHEMA: StructuredData = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.visioncorporation.africa/why-vision#webpage",
    "url": "https://www.visioncorporation.africa/why-vision",
    "name": "Why Vision | About Vision Corporation",
    "isPartOf": {
        "@id": "https://www.visioncorporation.africa/#website"
    },
    "inLanguage": "en",
    "description": "Who Vision Corporation is, its vision and mission, its infinite game philosophy and its five core values.",
    "about": {
        "@id": "https://www.visioncorporation.africa/#organization"
    },
    "mainEntity": {
        "@id": "https://www.visioncorporation.africa/#organization"
    }
};

export const CONTACT_US_SCHEMA: StructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://www.visioncorporation.africa/contact-us#webpage",
    "url": "https://www.visioncorporation.africa/contact-us",
    "name": "Contact Vision Corporation | Web Design Agency in Ghana",
    "isPartOf": {
        "@id": "https://www.visioncorporation.africa/#website"
    },
    "inLanguage": "en",
    "about": {
        "@id": "https://www.visioncorporation.africa/#organization"
    },
    "mainEntity": {
        "@id": "https://www.visioncorporation.africa/#organization"
    }
};

export const JOURNEY_STRUCTURED_DATA: Record<string, StructuredData> = {
    'web-design-and-development': {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.visioncorporation.africa/journeys/web-design-and-development#service",
        "url": "https://www.visioncorporation.africa/journeys/web-design-and-development",
        "name": "Web design and development",
        "description": "Business websites, portfolio websites, e-commerce stores and custom web applications for startups and growing businesses in Ghana.",
        "serviceType": "Web design and development",
        "provider": {
            "@id": "https://www.visioncorporation.africa/#organization"
        },
        "areaServed": {
            "@type": "Country",
            "name": "Ghana"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Web design and development",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Portfolio website design",
                        "description": "Portfolio websites for freelancers, creatives, consultants and professionals."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Business website design",
                        "description": "Business websites for companies, shops, hotels, clinics and service providers, built to be found in search."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "E-commerce website development",
                        "description": "Online stores with product catalogues, shopping carts, secure checkout and order management, designed for mobile."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Custom web application development",
                        "description": "Portals, dashboards, booking and management systems with user accounts and secure login."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "UI/UX design",
                        "description": "User interface and user experience design that is clear on a small phone screen."
                    }
                }
            ]
        }
    },
}

export const DIGITAL_MARKETING_SCHEMA: StructuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.visioncorporation.africa/digital-marketing#service",
    "url": "https://www.visioncorporation.africa/digital-marketing",
    "name": "Digital marketing",
    "description": "SEO, paid ads on Meta and Google, blog writing, email marketing and content creation for businesses in Ghana.",
    "serviceType": "Digital marketing",
    "provider": {
        "@id": "https://www.visioncorporation.africa/#organization"
    },
    "areaServed": {
        "@type": "Country",
        "name": "Ghana"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Digital marketing",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Search engine optimisation (SEO)",
                    "description": "Improving site structure, content and speed so search engines and AI tools understand what a business offers."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Paid advertising on Meta and Google",
                    "description": "Planning and running Facebook, Instagram and Google ads for the right audience and budget."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Blog writing",
                    "description": "Helpful articles that answer customers' real questions in plain language."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Email marketing",
                    "description": "Welcome messages, offers and updates sent to existing customers."
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Content creation",
                    "description": "Posts, graphics and short videos for websites and social pages."
                }
            }
        ]
    }
};