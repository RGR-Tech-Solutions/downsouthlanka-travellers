interface Address {
    line1: string;
    line2?: string;
    full?: string;
}

interface ContactConfig {
    phones: { label: string; value: string }[];
    emails: { label: string; value: string }[];
    address: Address;
    socials: {
        facebook: string;
        instagram: string;
        twitter: string;
        whatsapp: string;
    };
    whatsapp: {
        number: string;
        linkValue: string;
        defaultMessage: string;
    };
    googleMapsEmbed: string;
}

export const contactConfig: ContactConfig = {
    phones: [
        { label: "Mobile", value: "+94 71 606 8360" },
        { label: "Landline", value: "+94 76 730 7849" }
    ],
    emails: [
        { label: "Inquiries", value: "downsouthlankatraveller@gmail.com" },
        { label: "Bookings", value: "" }
    ],
    address: {
        line1: "Matara, Sri Lanka",
        full: "Matara, Sri Lanka"
    },
    socials: {
        facebook: "https://facebook.com/downsouthlanka",
        instagram: "https://instagram.com/downsouthlanka",
        twitter: "https://twitter.com/downsouthlanka",
        whatsapp: "+94716068360" // Format without spaces/special chars for links
    },
    whatsapp: {
        number: "+94716068360",
        linkValue: "94716068360",
        defaultMessage: "Hi! I'm interested in booking a tour with Downsouth Lanka Travellers."
    },
    googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3968.308183316363!2d80.53013960000001!3d5.9522062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae13f24b587217d%3A0xa567f61f45791595!2sMarambage%20Distributors!5e0!3m2!1sen!2slk!4v1769887602403!5m2!1sen!2slk"
};
