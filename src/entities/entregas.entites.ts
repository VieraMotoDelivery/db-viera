import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  Repository,
} from "typeorm";
import AppDataSource from "../data-source";

@Entity("entregas")
class Entregas {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ length: 255, nullable: true })
  tokencoleta: string;

  @Column({ length: 255, nullable: true })
  entrega: string;

  @Column({ length: 500, nullable: true })
  obs: string;

  @Column({ length: 20, nullable: true })
  telefone: string;

  @Column({ length: 15, nullable: true, default: "" })
  formadepagamento: string;

  @Column({ length: 50, nullable: true })
  data: string;

  @Column({ default: false })
  msgwhats: boolean;

  @Column({ length: 10, nullable: true, default: "" })
  codigo: string;

  @BeforeInsert()
  async antesDeInserir() {
    const dataDeHoje = new Date();
    const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });
    this.data = formatar;
  }
}

export { Entregas };