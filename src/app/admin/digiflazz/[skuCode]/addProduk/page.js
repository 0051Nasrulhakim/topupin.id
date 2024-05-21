"use client"
import React, { useEffect, useState } from 'react'

import { findProduk } from '@/api/digi_getProd'

export default function Page({ params }) {

    const [produkItem, setProduk] = useState('');
    const [isNull, setIsNull] = useState(true);

    const [valueSkuCode, setSkuCode] = useState('');
    const [kategori, setKategori] = useState('');
    const [brand, setBrand] = useState('');
    const [namaProduk, setNamaProduk] = useState('');
    const [harga, setHarga] = useState('');
    const [deskripsi, setDeskripsi] = useState('');

    function formatRupiah(price) {

        return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0, maximumFractionDigits: 0 }).format(price);
    }

    const saveProduk = () => {

        const data = {
            "skuCode": valueSkuCode,
            "category": kategori,
            "brand": brand,
            "product_name": namaProduk,
            "harga": harga,
            "deskripsi": deskripsi,
        }

        console.log(data)
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {

        const produk = async () => {

            try {

                await new Promise((resolve) => setTimeout(resolve, 3000));
                const skuCode = params.skuCode
                const response = await findProduk(skuCode)

                // cek apakah response adalah array
                if (Array.isArray(response)) {
                    setSkuCode(response[0].buyer_sku_code)
                    setKategori(response[0].category)
                    setBrand(response[0].brand)
                    setProduk(response);    
                    setIsNull(false)
                }


            } catch (error) {

                console.log(error)

            }

        }

        if (params.skuCode) {
            produk()
        }

    }, [params])

    return (
        <>
            <div className='title-page'>Rilis Produk Ini ke Publik</div>

            {isNull ? (

                <div>Sedang Memuat data ...</div>

            ) : (

                <>
                    <div className='admin-produk-publik mt-3'>

                        {Array.isArray(produkItem) && produkItem.length > 0 ? (
                            produkItem.map((item, index) => (
                                <div className='flex-section' key={index}>
                                    <div className='left' >

                                        <div className='judul'>
                                            <div className='title text-center'>Nama Produk Dari Digiflazz</div>
                                        </div>

                                        <div className='mt-4'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <label htmlFor="kategori" className="form-label">Kategori</label>
                                                    <input
                                                        value={item.category}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="brand" className="form-label">Brand</label>
                                                    <input
                                                        value={item.brand}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-2'>
                                            <label htmlFor="name" className="form-label">Nama Produk</label>
                                            <input
                                                value={item.product_name}
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                readOnly
                                            />
                                        </div>

                                        <div className='mt-2'>
                                            <label htmlFor="name" className="form-label">Harga Beli</label>
                                            <input
                                                value={formatRupiah(item.price)}
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                readOnly
                                            />
                                        </div>

                                        <div className='mt-2'>
                                            <label htmlFor="name" className="form-label">Deskripsi</label>
                                            <input
                                                value={item.desc}
                                                type="text"
                                                className="form-control"
                                                placeholder=""
                                                readOnly
                                            />
                                        </div>

                                        <div className='mt-2'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <label htmlFor="kategori" className="form-label">Server Mulai OFF</label>
                                                    <input
                                                        value={item.start_cut_off}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="brand" className="form-label">Server On Kembali</label>
                                                    <input
                                                        value={item.end_cut_off}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='right'>

                                        <div className='judul'>
                                            <div className='title text-center'>Tambahkan Produk</div>
                                        </div>

                                        <div className='mt-4'>
                                            <div className='row'>
                                                <div className='col'>
                                                    <label htmlFor="kategori" className="form-label">SKU Code</label>
                                                    <input
                                                        value={params.skuCode}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="kategori" className="form-label">Kategori</label>
                                                    <input
                                                        value={item.category}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                        readOnly
                                                    />
                                                </div>
                                                <div className='col'>
                                                    <label htmlFor="brand" className="form-label">Brand</label>
                                                    <input
                                                        value={item.brand}
                                                        type="text"
                                                        className="form-control"
                                                        placeholder=""
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className='mt-2'>
                                            <label htmlFor="" className="form-label">Nama Produk</label>
                                            <input
                                                value={ namaProduk }
                                                onChange={ (e) => setNamaProduk(e.target.value) }
                                                type="text"
                                                className="form-control"
                                                placeholder="masukkkan nama produk"
                                            />
                                        </div>

                                        <div className='mt-2'>
                                            <label htmlFor="" className="form-label">Harga Jual</label>
                                            <input
                                                value={ harga }
                                                onChange={ (e) => setHarga(e.target.value) }
                                                type="number"
                                                className="form-control"
                                                placeholder=""
                                            />
                                        </div>

                                        <div className='mt-2'>
                                            <label htmlFor="" className="form-label">Deskripsi</label>
                                            <input
                                                value = { deskripsi }
                                                onChange={ (e)=> setDeskripsi(e.target.value) }
                                                type="text"
                                                className="form-control"
                                                placeholder="masukkan deskripsi"
                                            />
                                        </div>

                                        <div className='lokasi-tombol-kanan mt-3'>
                                            <button className='btn btn-sm btn-success' onClick={ saveProduk }>Publish Produk</button>
                                        </div>
                                    </div>
                                </div>

                            ))
                        ) : (
                            <div>Tidak ada produk yang ditemukan</div>
                        )}

                    </div>
                </>

            )}

        </>
    )
}
