import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateEstudianteDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  @IsEmail()
  correo: string;

  @IsNotEmpty()
  password: string;
}
