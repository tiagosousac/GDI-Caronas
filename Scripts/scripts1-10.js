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