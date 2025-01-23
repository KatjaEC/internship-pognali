const CARDS_TO_SHOW = 4;

const cardsData = [
  {
    name: 'Кот Котович',
    level: '100',
    image: 'img/slides/cards-photo-5',
    flags: [
      {
        icon: 'flag-thailand',
        alt: 'Флаг Таиланда.',
        countryName: 'Таиланд',
      },
      {
        icon: 'flag-dominica',
        alt: 'Флаг Доминики.',
        countryName: 'Доминика',
      },
      {
        icon: 'flag-sri-lanka',
        alt: 'Флаг Шри-Ланки.',
        countryName: 'Шри-Ланка',
      }
    ],
    tags: ['#тунец #дразнилки #лежанка #сон #шпионаж'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      },
      {
        statusAttr: 'is-disabled',
      }
    ],
    statusMods: '--is-online',
    availabilityMods: '--is-available',
    likesNumber: 30000,
  },
  {
    name: 'Енот Енотский',
    level: '99',
    image: 'img/slides/cards-photo-6',
    flags: [
      {
        icon: 'flag-australia',
        alt: 'Флаг Австралии.',
        countryName: 'Австралия',
      },
      {
        icon: 'flag-thailand',
        alt: 'Флаг Таиланда.',
        countryName: 'Таиланд',
      },
      {
        icon: 'flag-seychelles',
        alt: 'Флаг Сейшельских Островов.',
        countryName: 'Сейшелы',
      }
    ],
    tags: ['#парки #природа #марвел'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      },
      {
        statusAttr: 'is-enabled',
      }
    ],
    statusMods: '--is-offline',
    availabilityMods: '--is-available',
    likesNumber: 23500,
  },
  {
    name: 'Шпиц Колобкова',
    level: '80',
    image: 'img/slides/cards-photo-7',
    flags: [
      {
        icon: 'flag-bosnia-herzegovina',
        alt: 'Флаг Боснии и Герцеговины.',
        countryName: 'Босния и Герцеговина',
      },
      {
        icon: 'flag-sri-lanka',
        alt: 'Флаг Шри-Ланки.',
        countryName: 'Шри-Ланка',
      },
      {
        icon: 'flag-belgium',
        alt: 'Флаг Бельгии.',
        countryName: 'Бельгия',
      }
    ],
    tags: ['#прогулки #мячик #бананы'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      }
    ],
    statusMods: '--is-online',
    availabilityMods: '--is-available',
    likesNumber: 25000,
  },
  {
    name: 'Енот Ракетин',
    level: '50',
    image: 'img/slides/cards-photo-6',
    flags: [
      {
        icon: 'flag-thailand',
        alt: 'Флаг Таиланда.',
        countryName: 'Таиланд',
      },
      {
        icon: 'flag-seychelles',
        alt: 'Флаг Сейшельских Островов.',
        countryName: 'Сейшелы',
      },
      {
        icon: 'flag-australia',
        alt: 'Флаг Австралии.',
        countryName: 'Австралия',
      }
    ],
    tags: ['#парки #природа #марвел #ночные прогулки'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      },
      {
        statusAttr: 'is-disabled',
      }
    ],
    statusMods: '--is-online',
    availabilityMods: '--is-available',
    likesNumber: 20500,
  },
  {
    name: 'Кот Котейский',
    level: '99',
    image: 'img/slides/cards-photo-5',
    flags: [
      {
        icon: 'flag-dominica',
        alt: 'Флаг Доминики.',
        countryName: 'Доминика',
      },
      {
        icon: 'flag-sri-lanka',
        alt: 'Флаг Шри-Ланки.',
        countryName: 'Шри-Ланка',
      },
      {
        icon: 'flag-thailand',
        alt: 'Флаг Таиланда.',
        countryName: 'Таиланд',
      }
    ],
    tags: ['#лосось #дразнилки #сон #вкусняшки'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      }
    ],
    statusMods: '--is-online',
    availabilityMods: '--is-available',
    likesNumber: 27000,
  },
  {
    name: 'Шпиц Шпицин',
    level: '100',
    image: 'img/slides/cards-photo-7',
    flags: [
      {
        icon: 'flag-australia',
        alt: 'Флаг Австралии.',
        countryName: 'Австралия',
      },
      {
        icon: 'flag-thailand',
        alt: 'Флаг Таиланда.',
        countryName: 'Таиланд',
      },
      {
        icon: 'flag-seychelles',
        alt: 'Флаг Сейшельских Островов.',
        countryName: 'Сейшелы',
      }
    ],
    tags: ['#белки #дача #лакомства #сон'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      },
      {
        statusAttr: 'is-enabled',
      }
    ],
    statusMods: '--is-offline',
    availabilityMods: '--is-available',
    likesNumber: 26500,
  },
  {
    name: 'Иван Краев',
    level: '50',
    image: 'img/slides/cards-photo-3',
    flags: [
      {
        icon: 'flag-usa',
        alt: 'Флаг США.',
        countryName: 'США',
      },
      {
        icon: 'flag-australia',
        alt: 'Флаг Австралии.',
        countryName: 'Австралия',
      },
      {
        icon: 'flag-bosnia-herzegovina',
        alt: 'Флаг Боснии и Герцеговины.',
        countryName: 'Босния и Герцеговина',
      }
    ],
    tags: ['#музыка #тату #converse'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      }
    ],
    statusMods: '--is-offline',
    availabilityMods: '--is-available',
    likesNumber: 570,
  },
  {
    name: 'Елена Петрова',
    level: '80',
    image: 'img/slides/cards-photo-4',
    flags: [
      {
        icon: 'flag-uk',
        alt: 'Флаг Великобритании.',
        countryName: 'Великобритания',
      },
      {
        icon: 'flag-thailand',
        alt: 'Флаг Таиланда.',
        countryName: 'Таиланд',
      },
      {
        icon: 'flag-germany',
        alt: 'Флаг Германии.',
        countryName: 'Германия',
      }
    ],
    tags: ['#образование #карьера #учеба'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      },
      {
        statusAttr: 'is-disabled',
      }
    ],
    statusMods: '--is-online',
    availabilityMods: '--is-available',
    likesNumber: 236,
  },
  {
    name: 'Кошка Котэева',
    level: '100',
    image: 'img/slides/cards-photo-5',
    flags: [
      {
        icon: 'flag-sri-lanka',
        alt: 'Флаг Шри-Ланки.',
        countryName: 'Шри-Ланка',
      },
      {
        icon: 'flag-dominica',
        alt: 'Флаг Доминики.',
        countryName: 'Доминика',
      },
      {
        icon: 'flag-thailand',
        alt: 'Флаг Таиланда.',
        countryName: 'Таиланд',
      }
    ],
    tags: ['#птицы #когтеточка #ночные прогулки по хозяину'],
    transport: [
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-enabled',
      },
      {
        statusAttr: 'is-disabled',
      },
      {
        statusAttr: 'is-enabled',
      }
    ],
    statusMods: '--is-online',
    availabilityMods: '--is-available',
    likesNumber: 30000,
  }
];

export {CARDS_TO_SHOW, cardsData};
