export interface Product {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  sizes: Size[];
  color: Color;
  images: Image[];
}

export interface ProductCart {
  id: string;
  category: Category;
  name: string;
  price: string;
  isFeatured: boolean;
  size: string;
  color: Color;
  images: Image[];
}


export interface Image {
  id: string;
  url: string;
}

export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: Billboard;
}

export interface Size {
  id: string;
  name: string;
  value: string;
}

export interface Genre {
  id: string;
  name: string;
  value: string;
}

export interface Color {
  id: string;
  name: string;
  value: string;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product: Product;
  size: string;
}

export interface Order {
  id: string;
  ownerId: string;
  storeId: string;
  isPaid: boolean;
  phone: string;
  address: string;
  createdAt: string;
  updatedAt: string;
  isShipped: boolean;
  orderItems: OrderItem[];
  shippedCode: string;
}