import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Попсокет 002 розовый',
      description: 'для смартфона, для планшета, для телефона',
      price: 329990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pfd/p6d/47574716.png?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/popsoket-002-rozovyi-122283935/?c=111810000'
    },
    {
      id: 2,
      name: 'Samsung Galaxy S24 256GB',
      description: 'Флагманский смартфон Samsung с AI-функциями и процессором Snapdragon 8 Gen 3. AMOLED дисплей 6.2" и тройная камера.',
      price: 289990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h6f/h23/84963273736222.png?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-s24-5g-8-gb-256-gb-chernyi-116042629/?c=111810000'
    },
    {
      id: 3,
      name: 'MacBook Air M2 256GB',
      description: 'Ультратонкий ноутбук Apple на чипе M2 с дисплеем Liquid Retina 13.6". До 18 часов работы от батареи.',
      price: 589990,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p37/p87/22158172.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2022-13-6-16-gb-ssd-256-gb-macos-mc7x4-133963854/?c=111810000'
    },
    {
      id: 4,
      name: 'Sony PlayStation 5 Slim',
      description: 'Игровая консоль нового поколения с SSD-накопителем 1 ТБ и поддержкой 4K 120fps. Включает геймпад DualSense.',
      price: 259990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=111810000'
    },
    {
      id: 5,
      name: 'Apple AirPods Pro 2',
      description: 'Беспроводные наушники с активным шумоподавлением H2 и Adaptive Audio. До 30 часов с зарядным футляром.',
      price: 119990,
      rating: 4.8,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=111810000'
    },
    {
      id: 6,
      name: 'Samsung 55" QLED 4K Smart TV',
      description: 'Телевизор Samsung QLED с разрешением 4K UHD и процессором Quantum 4K. Smart TV на платформе Tizen.',
      price: 219990,
      rating: 4.6,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa0/pe9/73690520.jpeg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/samsung-qled-qe55ls03fauxce-140-sm-chernyi-145890835/?c=111810000'
    },
    {
      id: 7,
      name: 'Бразильяна Yourself бордовый',
      description: 'Размер в размер , высокая посадка , мягкое (не колкое) кружево. Ткань не выгорает и не выцветает. Не давят на живот и не врезаются',
      price: 2667,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p5a/pbc/81271341.jpeg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/brazil-jana-yourself-brazil-jana-stringi-kruzhevnye-bordovyi-2xl-150509214/?c=111810000'
    },
    {
      id: 8,
      name: 'Apple Watch Series 9 45mm',
      description: 'Смарт-часы Apple Watch Series 9 с чипом S9 и функцией Double Tap. Always-On дисплей и мониторинг здоровья.',
      price: 159990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p9a/pd7/3360618.png?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/apple-watch-series-10-s-m-42-mm-cherno-sinii-128578467/?c=111810000'
    },
    {
      id: 9,
      name: 'Dyson V15 Detect',
      description: 'Беспроводной пылесос Dyson с лазерным обнаружением пыли и мощностью 240 Вт. Автоматически регулирует мощность.',
      price: 249990,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa4/p32/77965055.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/dyson-v15-detect-absolute-sv47-serebristyi-113691132/?c=111810000'
    },
    {
      id: 10,
      name: 'Lenovo IdeaPad 5 Pro 16" i5',
      description: 'Ноутбук Lenovo с процессором Intel Core i5-12500H и IPS-дисплеем 2.5K 120Hz. 16 ГБ ОЗУ и SSD 512 ГБ.',
      price: 199990,
      rating: 4.5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p11/p2c/13052980.jpg?format=gallery-medium',
      images: [
      ],
      link: 'https://kaspi.kz/shop/p/lenovo-ideapad-slim-3-15irh8-15-6-16-gb-ssd-512-gb-win-11-pro-83em0607rk-131384254/?c=111810000'
    }
  ];
}
