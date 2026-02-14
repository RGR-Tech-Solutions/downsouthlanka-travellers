import { StaticImageData } from "next/image";

// Verify if we should use local images eventually, but for now we keep the URLs 
// or if I can match them to the file list I saw earlier (mirissa.jpg, yala.jpg, etc).
// The user previously imported local images in tours.ts.
// Let's try to use local imports where possible to match the "tours.ts" style perfectly.

import mirissaImage from "../../public/images/mirissa.jpg";
import yalaImage from "../../public/images/yala.jpg";
import ellaImage from "../../public/images/ella_rock.jpg";
import kandyImage from "../../public/images/kendy.jpg";
import sigiriyaImage from "../../public/images/sigiriya.jpg";
import trincomaleeImage from "../../public/images/Trincomalee.jpg";

export interface JourneyItem {
    id: string;
    title: string;
    description: string;
    image: StaticImageData | string;
    location: string;
    date?: string;
}

export const journeyData: JourneyItem[] = [
    {
        id: "mirissa-sunset",
        title: "Sunset at Mirissa",
        description: "A breathtaking evening spent watching the golden sun dip below the horizon, with the gentle waves of the Indian Ocean at our feet.",
        image: mirissaImage,
        location: "Mirissa, South Coast"
    },
    {
        id: "yala-safari",
        title: "Safari Adventures",
        description: "An unforgettable encounter with the wild. We witnessed majestic elephants and elusive leopards in their natural habitat at Yala.",
        image: yalaImage,
        location: "Yala National Park"
    },
    {
        id: "ella-hike",
        title: "Hiking Ella Rock",
        description: "The climb was challenging, but the panoramic views of the misty hills and lush tea plantations were absolutely worth every step.",
        image: ellaImage,
        location: "Ella, Badulla"
    },
    {
        id: "kandy-culture",
        title: "Cultural Immersion",
        description: "Exploring the sacred Temple of the Tooth and experiencing the rich traditions and history of Sri Lanka's hill capital.",
        image: kandyImage,
        location: "Kandy"
    },
    {
        id: "sigiriya-climb",
        title: "Ancient Sigiriya",
        description: "Climbing the Lion Rock was a journey back in time. The frescoes and the engineering marvels of the ancient fortress left us in awe.",
        image: sigiriyaImage,
        location: "Sigiriya"
    },
    {
        id: "trinco-beach",
        title: "Trincomalee Shores",
        description: "Crystal clear waters and white sandy beaches. Snorkeling at Pigeon Island was a highlight of our coastal exploration.",
        image: trincomaleeImage,
        location: "Trincomalee"
    }
];
