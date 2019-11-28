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