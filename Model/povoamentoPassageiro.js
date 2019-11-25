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