use caronas;

// Conta quantos motoristas possuem apenas um carro
db.caronas.find({cars:{$size: 1}}).count();

// Mostra, com o comando pretty(), apenas os motoristas que possuem carros.
db.caronas.find({cars:{$exists:true}}).pretty()

// Mostra a média de nota dos motoristas homens e mulheres
db.caronas.aggregate([
  { $match: { cars: {$exists:true} } },
  { $group: { _id: "$sex", total: { $avg: "$rating" } } },
  { $sort: { total: -1 } }
])

//Mostra apenas o nome de todos os motoristas com nota acima ou igual a 4.0
db.caronas.find({rating: {$gte:4.0}}, {name: 1})

//Mostra os 5 motoristas com a melhor nota
db.caronas.find().sort({"rating":-1}).limit(5)

// Mostra a maior idade dos motoristas homens e mulheres
db.caronas.aggregate([
  { $match: { cars: {$exists:true} } },
  { $group: { _id: "$sex", total: { $max: "$age" } } },
  { $sort: { total: -1 } }
])

// Encontra motoristas com nota 5.0
db.caronas.find( {$where: function() {return ((this.rating) == "5.0")} } )

// Muda o nome da coleção "reviews" para "usuarios"
db.reviews.renameCollection("usuarios", true)

// Exibe as motoristas mulheres ou motoristas com rating maior que 4
db.caronas.find({$expr: {$cond: {if: {$or: [{$eq: ["$sex", "Woman"]},{$gte:["$rating", 4]}]},then: {sex: "Woman"}, else: null}}}).pretty()

// Utilizando o update
db.caronas.update({name: "Hugo Falcao"}, {$set: {age: 21}})

// Utilizando findOne para encontrar algum motorista com avaliação 4.6
db.caronas.findOne({rating:4.6})

// Exibe a quantidade de carros por gênero
db.caronas.aggregate([{$group:{_id: "$sex", quantidadeCarros:{$sum:{$size: "$cars" }}}},{$sort:{"quantidadeCarros":-1}}])

// Exibe apenas os clientes com cartões de débito e crédito
db.usuarios.find({ "paymentOptions.type": { $all: ["CC", "DC"]}}).pretty()

// Utilizando Save
db.caronas.save({
  name: "Vinicius Vilela",
  age: 23,
  sex: "Man",
  contactNumber: "+55 81 99634-9609",
  rating: 2.7,
  value: 7,
  cars: [{model:"Fusca", year:1955, color:"Rosa", licensePlate: "AAA0404"}]
})

// Utilizando addToSet
db.caronas.update( {name: "Vinicius Vilela"},
  {$addToSet: {
    cars:{
      $each:
      [{model:"Ford KA", year:2018, color: "Verde", licensePlate: "BBB0202"},
        {model:"Renault Logan", year:2016, color:"Azul", licensePlate: "CCC0101"}]
    }
  }
})

// Utilizando o text, precisei criar um index
db.caronas.createIndex({name: "text"})
db.caronas.find({$text: {$search: "Vinicius"}})

// mapeia motoristas pela classificação considerando apenas o sexo feminino
function map() {
  emit (this.rating, this.name);
}

function reduce(key, motoristas) {
  return motoristas.join();
}

db.caronas.mapReduce(map,reduce, {out: "mapeamento",  query: {sex: "Woman"}})
