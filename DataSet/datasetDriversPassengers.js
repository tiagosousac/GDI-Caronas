/////////////////////////////////////////////////////////////////////////////////////////////
//                                        Povoamento de motoristas

db = db.getSiblingDB("caronas");
db.caronas.drop();
db.caronas.insertMany([
  
  
{
  "name": "Hugo Falcao",
  "age": 20,
  "sex": "Man",
  "contactNumber": "+55 81 98765-8549",
  "rating": 4.7,
  "value": 2,
  "cars": [
    {
      "model": "Tesla Cybertruck",
      "year": 2020,
      "color": "Preto fosco",
      "licensePlate": "YEA7777"
    }
  ]
}, 

{
    "name": "Paulo Teixeira",
    "age": 19,
    "sex": "Man",
    "contactNumber": "+55 81 98765-1191",
    "rating": 4.3,
    "value": 4,
    "cars": [
      {
        "model": "Tesla roadster",
        "year": 2020,
        "color": "Red",
        "licensePlate": "ABC1234"
      }
    ]
  },

{
    "name": "Paula Munchkin",
    "age": 43,
    "sex": "Woman",
    "contactNumber": "+55 81 93214-0091",
    "rating": 1.0,
    "value": 10,
    "cars": [
      {
        "model": "Chevrolet Corsa",
        "year": 2008,
        "color": "Azul mar",
        "licensePlate": "FEA0554"
      }
    ]
  },

{
    "name": "Pedro Meirelles",
    "age": 32,
    "sex": "Man",
    "contactNumber": "+55 81 90721-0091",
    "rating": 3.4,
    "value": 2.50,
    "cars": [
      {
        "model": "Fiat Uno",
        "year": 2015,
        "color": "Azul maril",
        "licensePlate": "FIO9712"
      }
    ]
  },

{
    "name": "Marcia Rodrigues",
    "age": 22,
    "sex": "Woman",
    "contactNumber": "+55 81 90784-1091",
    "rating": 4.6,
    "value": 3,
    "cars": [
      {
        "model": "Ford F150",
        "year": 2017,
        "color": "Preto",
        "licensePlate": "KKK2442"
      }
    ]
  },

{
    "name": "Joana Pereire",
    "age": 58,
    "sex": "Woman",
    "contactNumber": "+55 81 90784-9311",
    "rating": 4.2,
    "value": 3,
    "cars": [
      {
        "model": "Ford Mustang",
        "year": 1969,
        "color": "Preto",
        "licensePlate": "USA4321"
      }
    ]
  },

{
    "name": "Matheus Teixeira",
    "age": 20,
    "sex": "Man",
    "contactNumber": "+55 81 98812-9311",
    "rating": 0.2,
    "value": 8,
    "cars": [
      {
        "model": "Honda Fit",
        "year": 2015,
        "color": "Prata",
        "licensePlate": "IDK0000"
      }
    ]
  },


{
    "name": "Gabriela Heimer",
    "age": 25,
    "sex": "Man",
    "contactNumber": "+55 81 98856-6311",
    "rating": 3.9,
    "value": 4,
    "cars": [
      {
        "model": "Hyundai HB20",
        "year": 2018,
        "color": "Branco",
        "licensePlate": "MDI2205"
      }
    ]
  },

{
    "name": "Gabriel Toledo",
    "age": 31,
    "sex": "Man",
    "contactNumber": "+55 81 98856-9971",
    "rating": 4.8,
    "value": 1.5,
    "cars": [
      {
        "model": "Nissan Rogue",
        "year": 2019,
        "color": "Preto",
        "licensePlate": "YYY1717"
      }
    ]
  },


{
    "name": "Maria dos Santos",
    "age": 18,
    "sex": "Woman",
    "contactNumber": "+55 81 97751-9971",
    "rating": 5,
    "value": 2.5,
    "cars": [
      {
        "model": "Ford Explorer",
        "year": 2015,
        "color": "Vermelho",
        "licensePlate": "AAA0010"
      }
    ]
  },


{
    "name": "Jorge Amado",
    "age": 77,
    "sex": "Man",
    "contactNumber": "+55 81 98001-5971",
    "rating": 4.6,
    "value": 6,
    "cars": [
      {
        "model": "Jeep Grand Cherokee",
        "year": 2019,
        "color": "Branco",
        "licensePlate": "HHH1722"
      }
    ]
  },


  {
    "name": "Mariana Oliveira",
    "age": 33,
    "sex": "Woman",
    "contactNumber": "+55 81 98771-8971",
    "rating": 3.9,
    "value": 3,
    "cars": [
      {
        "model": "Honda CR-V",
        "year": 2018,
        "color": "Azul",
        "licensePlate": "KIK8558"
      }
    ]
  }

]);


