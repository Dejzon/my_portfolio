import React from 'react';
import image from '../background-image-3.jpg'

export default function Home() {
    return (
        <main>
            <img src={image} alt="wall" className="absolute w-full h-full object-cover" />
            <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
                <p className="text-6xl text-gray-50 cursive font-bold leading-none lg:leading-snug home-name">Hi There, I am Dejan</p>
            </section>
        </main>
    )
}
