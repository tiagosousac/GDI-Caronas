use caronas;

// Conta quantos motoristas possuem apenas um carro
db.reviews.find({cars:{$size: 1}}).count();