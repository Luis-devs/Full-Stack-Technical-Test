import { IsDateString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateSesionDto {
  @IsNotEmpty()
  nombre: string;

  @IsDateString()
  fecha_inicio: string;

  @IsDateString()
  fecha_fin: string;

  @IsNumber()
  cupo: number;
}
