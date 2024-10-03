import { Recipe } from '../types/Recipe';

export const initialRecipes: Recipe[] = [
  {
    id: 1,
    name: 'Борщ',
    description: 'Классический украинский борщ',
    portions: 4,
    ingredients: [
      { name: 'Свекла', amount: 400, unit: 'г' },
      { name: 'Капуста', amount: 300, unit: 'г' },
      { name: 'Картофель', amount: 400, unit: 'г' },
      { name: 'Морковь', amount: 200, unit: 'г' },
      { name: 'Лук', amount: 200, unit: 'г' },
    ],
  },
  {
    id: 2,
    name: 'Паста Карбонара',
    description: 'Итальянская паста с беконом и сыром',
    portions: 2,
    ingredients: [
      { name: 'Спагетти', amount: 200, unit: 'г' },
      { name: 'Бекон', amount: 100, unit: 'г' },
      { name: 'Яйца', amount: 2, unit: 'шт' },
      { name: 'Сыр Пармезан', amount: 50, unit: 'г' },
    ],
  },
  {
    id: 3,
    name: 'Греческий салат',
    description: 'Свежий салат с фетой и оливками',
    portions: 3,
    ingredients: [
      { name: 'Помидоры', amount: 300, unit: 'г' },
      { name: 'Огурцы', amount: 200, unit: 'г' },
      { name: 'Сыр Фета', amount: 150, unit: 'г' },
      { name: 'Оливки', amount: 50, unit: 'г' },
      { name: 'Оливковое масло', amount: 30, unit: 'мл' },
    ],
  },
  {
    id: 4,
    name: 'Суши роллы',
    description: 'Японские роллы с лососем и авокадо',
    portions: 2,
    ingredients: [
      { name: 'Рис для суши', amount: 300, unit: 'г' },
      { name: 'Нори', amount: 4, unit: 'листа' },
      { name: 'Лосось', amount: 200, unit: 'г' },
      { name: 'Авокадо', amount: 1, unit: 'шт' },
    ],
  },
  {
    id: 5,
    name: 'Тирамису',
    description: 'Итальянский десерт с кофе и маскарпоне',
    portions: 6,
    ingredients: [
      { name: 'Маскарпоне', amount: 500, unit: 'г' },
      { name: 'Печенье Савоярди', amount: 200, unit: 'г' },
      { name: 'Кофе эспрессо', amount: 200, unit: 'мл' },
      { name: 'Яйца', amount: 4, unit: 'шт' },
      { name: 'Сахар', amount: 100, unit: 'г' },
    ],
  },
];