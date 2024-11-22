import React from 'react'
import Image from 'next/image'
export default function PayMethodGame() {
    return (
        <>
            <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed btn-atas" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            QRIS
                        </button>
                    </h2>
                    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Ini Adalah Pilihan Q-RIS
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                            Virtual Account
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            <div className='payMethod-va'>
                                <div className='payMethod-va-item'>
                                    <div className='gambar'>
                                        <Image
                                            src='/logo_bank/bca.jpg'
                                            alt='bca'
                                            width={100}
                                            height={50}
                                        />

                                    </div>
                                    <div className='deskripsi'>
                                        <div className='nama-bank'>
                                            VIRTUAL AKUN BCA
                                        </div>
                                        <div className='harga'>
                                            Rp. 10.000.000
                                        </div>
                                    </div>
                                </div>
                                <div className='payMethod-va-item active'>
                                    <div className='gambar'>
                                        <Image
                                            src='/logo_bank/bri.jpg'
                                            alt='bri'
                                            width={100}
                                            height={50}
                                        />

                                    </div>
                                    <div className='deskripsi'>
                                        <div className='nama-bank'>
                                            VIRTUAL AKUN BRI
                                        </div>
                                        <div className='harga'>
                                            Rp. 10.000.000
                                        </div>
                                    </div>
                                </div>
                                <div className='payMethod-va-item'>
                                    <div className='gambar'>
                                        <Image
                                            src='/logo_bank/permata.jpg'
                                            alt='permata'
                                            width={100}
                                            height={50}
                                        />

                                    </div>
                                    <div className='deskripsi'>
                                        <div className='nama-bank'>
                                            VIRTUAL AKUN PERMATA BANK
                                        </div>
                                        <div className='harga'>
                                            Rp. 10.000.000
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                        <button class="accordion-button collapsed btn-bawah" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            E-Wallet
                        </button>
                    </h2>
                    <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                        <div class="accordion-body">
                            Ini Adalah Pilihan E-Wallet
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
