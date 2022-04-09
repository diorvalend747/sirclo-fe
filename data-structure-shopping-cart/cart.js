class Cart {
  constructor() {
    this.cart = [];
  }
  
  getUniqueItem(kodeProduk) {
    return this.cart.findIndex(produk => produk.kodeProduk === kodeProduk);
  }

  tambahProduk(kodeProduk, kuantitas) {
    if (this.getUniqueItem(kodeProduk) < 0) {
      this.cart.push({kodeProduk, kuantitas});
    } else {
      this.cart[this.getUniqueItem(kodeProduk)].kuantitas += kuantitas
    }
  }

  hapusProduk(kodeProduk) {
    if (this.getUniqueItem(kodeProduk) < 0) {
      return;
    } else {
      this.cart.splice(this.getUniqueItem(kodeProduk), 1);
    }
  }

  tampilkanCart() {
    this.cart.forEach((itemOnCart) => {
      return (`${itemOnCart.kodeProduk} (${itemOnCart.kuantitas})`);
    });
  }
}

module.exports = Cart;