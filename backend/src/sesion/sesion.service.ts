import { Injectable } from '@nestjs/common';
import { CreateSesionDto } from './dto/create-sesion.dto';
import { UpdateSesionDto } from './dto/update-sesion.dto';
import * as sesiones from '../../json/sesiones.json';
import { InjectRepository } from '@nestjs/typeorm';
import { Sesion } from './entities/sesion.entity';
import { Repository } from 'typeorm';
import * as moment from 'moment-timezone';

@Injectable()
export class SesionService {
  private dataSesion = sesiones;
  constructor(
    @InjectRepository(Sesion) private sesionRepository: Repository<Sesion>,
  ) {}
  async create(createSesionDto: CreateSesionDto) {
    return await this.sesionRepository.insert(createSesionDto);
  }

  async findAll() {
    return await this.sesionRepository.find();
  }

  async findOne(id: number) {
    return await this.sesionRepository.findOne({ where: { id } });
  }

  async update(id: number, updateSesionDto: UpdateSesionDto) {
    return await this.sesionRepository.update({ id }, updateSesionDto);
  }

  async llenarSesion() {
    const objKeys = Object.keys(this.dataSesion.sesiones);

    const sesiones_data = objKeys.map((key) => {
      return {
        nombre: key,
        fecha_inicio: moment(
          this.dataSesion.sesiones[key][0].fecha_inicio,
          false,
        )
          .tz('America/Bogota')
          .format('YYYY-MM-DD hh:mm'),
        fecha_fin: moment(this.dataSesion.sesiones[key][0].fecha_fin, false)
          .tz('America/Bogota')
          .format('YYYY-MM-DD hh:mm'),
        cupo: this.dataSesion.sesiones[key][0].cupo,
      };
    });

    try {
      return await this.sesionRepository.insert(sesiones_data).then((res) => {
        return res.identifiers.length == 0
          ? {
              error: true,
              message: 'No se pudieron guardar las sesiones',
              ex: res,
            }
          : { error: false, message: 'Sesiones guardadas', ex: null };
      });
    } catch (error) {
      return {
        error: true,
        message: 'Sucedió un problema guardando las sesiones',
        ex: error,
      };
    }
  }

  async remove(id: number) {
    return await this.sesionRepository.delete({ id });
  }
}
