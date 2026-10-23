export interface ContactUs {
    name: string
    email: string
    phone?: string
    businessName?: string
    subject: string
    message: string
}

export interface ContactUsResponse {
    status: string;
    message: string;
}