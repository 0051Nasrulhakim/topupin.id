import React from 'react'
import Link  from 'next/link'

export default function ProdukPublishLayout({ children }) {
  return (
    <>
        <div className='title-page'>Daftar Produk Yang Terpublish</div>
        <div className='container-admin'>
            <div className='kategori-produk'>
                <div className='title-categori active'>
                    <Link href="/admin/produk_publish/all_produk" className="no-decoration">
                        Semua
                    </Link>
                </div>
                <div className='title-categori'>
                    <Link href="/admin/produk_publish/game" className="no-decoration">
                        Game
                    </Link>
                </div>
                <div className='title-categori '>
                    <Link href="/admin/produk_publish/eMoney" className="no-decoration">
                        E-Money
                    </Link>
                </div>
                <div className='title-categori'>
                    <Link href="/admin/produk_publish/pulsaData" className="no-decoration">
                        Pulsa & Data
                    </Link>
                </div>
            </div>
            
            <div>

                { children }
                
            </div>

        </div>
    </>
  )
}
