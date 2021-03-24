const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

// const customerInfo = (order) => {
//   const deliveryGuy = order.order.delivery.deliveryPerson;
//   const custumerName = order.name;
//   const mobile = order.phoneNumber;
//   const address = order.address.street;
//   const houseNumber = order.address.number;
//   const apartmentNumber = order.address.apartment;

//   console.log(`Olá, ${deliveryGuy}. Entrega para: ${custumerName}, Telefone: ${mobile}, ${address}, Nº ${houseNumber}, Ap: ${apartmentNumber}. `)
// }

// customerInfo(order);

const orderModifier = (order) => {
  const newCustmer = order.name = 'Luiz Silva';
  const pizzas = Object.keys(order.order.pizza);
  const drinks = order.order.drinks.coke.type;
  const newTotal = order.payment.total = '50';

  console.log(`Olá ${newCustmer}, o total do seu pedido de ${pizzas} e ${drinks} é R$ ${newTotal},00.`);
}

orderModifier(order);
