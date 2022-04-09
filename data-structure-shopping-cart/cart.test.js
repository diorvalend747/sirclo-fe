const { test } = require('@jest/globals');
const Cart = require('./cart');

describe('Cart', () => {

    describe('tambah produk', () => {
        const keranjang = new Cart();
    
        keranjang.tambahProduk("Apel", 2);
        keranjang.tambahProduk("Anggur", 2);
        keranjang.tambahProduk("Apel", 2);
    
        keranjang.tampilkanCart();

        test('tambah produk', () => {
            expect(keranjang.cart).toStrictEqual([{ "kodeProduk": "Apel", "kuantitas": 4 }, { "kodeProduk": "Anggur", "kuantitas": 2 }])
        })
    })

    describe('hapus produk', () => {
        const keranjang = new Cart();
    
        keranjang.tambahProduk("Apel", 2);
        keranjang.tambahProduk("Anggur", 2);
        keranjang.tambahProduk("Apel", 2);

        keranjang.hapusProduk("Anggur")
    
        keranjang.tampilkanCart();
        
        test('tambah produk', () => {
            expect(keranjang.cart).toStrictEqual([{ "kodeProduk": "Apel", "kuantitas": 4 }])
        })
    })

})