/////////////////////////////////////////////////////////////////////////////////////////////
//                                        Povoamento de passageiros                         



db = db.getSiblingDB("caronas");
db.caronas.drop();
db.reviews.insertMany([

{
  "name": "Thiago Souza",
  "age": 21,
  "sex": "Male",
  "contactNumber": "+55 81 99249-3745",
  "rating": 3.8,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "American Express",
      "CardNumber": 348076538100919
    },
    {
      "type":"DC",
      "IssuingNetwork": "MasterCard",
      "CardNumber": 5520009701675747
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Joao Pedro",
  "age": 23,
  "sex": "Male",
  "contactNumber": "+55 81 98919-5163",
  "rating": 5,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "Visa",
      "CardNumber": 4485820938496210
    },
    {
      "type":"DC",
      "IssuingNetwork": "American Express",
      "CardNumber": 373431671731350
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Mario Carlos",
  "age": 59,
  "sex": "Male",
  "contactNumber": "+55 81 96659-6793",
  "rating": 4.8,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "American Express",
      "CardNumber": 344544651851414
    },
    {
      "type":"DC",
      "IssuingNetwork": "MasterCard",
      "CardNumber": 5131728336855330
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Marie Cat",
  "age": 40,
  "sex": "Male",
  "contactNumber": "+55 81 99347-2722",
  "rating": 4.2,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "Visa",
      "CardNumber": 4929074439073425
    },
    {
      "type":"DC",
      "IssuingNetwork": "MasterCard",
      "CardNumber": 5527705096483943
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Jake Long",
  "age": 18,
  "sex": "Male",
  "contactNumber": "+55 81 99765-4563",
  "rating": 4.9,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "American Express",
      "CardNumber": 347398405468976
    },
    {
      "type":"DC",
      "IssuingNetwork": "MasterCard",
      "CardNumber": 5479567285264908
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Joana D'Arc",
  "age": 15,
  "sex": "Male",
  "contactNumber": "+55 81 98942-6185",
  "rating": 4.7,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "American Express",
      "CardNumber": 349005966103433
    },
    {
      "type":"DC",
      "IssuingNetwork": "MasterCard",
      "CardNumber": 5459407849980109
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Elon Musk",
  "age": 55,
  "sex": "Male",
  "contactNumber": "+55 81 95512-4472",
  "rating": 2.0,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "Visa",
      "CardNumber": 4556221262782909
    },
    {
      "type":"DC",
      "IssuingNetwork": "American Express",
      "CardNumber": 340901643367897
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Vitoria Rocha",
  "age": 31,
  "sex": "Male",
  "contactNumber": "+55 81 94505-4810",
  "rating": 4.0,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "American Express",
      "CardNumber": 379499123807866
    },
    {
      "type":"DC",
      "IssuingNetwork": "MasterCard",
      "CardNumber": 5227375449651456
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "D. Pedro II",
  "age": 34,
  "sex": "Male",
  "contactNumber": "+55 81 97668-5637",
  "rating": 3.8,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "Visa",
      "CardNumber": 4809303947457738
    },
    {
      "type":"DC",
      "IssuingNetwork": "MasterCard",
      "CardNumber": 5355204189568031
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Victor Marcelo",
  "age": 41,
  "sex": "Male",
  "contactNumber": "+55 81 94682-1334",
  "rating": 5,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "Visa",
      "CardNumber": 4716743045291897
    },
    {
      "type":"DC",
      "IssuingNetwork": "American Express",
      "CardNumber": 374215250007236
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Marcela Ramos",
  "age": 37,
  "sex": "Male",
  "contactNumber": "+55 81 98970-8872",
  "rating": 2.1,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "Visa",
      "CardNumber": 4532540386573277
    },
    {
      "type":"DC",
      "IssuingNetwork": "MasterCard",
      "CardNumber": 5364591470955235
    },
    {
      "type":"Cash"
    }
]
},

{
  "name": "Clara Vieira",
  "age": 21,
  "sex": "Male",
  "contactNumber": "+55 81 97381-7760",
  "rating": 3.3,
  "paymentOptions": [
    {
      "type":"CC",
      "IssuingNetwork": "Visa",
      "CardNumber": 4916722585871449
    },
    {
      "type":"DC",
      "IssuingNetwork": "American Express",
      "CardNumber": 374694495935924
    },
    {
      "type":"Cash"
    }
]
}


]);