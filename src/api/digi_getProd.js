
const getProduk = async () => {

    try {  

        const response = await fetch('http://localhost:300/api/produk/gAllProd', {
        // const response = await fetch('https://83wgd7hk-300.asse.devtunnels.ms/api/produk/gAllProd', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "kategori": ""
            }),
        });

        if (response.ok) {
            const responseData = await response.json();
            return responseData.data
        } else {
            const errorData = await response.json();
            console.log(errorData)
        }
    } catch (error) {
        console.error('Terjadi kesalahan server:', error);
    }

};

const findProduk = async (skuCode) => {
    // console.log(skuCode);
    try {

        const response = await fetch('http://localhost:300/api/produk/findProduk', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "skuCode": skuCode
            }),
        })

        if (response.ok) {
            const responseData = await response.json();
            return responseData.data
        } else {
            const errorData = await response.json();
            console.log(errorData)
        }

    } catch (error) {
        console.error("Terjadi Kesalahan ini:" + error);
    }

}


export {
    getProduk,
    findProduk,
}