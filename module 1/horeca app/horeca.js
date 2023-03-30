
const menu = {
  'Bier': 2.50,
  'Wijn': 3.50,
  'Frisdrank': 1.50,
  'Nootjes': 2.00,
  'Bitterballen (8 stuks)': 5.00,
  'Nachos': 4.50,
};


const order = [];


function addItem(itemName, quantity) {
  if (menu.hasOwnProperty(itemName)) {
    order.push({ name: itemName, quantity: quantity });
    console.log(`Added ${quantity}x ${itemName} to order.`);
  } else {
    console.log(`Sorry, we don't have ${itemName} on the menu.`);
  }
}


function calculateTotal() {
  let total = 0;
  const itemPrices = {};
  order.forEach(item => {
    const itemName = item.name;
    const itemPrice = menu[itemName];
    if (itemPrices.hasOwnProperty(itemName)) {
      itemPrices[itemName] += itemPrice * item.quantity;
    } else {
      itemPrices[itemName] = itemPrice * item.quantity;
    }
    total += itemPrice * item.quantity;
  });
  console.log('---REKENING---');
  Object.keys(itemPrices).forEach(itemName => {
    console.log(`${itemName}: ${itemPrices[itemName].toFixed(2)}`);
  });
  console.log(`Totaal: ${total.toFixed(2)}`);
}


addItem('Bier', 2);
addItem('Bitterballen (8 stuks)', 1);
addItem('Wijn', 1);
addItem('Nachos', 2);


calculateTotal();
