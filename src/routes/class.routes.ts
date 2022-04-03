import { Router } from 'express';
import { getCustomRepository, getRepository } from 'typeorm';
import Class from '../models/Class';
import ClassRepository from '../repositories/ClassRepository';


const classRouter = Router();


//Criar uma rota de inserção
//vindo o arquivo index.ts do routes quando bater na rota de class, abaixo irá indicar que tudo o que for daquela rota cairá aqui

classRouter.post('/', async (request, response) => {
  try{
    const repo = getRepository(Class); //retorna o repositório 
    const res = await repo.save(request.body)//irá salvar um registro no banco
    return response.status(201).json(res); //retorna conforma solicitação do save
  } catch(err) {
    console.log('err.message :>> ', err.message);
    return response.status(400).send();
  }
})

classRouter.get('/', async(request, response) => {
  //mesma treta de cima, porem em uma linha só
  //caso não recuperar a informação pelo insomnia, verifique se não esqueceu do await (função assincrona)
  response.json(await getRepository(Class).find())
})

classRouter.get('/:name', async (request, response) => {
  const repository = getCustomRepository(ClassRepository)
  const res = await repository.findByName(request.params.name) // -> joguei para um metodo criado 'que vai intermediar'
  response.json(res);

})// localhost:3000/class/AP-II
//filtro por nome dentro do parametro 

export default classRouter;