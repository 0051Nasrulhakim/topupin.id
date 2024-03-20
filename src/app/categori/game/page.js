import React from 'react'
import Link from 'next/link'

export default function Game() {
  return (
    <>
      {/* <div>ini adalah page game</div> */}

      <div className="item-produk">

        <div className="list-item-produk">
          <Link href='./game/ml' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              Mobile Legends
            </div>
          </Link>
        </div>

        <div className="list-item-produk">
          <Link href='./game/fri-fire' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              Fri Fire
            </div>
          </Link>
        </div>

        <div className="list-item-produk">
          <Link href='./game/aov' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              AOV
            </div>
          </Link>
        </div>

        <div className="list-item-produk">
          <Link href='./game/valoran' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              Valoran
            </div>
          </Link>
        </div>

        <div className="list-item-produk">
          <Link href='./game/genshinImpact' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              Genshin Impact
            </div>
          </Link>
        </div>

        <div className="list-item-produk">
          <Link href='./game/pubg' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              PUBG Global
            </div>
          </Link>
        </div>

        <div className="list-item-produk">
          <Link href='./game/metalSlug' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              Metal Slug
            </div>
          </Link>
        </div>

        <div className="list-item-produk">
          <Link href='./game/..' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              Metal Slug
            </div>
          </Link>
        </div>

        <div className="list-item-produk">
          <Link href='./game/...' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              Metal Slug
            </div>
          </Link>
        </div>
        
        <div className="list-item-produk">
          <Link href='./game/...' className='no-decoration'>
            <div className="pict-item-produk">
              Ini Gambar
            </div>
            <div className="title-item-produk">
              Metal Slug
            </div>
          </Link>
        </div>

      </div>

    </>
  )
}
