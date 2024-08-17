import { Injectable } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Estudiante } from './entities/estudiante.entity';
import { Repository } from 'typeorm';
@Injectable()
export class EstudianteService {
  constructor(
    @InjectRepository(Estudiante)
    private estudianteRepository: Repository<Estudiante>,
  ) {}
  async create(createEstudianteDto: CreateEstudianteDto) {
    const password = bcrypt.hashSync(createEstudianteDto.password, 12);
    return await this.estudianteRepository.insert({
      ...createEstudianteDto,
      password,
    });
  }

  async findAll() {
    return await this.estudianteRepository.find();
  }

  async findOne(id: number) {
    return await this.estudianteRepository.findOne({ where: { id } });
  }

  async update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    return await this.estudianteRepository.update({ id }, updateEstudianteDto);
  }

  async remove(id: number) {
    return await this.estudianteRepository.delete({ id });
  }
}
