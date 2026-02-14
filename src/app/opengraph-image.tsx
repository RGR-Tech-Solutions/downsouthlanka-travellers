import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const runtime = 'nodejs'

export const size = {
    width: 1200,
    height: 630,
}

export const contentType = 'image/png'
export const alt = 'Downsouth Lanka Travellers'

export default async function Image() {
    // Attempt to locate the logo file
    const logoPath = path.join(process.cwd(), 'public/logo.jpg')
    const logoData = fs.readFileSync(logoPath)
    const base64Logo = logoData.toString('base64')

    return new ImageResponse(
        (
            <div
                style={{
                    background: 'white', // Ensure a clean background
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                {/* 
                   Displaying the logo with object-fit contain to ensure it's not cropped 
                   and maintains its aspect ratio.
                */}
                <img
                    src={`data:image/jpeg;base64,${base64Logo}`}
                    alt="Downsouth Lanka Travellers"
                    style={{
                        maxWidth: '800px',
                        maxHeight: '500px',
                        objectFit: 'contain',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
