export interface Newsletter {
    templateName: string
    subject: string
    heading: string
    buttonText: string
    buttonUrl: string
    message: string
}

export interface NewsletterResponse {
    status: string;
    message: string;
}