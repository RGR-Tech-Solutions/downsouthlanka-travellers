export interface Tour {
    id: string;
    title: string;
    image: any;
    tag: string;
    duration: string;
    location: string;
    rating: number;
    description: string;
    price?: string;
}
import yalaImage from "../../public/images/yala.jpg";
import mirissaImage from "../../public/images/mirissa.jpg";
import galleImage from "../../public/images/galle.jpg";
import sigiriyaImage from "../../public/images/sigiriya.jpg";
import ellaImage from "../../public/images/ella_rock.jpg";
import nuwaraEliyaImage from "../../public/images/nuwaraeliya.jpg";
import kandyImage from "../../public/images/kendy.jpg";
import trincomaleeImage from "../../public/images/Trincomalee.jpg";
import kitulgalaImage from "../../public/images/Kitulgala.avif";
import udawalaweImage from "../../public/images/Udawalawe.jpg";
import adamImage from "../../public/images/Adam's_Peak.jpg";
import sinharajaImage from "../../public/images/Sinharaja.jpg";

export const allTours: Tour[] = [
    {
        id: "yala-wildlife",
        title: "Yala Wildlife Expedition",
        image: yalaImage,
        tag: "Adventure",
        duration: "1 Day",
        location: "Yala",
        rating: 4.9,
        description: "Witness the majestic Sri Lankan leopard, elephants, and hundreds of bird species in their natural habitat. Our expert trackers ensure you don't miss a beat of the wild."
    },
    {
        id: "galle-heritage",
        title: "Galle Fort Heritage Tour",
        image: galleImage,
        tag: "Culture",
        duration: "Half Day",
        location: "Galle",
        rating: 4.8,
        description: "Walk through history in the 16th-century Dutch Fort. Explore colonial architecture, boutique shops, and the iconic white lighthouse overlooking the Indian Ocean."
    },
    {
        id: "mirissa-whales",
        title: "Mirissa Whale Watching",
        image: mirissaImage,
        tag: "Nature",
        duration: "6 Hours",
        location: "Mirissa",
        rating: 4.7,
        description: "Embark on an ocean adventure to spot Blue Whales and playful dolphins. Mirissa is one of the world's best locations for witnessing these giants of the deep."
    },
    {
        id: "sigiriya-rock",
        title: "Sigiriya Rock Fortress",
        image: sigiriyaImage,
        tag: "History",
        duration: "1 Day",
        location: "Sigiriya",
        rating: 5.0,
        description: "Climb the 'Lion Rock', an ancient palace complex and UNESCO World Heritage site. Experience stunning frescoes and breathtaking views of the central plains."
    },
    {
        id: "ella-highlands",
        title: "Ella Highlands Experience",
        image: ellaImage,
        tag: "Mountain",
        duration: "2 Days",
        location: "Ella",
        rating: 4.9,
        description: "Discover the misty mountains, visit the famous Nine Arch Bridge, and hike Little Adam's Peak for panoramic views of the hill country."
    },
    {
        id: "nuwara-eliya-tea",
        title: "Tea Trails of Nuwara Eliya",
        image: nuwaraEliyaImage,
        tag: "Luxury",
        duration: "1 Day",
        location: "Nuwara Eliya",
        rating: 4.8,
        description: "Visit high-altitude tea plantations, learn the art of tea making, and enjoy a fresh brew in Sri Lanka's 'Little England'."
    },
    {
        id: "kandyan-culture",
        title: "Kandyan Cultural Journey",
        image: kandyImage,
        tag: "Spiritual",
        duration: "1 Day",
        location: "Kandy",
        rating: 4.8,
        description: "Visit the Temple of the Sacred Tooth Relic, stroll through the Peradeniya Botanical Gardens, and witness a traditional Kandyan dance performance."
    },
    {
        id: "trinco-beach",
        title: "Trincomalee Beach Escape",
        image: trincomaleeImage,
        tag: "Relax",
        duration: "3 Days",
        location: "Trincomalee",
        rating: 4.7,
        description: "Relax on the white sands of Nilaveli Beach, snorkel at Pigeon Island, and explore the ancient Koneswaram Temple perched on a cliff."
    },
    {
        id: "kitulgala-rafting",
        title: "Kitulgala White Water Rafting",
        image: kitulgalaImage,
        tag: "Adventure",
        duration: "1 Day",
        location: "Kitulgala",
        rating: 4.6,
        description: "Get your adrenaline pumping with white water rafting on the Kelani River. Perfect for adventure seekers looking for a thrill."
    },
    {
        id: "udawalawe-elephants",
        title: "Udawalawe Elephant Safari",
        image: udawalaweImage,
        tag: "Wildlife",
        duration: "1 Day",
        location: "Udawalawe",
        rating: 4.9,
        description: "Explore the Udawalawe National Park, famous for its large population of wild elephants and the inspiring Elephant Transit Home."
    },
    {
        id: "adams-peak",
        title: "Adam's Peak Sunrise Trek",
        image: adamImage,
        tag: "Pilgrimage",
        duration: "Night Hike",
        location: "Dalhousie",
        rating: 4.9,
        description: "Join the spiritual journey to the summit of Sri Pada (Adam's Peak) to witness a legendary sunrise and the mysterious shadow of the mountain."
    },
    {
        id: "sinharaja-trek",
        title: "Sinharaja Rainforest Trek",
        image: sinharajaImage,
        tag: "Eco",
        duration: "1 Day",
        location: "Sinharaja",
        rating: 4.7,
        description: "Guided trek through the last remaining primary tropical rainforest in Sri Lanka. Home to over 50% of Sri Lanka's endemic species."
    }
];
