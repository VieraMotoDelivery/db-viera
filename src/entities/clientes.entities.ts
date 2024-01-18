import {
  Entity,
  PrimaryGeneratedColumn,
  Column
} from "typeorm";

@Entity("clientes")
class Clientes {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 10, unique: true })
  codigo: string;

  @Column({ length: 50, nullable: true })
  nome: string;

  @Column({ length: 255, nullable: true })
  token: string;

  @Column({ length: 20, nullable: true })
  telefoneum: string;

  @Column({ length: 20, nullable: true })
  telefonedois: string;

  @Column({ length: 20, nullable: true })
  telefonetres: string;

  @Column({ length: 20, nullable: true })
  telefonequatro: string;

  @Column({ length: 20, nullable: true })
  telefonecinco: string;
}

export { Clientes };
