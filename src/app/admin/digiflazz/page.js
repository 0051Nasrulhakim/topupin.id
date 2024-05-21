"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { getProduk } from '@/api/digi_getProd'

export default function PageDigiflazz() {

    const [produkItem, setProduk] = useState('');
    const [isNull, setIsNull] = useState(true);

    function formatRupiah(price) {
        // return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
        return `Rp ${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    }


    useEffect(() => {

        const produk = async () => {

            try {
                await new Promise((resolve) => setTimeout(resolve, 3000));
                const response = await getProduk()

                setProduk(response);
                if (Array.isArray(response)) {
                    setIsNull(false)
                }

            } catch (error) {

                console.log(error)

            }

        }

        produk()

    }, [])


    return (
        <>
            <div className='title-page'>Daftar Produk Dari Server Digiflazz</div>

            <div className='list-produk'>
                <div className='table-responsive' style={{ maxWidth: '100%', overflowX: 'auto' }}>
                    <table className='table table-striped'>
                        <thead>
                            <tr>
                                <td style={{ width: '2%' }}>No</td>
                                <td className='text-center' style={{ width: '30%', minWidth: '150px' }}>Nama</td>
                                <td style={{ width: '10%', minWidth: '100px' }}>Start Off</td>
                                <td style={{ width: '10%', minWidth: '100px' }}>End Off</td>
                                <td style={{ width: '13%', minWidth: '120px' }}>Harga</td>
                                <td style={{ width: '10%', minWidth: '100px' }}>Kategori</td>
                                <td className='text-center' style={{ width: '10%', minWidth: '150px' }}>#</td>
                            </tr>
                        </thead>
                        <tbody>
                            {isNull ? (
                                <tr>
                                    <td colSpan={7} className='text-center'>
                                        Sedang Memuat Data ....
                                    </td>
                                </tr>
                            ) : (

                                produkItem.map((item, index) => (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.product_name}</td>
                                        <td>{item.start_cut_off}</td>
                                        <td>{item.end_cut_off}</td>
                                        <td>{formatRupiah(item.price)}</td>
                                        <td>{item.category}</td>
                                        <td className='text-center'>
                                            <div className='btn btn-sm btn-info' style={{ marginRight: '5px' }}>
                                                Info
                                            </div>
                                            <div className='btn btn-sm btn-primary'>
                                                <Link href={`/admin/digiflazz/${item.buyer_sku_code}/addProduk`} className='no-decoration text-white'>
                                                    Add
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))

                            )}
                        </tbody>
                    </table>
                </div>
            </div>

        </>
    )
}
