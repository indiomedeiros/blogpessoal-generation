import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { TemaService } from '../services/tema.service';
import { Tema } from '../entities/tema.entity';

@Controller('temas')
export class TemaController {
  constructor(private readonly temaService: TemaService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll(): Promise<Tema[]> {
    return this.temaService.findAll();
  }

  @Get('descricao/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id', ParseIntPipe) id: number): Promise<Tema> {
    return this.temaService.findById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() tema: Tema): Promise<Tema> {
    return this.temaService.create(tema);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() tema: Tema,
  ): Promise<Tema> {
    return this.temaService.update(id, tema);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
    await this.temaService.delete(id);
  }
}
