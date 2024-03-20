import React from 'react'

export default function RootLayout({ children  }) {
    return (
        <>
            <div className="container-wrapper">
                { children }
            </div>
        </>
    )
}
