import { Estudiante } from 'src/estudiante/entities/estudiante.entity';
import { Sesion } from 'src/sesion/entities/sesion.entity';
import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Asignacion {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Estudiante, (estu) => estu.asignaciones)
  estudiante: Estudiante;

  @ManyToOne(() => Sesion, (sesi) => sesi.asignaciones)
  sesion: Sesion;
}
