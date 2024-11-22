// import styles from "../css/page.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <>

      {/* <div className="dashboard-kategori"> */}
        
        <div className="item-kategori">

          <div className="list-item-kategori">
            <Link href='./categori/game' className='no-decoration'>
              <div className="pict-item-kategori">
                Ini Gambar
              </div>
              <div className="title-item-kategori">
                Game
              </div>
            </Link>
          </div>
          
          <div className="list-item-kategori">
            <Link href='./categori/pulsa' className='no-decoration'>
              <div className="pict-item-kategori">
                Ini Gambar
              </div>
              <div className="title-item-kategori">
                Pulsa
              </div>
            </Link>
          </div>
          
          <div className="list-item-kategori">
            <Link href='./categori/pulsa' className='no-decoration'>
              <div className="pict-item-kategori">
                Ini Gambar
              </div>
              <div className="title-item-kategori">
                Pulsa
              </div>
            </Link>
          </div>

        </div>

      {/* </div> */}

    </>
  );
}
