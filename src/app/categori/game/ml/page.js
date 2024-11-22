import React from 'react'
import dynamic from 'next/dynamic'
const PaymenMethodGame = dynamic(() => import('../../../../component/payMethodGame'));
import Image from 'next/image'

export default function Ml() {


  return (
    <>
      <div className='produk-game'>

        <div className='section-left'>
          <div className='contain'>
            amskasma kmsakms kamskamksam ksm aksma mskamsakm mkamks
          </div>
        </div>

        <div className='section-right'>
          <div className='step-1'>
            <div className='title'>
              1. Masukkan User ID
            </div>
            <div className='form-id'>
              <div className='user-id'>
                <input type="text" className="form-control" placeholder="User ID" />
              </div>
              <div className='server-id'>
                <input type="text" className="form-control" placeholder="Server ID" />
              </div>
            </div>
          </div>

          <div className='step-2'>

            <div className='title'>
              2. Pilih Item
            </div>

            <div className='section-step-2'>
              <div className='item active'>
                <div className='left'>
                  <div className='title-item'>
                    13.000 DM
                  </div>
                  <div className='price-item'>
                    Rp. 1.000.000
                  </div>
                </div>
                <div className='right'>
                  <div className='gambar'>
                    <Image
                      src='/logo/diamond.png'
                      alt='DM'
                      width={60}
                      height={58}
                      style={{
                        borderBottomRightRadius: '5px',
                        borderTopRightRadius: '5px',
                        overflow: 'hidden', // Pastikan elemen anak terpotong sesuai radius
                      }}
                    />

                  </div>
                </div>
              </div>

              <div className='item'>
                <div className='left'>
                  <div className='title-item'>
                    Starlight
                  </div>
                  <div className='price-item'>
                    Rp. 1.000.000
                  </div>
                </div>
                <div className='right'>
                  <Image
                    src='/logo/diamond.png'
                    alt='DM'
                    width={60}
                    height={58}
                    style={{
                      borderBottomRightRadius: '5px',
                      borderTopRightRadius: '5px',
                      overflow: 'hidden', // Pastikan elemen anak terpotong sesuai radius
                    }}
                  />
                </div>
              </div>

              <div className='item'>
                <div className='left'>
                  <div className='title-item'>
                    180 DM
                  </div>
                  <div className='price-item'>
                    Rp. 1.000.000
                  </div>
                </div>
                <div className='right'>
                  <Image
                    src='/logo/diamond.png'
                    alt='DM'
                    width={60}
                    height={58}
                    style={{
                      borderBottomRightRadius: '5px',
                      borderTopRightRadius: '5px',
                      overflow: 'hidden', // Pastikan elemen anak terpotong sesuai radius
                    }}
                  />
                </div>
              </div>

              <div className='item'>
                <div className='left'>
                  <div className='title-item'>
                    778 DM
                  </div>
                  <div className='price-item'>
                    Rp. 1.000.000
                  </div>
                </div>
                <div className='right'>
                  <Image
                    src='/logo/diamond.png'
                    alt='DM'
                    width={60}
                    height={58}
                    style={{
                      borderBottomRightRadius: '5px',
                      borderTopRightRadius: '5px',
                      overflow: 'hidden', // Pastikan elemen anak terpotong sesuai radius
                    }}
                  />
                </div>
              </div>

              <div className='item'>
                <div className='left'>
                  <div className='title-item'>
                    990 DM
                  </div>
                  <div className='price-item'>
                    Rp. 1.000.000
                  </div>
                </div>
                <div className='right'>
                  <Image
                    src='/logo/diamond.png'
                    alt='DM'
                    width={60}
                    height={58}
                    style={{
                      borderBottomRightRadius: '5px',
                      borderTopRightRadius: '5px',
                      overflow: 'hidden', // Pastikan elemen anak terpotong sesuai radius
                    }}
                  />
                </div>
              </div>

            </div>

          </div>

          <div className='step-3'>
            <div className='title'>
              3. Masukkan Voucher Promo
            </div>
            <div className='form-voucher'>
              <div className='voucher'>
                <input type="text" className="form-control" placeholder="Kode Voucher" />
              </div>
              <div className='btn btn-primary'>
                Terapkan
              </div>
            </div>
            <div className='alert-voucher'>
              *Jika Tidak Punya Silahkan lewati
            </div>
          </div>

          <div className='step-3'>

            <div className='title'>
              4. Pilih Metode Bayar
            </div>

            <PaymenMethodGame />

          </div>

          <div className='step-3'>

            <div className='title'>
              4. Check Out
            </div>

            <div className='user-id'>
              <input type="text" class="form-control" placeholder="Masukkan Nomor WhatsApp" />
            </div>

            <div className='btn-center mt-3'>
              <button className='btn btn-success'>
                Buat Pesanan
              </button>
            </div>

          </div>

        </div>

      </div>
    </>
  )
}
