import { Asignacion } from 'src/asignacion/entities/asignacion.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Estudiante {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100, nullable: false })
  nombre: string;

  @Column()
  correo: string;

  @Column({ type: 'varchar', length: 256, nullable: false })
  password: string;

  @OneToMany(() => Asignacion, (asign) => asign.estudiante, {
    eager: true,
  })
  asignaciones: Asignacion[];
}
