import { InjectRepository } from '@nestjs/typeorm';
import { Postagem } from '../entities/postagem.entity';
import { ILike, Repository } from 'typeorm';
import { HttpException, HttpStatus } from '@nestjs/common';
import { TemaService } from '../../tema/services/tema.service';

export class PostagemService {
  constructor(
    @InjectRepository(Postagem)
    private postagemRepository: Repository<Postagem>,
    private temaService: TemaService,
  ) {}

  async findAll(): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      relations: {
        tema: true,
      },
    });
  }

  async findById(id: number): Promise<Postagem> {
    const postagem = await this.postagemRepository.findOne({
      where: {
        id,
      },
      relations: {
        tema: true,
      },
    });

    if (!postagem)
      throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);
    return postagem;
  }

  async findAllByTitulo(titulo: string): Promise<Postagem[]> {
    return await this.postagemRepository.find({
      where: { titulo: ILike(`%${titulo}%`) },
      relations: {
        tema: true,
      },
    });
  }

  async create(postagem: Postagem): Promise<Postagem> {
    await this.temaService.findById(postagem.tema.id);
    return await this.postagemRepository.save(postagem);
  }

  async update(id: number, postagem: Postagem): Promise<Postagem> {
    await this.temaService.findById(postagem.tema.id);
    const updateResult = await this.postagemRepository.update(id, postagem);

    if (!updateResult.affected)
      throw new HttpException('Postagem não encontrada!', HttpStatus.NOT_FOUND);

    return await this.findById(id);
  }

  async delete(id: number): Promise<void> {
    await this.findById(id);
    await this.postagemRepository.delete(id);
  }
}
