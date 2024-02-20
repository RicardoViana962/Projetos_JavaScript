let amigo = {nome: 'José',
 sexo: 'M',
  peso: 85.4,
   engordar(p){
    console.log('engordou')
    this.peso += p
   }}

   amigo. engordar(5)
    console.log(`${amigo.nome} pesa ${amigo.peso} Kg.`) 
