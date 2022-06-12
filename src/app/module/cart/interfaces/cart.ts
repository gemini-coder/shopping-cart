import {Product} from '../../product/interfaces/product';

export interface Cart {
  items: CartItem[];
}

export interface CartItem {
  product: Product;
  unitPrice: number;
  discountPercentage: number;
  discountAmount: number;
  lineAfterDiscounts: number;
}
