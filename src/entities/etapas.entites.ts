import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("etapas")
class Etapas {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 20 })
  telefone: string;

  @Column({ length: 5 })
  etapa: string;

  @Column({ default: true })
  ativado: boolean;

  @Column({ length: 10, nullable: true })
  codigo: string;
}

export { Etapas };
