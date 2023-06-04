// Product Data
var products = [
    { id: 1, name: "Produk A", price: 100 },
    { id: 2, name: "Produk B", price: 200 },
    { id: 3, name: "Produk C", price: 150 },
    { id: 4, name: "Produk D", price: 300 },
    { id: 5, name: "Produk E", price: 250 }
  ];
  
  // Fungsi untuk menampilkan daftar produk
  function displayProducts() {
    console.log("Daftar Produk:");
    products.forEach(function(product) {
      console.log(product.id + ". " + product.name + " - Harga: $" + product.price);
    });
    console.log("-----------------------");
  }
  
  // Fungsi untuk menghitung total harga produk
  function calculateTotalPrice(productIds) {
    var totalPrice = 0;
    productIds.forEach(function(productId) {
      var product = products.find(function(p) {
        return p.id === productId;
      });
      if (product) {
        totalPrice += product.price;
      }
    });
    return totalPrice;
  }
  
  // Contoh penggunaan fungsi-fungsi di atas
  displayProducts();
  
  var selectedProducts = [1, 3, 5];
  var total = calculateTotalPrice(selectedProducts);
  console.log("Total Harga: $" + total);
  