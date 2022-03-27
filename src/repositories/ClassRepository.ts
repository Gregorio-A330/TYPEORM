import { EntityRepository, Repository } from 'typeorm';
import Class from '../models/Class';

@EntityRepository(Class) //anotação ou decorator, acima da nossa classe indetificando que a nossa classe é um repositório, é uma entidade de repositório
//esse repositório vai conversar com quem? (parametro)
export default class ClassRepository extends Repository<Class> {
  public async findByName(name: string) : Promise<Class[]>{
    return this.find({
      where: {
        name,
      }
    }) //parametro para especificar, indicando o parametro /:name
  }
}