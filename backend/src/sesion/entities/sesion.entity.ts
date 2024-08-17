import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Sesion {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 57, nullable: false, unique: true })
  nombre: string;

  @Column({ type: 'datetime', nullable: false })
  fecha_inicio: string;

  @Column({ type: 'datetime', nullable: false })
  fecha_fin: string;

  @Column({ type: 'int', default: 0 })
  cupo: number;

  @OneToMany(() => Asignacion, (asign) => asign.sesion, {
    eager: true,
  })
  asignaciones: Asignacion[];
}
