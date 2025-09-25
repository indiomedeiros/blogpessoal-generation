import { InjectRepository } from '@nestjs/typeorm';
import { Tema } from '../entities/tema.entity';
import { Repository } from 'typeorm';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class TemaService {
  constructor(
    @InjectRepository(Tema)
    private temaRepository: Repository<Tema>,
  ) {}

  async findAll(): Promise<Tema[]> {
    return await this.temaRepository.find({ relations: { postagem: true } });
  }

  async findById(id: number): Promise<Tema> {
    const tema = await this.temaRepository.findOne({
      where: {
        id,
      },
      relations: {
        postagem: true,
      },
    });

    if (!tema)
      throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

    return tema;
  }

  async create(tema: Tema): Promise<Tema> {
    return await this.temaRepository.save(tema);
  }

  async update(id: number, tema: Tema): Promise<Tema> {
    const updateResult = await this.temaRepository.update(id, tema);
    if (!updateResult.affected)
      throw new HttpException('Tema não encontrado!', HttpStatus.NOT_FOUND);

    return await this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.temaRepository.delete(id);
  }
}
