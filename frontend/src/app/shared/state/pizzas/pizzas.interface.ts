export interface IPizza {
  id: string;
  name: string;
  ingredients: string;
  prices: [number];
  category: string;
}

export interface IPizzas {
  byId: { [key: string]: IPizza };
  allIds: string[];
}

export interface IPizzaWithPrice extends IPizza {
  orderId: string;
  price: number;
  size: string;
}
