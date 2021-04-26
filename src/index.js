import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './reducers';
import App from './containers/app';
import reportWebVitals from './reportWebVitals';
import './assets/styles/index.css';

const initialState = {
  countItem: 0,
  car: [],
  products: [
    {
      id: 446,
      title: 'Té Verde Pureza',
      supplier: 'Kundali',
      tax: '0.19',
      price_real: '22451',
      image:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/7709683463753_5e552d1f49f3a.png',
      thumbnail:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/thumbnail/7709683463753_5e552d1f49f3a.png',
      description:
        'Tés e infusiones 100% natural alineado con los chakras. Combinamos experiencia gastronómica con afinidad bioenergética resultando en la combinación perfecta de suavidad + profundidad + sabor. Desintoxicación y limpieza a través de la esencia del cuatro chakra',
      units_sf: 1,
      slug: 'te-verde-pureza',
      category: 'Bebidas',
      subcategory: 'Tés E Infusiones',
      net_content: '30g',
      sellos: [
        {
          name: 'vegano',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group.png',
        },
      ],
    },
    {
      id: 744,
      title: 'Mezcla Para Pancakes Y Waffles Sabor A Brownie 300 g',
      supplier: 'Why Not',
      tax: '0.19',
      price_real: '19751',
      image:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/7709296944182_5e55873440167.png',
      thumbnail:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/thumbnail/7709296944182_5e55873440167.png',
      description:
        'El chocolate es el placer culposo favorito por excelencia, incluso es el amor platónico de muchos. En la antigüedad los aztecas lo usaban como moneda y era más preciado que el oro. Hemos escogido al chocolate como el protagonista de nuestra mezcla para hacer pancakes, waffles y muffins, en una textura melcochuda, deliciosa y saludable. ',
      units_sf: 1,
      slug: 'mezcla-para-pancakes-y-waffles-sabor-a-brownie-300-g',
      category: 'Despensa',
      subcategory: 'Mezclas',
      net_content: '300g',
      sellos: [
        {
          name: 'vegano',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group.png',
        },
        {
          name: 'khoser',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group1.png',
        },
        {
          name: 'organico',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group2.png',
        },
      ],
    },
    {
      id: 570,
      title: 'Bark Lök Chocolate 70% Mani-Almendra-Pistacho 85 g',
      supplier: 'Lok Foods',
      tax: '0.19',
      price_real: '16751',
      image:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/7709089888976_5e553f22bd85a.png',
      thumbnail:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/thumbnail/7709089888976_5e553f22bd85a.png',
      description:
        'Maní almendra y pistacho chocolate del 70% forman una combinación que podemos disfrutar en cualquier momento',
      units_sf: 1,
      slug: 'bark-loek-chocolate-70-mani-almendra-pistacho-85-g',
      category: 'Antojos',
      subcategory: 'Dulce y Chocolate',
      net_content: '85g',
      sellos: [
        {
          name: 'khoser',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group1.png',
        },
        {
          name: 'organico',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group2.png',
        },
      ],
    },
    {
      id: 125,
      title: 'Bebida Almendra y Coco Proteína 946 ml',
      supplier: 'Terrafertil',
      tax: '0.19',
      price_real: '4901',
      image:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/7502252481789_5e5436cea2d28.png',
      thumbnail:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/thumbnail/7502252481789_5e5436cea2d28.png',
      description:
        'Bebida de almendras coco es deliciosa, es una excelente fuente de calcio, sin lactosa por ser de origen vegetal.',
      units_sf: 1,
      slug: 'bebida-almendra-y-coco-proteina-946-ml',
      category: 'Bebidas',
      subcategory: 'Bebidas De Origen Vegetal',
      net_content: '946ml',
      sellos: [
        {
          name: 'vegano',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group.png',
        },
        {
          name: 'organico',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group2.png',
        },
      ],
    },
    {
      id: 605,
      title: 'Tera Cero - Endulzante Natural A Base De Stevia 250 ml',
      supplier: 'Teprali',
      tax: '0.19',
      price_real: '5901',
      image:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/7709275770771_5e5557c0d8932.png',
      thumbnail:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/thumbnail/7709275770771_5e5557c0d8932.png',
      description:
        'Se aplica directamente en formulaciones reducidas en calorías de azúcar como bebidas frías y calientes (jugos, batidos, yogur, kombucha, té, chocolate, café), helados, salsas, mermeladas, vinagretas, productos panaderos y reposteros saludables, entre otros; no tienen conservantes ni aditivos. No presenta interacción con vitaminas solubles, son inertes a interacciones químicas y estables en presencia de cultivos vivos (levaduras, probióticos y lactobacilos). Es estable en temperaturas de horneado (200 ◦c), cocción, calado, pasteurización, refrigeración y congelación. Se almacena en temperatura ambiente.',
      units_sf: 1,
      slug: 'tera-cero-endulzante-natural-a-base-de-stevia-250-ml',
      category: 'Endulzantes',
      subcategory: 'Líquidos',
      net_content: '250ml',
      sellos: [
        {
          name: 'vegano',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group.png',
        },
        {
          name: 'khoser',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group1.png',
        },
        {
          name: 'organico',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group2.png',
        },
      ],
    },
    {
      id: 229,
      title: 'Espaguettis Quinoaclub (caja) 250 g',
      supplier: 'Segalco',
      tax: '0.19',
      price_real: '4901',
      image:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/7707322030724_5e543cca2d301.png',
      thumbnail:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/thumbnail/7707322030724_5e543cca2d301.png',
      description:
        'Las pastas con quinua tienen el balance ideal entre nutrición y sabor. Su contenido de quinua les aporta una excelente fuente de proteína de alta calidad',
      units_sf: 1,
      slug: 'espaguettis-quinoaclub-caja-250-g',
      category: 'Despensa',
      subcategory: 'Pastas ',
      net_content: '250g',
      sellos: [
        {
          name: 'organico',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group2.png',
        },
      ],
    },
    {
      id: 731,
      title: 'Super Kale Powder 100 g',
      supplier: 'The Superfoods Brand',
      price_real: '11001',
      tax: '0.19',
      image:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/7709298942124_5e5586abe9007.png',
      thumbnail:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/thumbnail/7709298942124_5e5586abe9007.png',
      description:
        'Producto sin aditivos, obtenido a partir de las hojas y tallos seleccionadas de kale (col rizada), 100% natural, buena fuente de calcio y vitaminas, será un gran complemento a tu dieta y fortalecerán tu sistema inmunológico.',
      units_sf: 1,
      slug: 'super-kale-powder-100-g',
      category: 'Despensa',
      subcategory: 'Superalimentos y Funcionales',
      net_content: '100g',
      sellos: [
        {
          name: 'khoser',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group1.png',
        },
      ],
    },
    {
      id: 226,
      title: 'Baby Quinua 5 Cereales (caja) 200 g',
      supplier: 'Segalco',
      price_real: '9450',
      tax: '0.19',
      image:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/7707322030106_5e543cb1cf2df.png',
      thumbnail:
        'https://superfuds-file.s3.us-west-2.amazonaws.com/product/thumbnail/7707322030106_5e543cb1cf2df.png',
      description:
        'El cereal infantil babyquinua® en sus tres sabores, ofrece a su bebe una excelente fuente de proteínas y nutrientes aportados por la quinua y otras 4 cereales, elaborados bajo modernos procesos de transformación y exigentes protocolos de calidad con materias primas 100% naturales y sin la adición de productos artificiales',
      units_sf: 1,
      slug: 'baby-quinua-5-cereales-caja-200-g',
      category: 'Bebes y Niños',
      subcategory: 'Alimento para Bebés',
      net_content: '200g',
      sellos: [
        {
          name: 'khoser',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group1.png',
        },
        {
          name: 'organico',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group2.png',
        },
      ],
    },
    {
      id: 148,
      title: 'Gel Fresa Banano',
      supplier: 'Team Going',
      tax: '0.19',
      price_real: '5651',
      image:
        'https://superfuds-file.s3-us-west-2.amazonaws.com/assets/product/7709990042924_5f5fea886c358.png',
      thumbnail:
        'https://superfuds-file.s3-us-west-2.amazonaws.com/assets/product/thumbnail/7709990042924_5f5fea886c358.png',
      description:
        'Nuestros geles son hechos a base de mucílago de café, alto en antioxidantes y cuenta con vitaminas del complejo b. Es una fuente de energía que se absorbe muy rápido en el cuerpo.',
      units_sf: 1,
      slug: 'gel-fresa-banano',
      category: 'Nutrición',
      subcategory: 'Suplementos',
      net_content: '100ml',
      sellos: [
        {
          name: 'vegano',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group.png',
        },
        {
          name: 'organico',
          image:
            'https://s3-sa-east-1.amazonaws.com/assets.superfuds.com/assets/ecom/v3/Group2.png',
        },
      ],
    },
  ],
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
