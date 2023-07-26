'use strict';

export class Inventory {

    products = [
        { id: 0, discount: 15,title: 'Appenzeller Käse', subtitle: 'Tierprodukt', price: 5.40, image: 'https://image.migros.ch/2017-large/bc33dd03ebf40e01a98431432cb1b9f1396ed00d/bio-appenzeller-kaese-mild.jpg' },
        { id: 1, discount: 0, title: 'Freiland Eier 6stk.', subtitle: 'Tierprodukt', price: 6.00, image: 'https://image.migros.ch/2017-large/6d61fe4540542820951f10fd4b4a9ff3c81eb1d8/schweizer-eier-aus-freilandhaltung.jpg' },
        { id: 2, discount: 0, title: 'Kult Ice Tea Zitrone', subtitle: 'Trinken', price: 0.90, image: 'https://image.migros.ch/2017-large/6dfaa2585f0a4e5d5c85bdc0def62ee8972d67b7/kult-ice-tea-zitrone.jpg' },
        { id: 3, discount: 15, title: 'Kult Ice Tea Pfirsich', subtitle: 'Trinken', price: 0.90, image: 'https://image.migros.ch/2017-large/b46fdff5aeade7413ae7084b946d1371888eda48/kult-ice-tea-pfirsich.jpg' },
        { id: 4, discount: 20, title: 'Kalbsbratwurst', subtitle: 'Tierprodukt', price: 4.80, image: 'https://image.migros.ch/2017-large/8aae4bb7546663a239042e9939d970f0a09a5e4a/kalbsbratwurst-1-paar-ip-suisse.jpg' },
        { id: 5, discount: 50, title: 'Krustenkranz', subtitle: 'Brot', price: 2.90, image: 'https://image.migros.ch/2017-large/f3f708e6cf00e7d53dd7d57d5ca90d9bc8871a80/krustenkranz.jpg' },
        { id: 6, discount: 15,  title: 'Äpfel Gala', subtitle: 'Frucht', price: 0.20, image: 'https://image.migros.ch/2017-large/f81b0f446007c4939797ec57352e0694835f4ce1/aepfel-gala.jpg' },
        { id: 7, discount: 0, title: 'Bio Erdbeeren', subtitle: 'Frucht', price: 5.20, image: 'https://image.migros.ch/2017-large/7ba5ce75559de62cec97020b41b82e5707d5cccd/bio-erdbeeren.jpg' },
        { id: 8, discount: 0, title: 'Thomy Senf mild', subtitle: 'Gewürz', price: 1.95, image: 'https://image.migros.ch/2017-large/5c5df728e73e7326398a473005dd27039bf952e4/thomy-senf-mild.jpg' },
        { id: 9, discount: 60, title: 'Heinz Ketchup Light', subtitle: 'Gewürz', price: 3.95, image: 'https://image.migros.ch/2017-large/0852d495d4ef2e4b575225f72c452ebb91b65f02/heinz-ketchup-light.jpg' },
        { id: 10,discount: 30,  title: 'Bio Nature Joghurt', subtitle: 'Süssigkeit', price: 1.35, image: 'https://image.migros.ch/2017-large/ea953e86cdd572899ccad9c4bac828dab8346f58/bio-nature-joghurt.jpg' }
    ];

    constructor() { }
}