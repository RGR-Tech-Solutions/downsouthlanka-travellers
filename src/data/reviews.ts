export interface Review {
    id: number;
    name: string;
    country: string;
    rating: number;
    comment: string;
    date: string;
    avatar?: string;
}

export const reviews: Review[] = [
    {
        id: 1,
        name: "Sarah Johnson",
        country: "United Kingdom",
        rating: 5,
        comment: "Our trip to Galle was absolutely magical. Downsouth Lanka Travellers organized everything perfectly. The driver was very professional and the SUV was extremely comfortable.",
        date: "January 2026",
        avatar: "https://i.pravatar.cc/150?u=sarah"
    },
    {
        id: 2,
        name: "Michael Chen",
        country: "Singapore",
        rating: 5,
        comment: "Highly recommend the whale watching tour in Mirissa! Everything was well-planned, and we felt very safe throughout the journey. A must-do if you're in Sri Lanka.",
        date: "December 2025",
        avatar: "https://i.pravatar.cc/150?u=michael"
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        country: "Spain",
        rating: 5,
        comment: "Excellent service! We used their transport for 10 days and it was the best decision. Flexible, reliable, and friendly drivers who know all the hidden gems.",
        date: "February 2025",
        avatar: "https://i.pravatar.cc/150?u=elena"
    },
    {
        id: 4,
        name: "David Wilson",
        country: "Australia",
        rating: 5,
        comment: "The most seamless travel experience I've had in Asia. From the airport pickup to the coastal tours, everything was top-notch. The local knowledge of our guide was incredible.",
        date: "January 2025",
        avatar: "https://i.pravatar.cc/150?u=david"
    },
    {
        id: 5,
        name: "Anna Müller",
        country: "Germany",
        rating: 5,
        comment: "Beautiful cars and even better service. We loved the flexibility to stop whenever we saw something interesting. It felt more like traveling with a friend than a tour company.",
        date: "March 2025",
        avatar: "https://i.pravatar.cc/150?u=anna"
    },
    {
        id: 6,
        name: "James Paterson",
        country: "Canada",
        rating: 5,
        comment: "Absolutely flawless! We explored the Hill Country and the South Coast with Downsouth Lanka Travellers. The attention to detail and punctuality were outstanding. Truly felt like VIPs.",
        date: "February 2025",
        avatar: "https://i.pravatar.cc/150?u=james"
    },
    {
        id: 7,
        name: "Sophie Laurent",
        country: "France",
        rating: 5,
        comment: "Merci beaucoup for an unforgettable honeymoon! Every recommendation, from the boutique hotels to the sunset spots, was perfect. We couldn't have asked for a better partner in Sri Lanka.",
        date: "April 2024",
        avatar: "https://i.pravatar.cc/150?u=sophie-marie"
    }
];
