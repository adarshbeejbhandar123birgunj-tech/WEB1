import { Product } from '../types';
import { productsSML } from './productsSML';
import { productsAdama } from './productsAdama';
import { productsMankind } from './productsMankind';
import { productsAlbaugh } from './productsAlbaugh';
import { productsISP } from './productsISP';
import { productsEquipment } from './productsEquipment';

export {
  productsSML,
  productsAdama,
  productsMankind,
  productsAlbaugh,
  productsISP,
  productsEquipment
};

// All 129 authentic catalog products categorized by Company Section and Agricultural Category
export const productsData: Product[] = [
  ...productsSML,
  ...productsAdama,
  ...productsMankind,
  ...productsAlbaugh,
  ...productsISP,
  ...productsEquipment
];
