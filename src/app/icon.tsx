import { ImageResponse } from 'next/og'
import fs from 'fs'
import path from 'path'

export const size = {
    width: 32,
    height: 32,
}
export const contentType = 'image/png'

export default function Icon() {
    const logoPath = path.join(process.cwd(), 'public/logo.jpg')
    const logoData = fs.readFileSync(logoPath)
    const base64Logo = logoData.toString('base64')

    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    background: 'white',
                }}
            >
                <img
                    src={`data:image/jpeg;base64,${base64Logo}`}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            </div>
        ),
        {
            ...size,
        }
    )
}
