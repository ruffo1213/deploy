const {PrismaClient} = require ("@prisma/client")
const prisma = new PrismaClient()


const criarContato =  async (nome, sobrenome, email) => {

  const contatos = await prisma.contato.create({
  data: {
    nome,
    sobrenome,
    email
    
  }
})
return contatos
};

const listarContatos = async () => {
 const contatos = await prisma.contato.findMany()
  return contatos;
};

module.exports = { criarContato, listarContatos };



