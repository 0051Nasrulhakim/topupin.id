import React from 'react'

export default function RootLayout({ children  }) {
    return (
        <>
            <div>layout ML</div>
            <div className="container-wrapper">
                { children }
            </div>
        </>
    )
}
