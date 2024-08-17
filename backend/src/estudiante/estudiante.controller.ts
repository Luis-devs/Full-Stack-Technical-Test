import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EstudianteService } from './estudiante.service';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';

@Controller('estudiante')
export class EstudianteController {
  constructor(private readonly estudianteService: EstudianteService) {}

  @Post()
  async create(@Body() createEstudianteDto: CreateEstudianteDto) {
    return await this.estudianteService.create(createEstudianteDto);
  }

  @Get()
  async findAll() {
    return await this.estudianteService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.estudianteService.findOne(id);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEstudianteDto: UpdateEstudianteDto,
  ) {
    return await this.estudianteService.update(id, updateEstudianteDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    return await this.estudianteService.remove(id);
  }
}
