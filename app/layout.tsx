import './globals.css'
import React from 'react'

export const metadata = {
    title: 'Resume',
    description: 'RS resume'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col">
                <header className="bg-gray-800 text-white p-4">
                    <h1 className="text-2xl font-bold">Raghuvendra Singh, Senior Specialist</h1>
                </header>
                <main className="flex-grow p-4">{children}</main>
                <footer className="bg-gray-800 text-white p-4 text-center">
                    <p>&copy; {new Date().getFullYear()} My Resume. All rights reserved.</p>
                </footer>
            </body>
        </html>
    )
}
