import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BeforeInsert,
  PrimaryColumn,
  Repository,
} from "typeorm";
import AppDataSource from "../data-source";

@Entity("entregas")
class Entregas {
  // @PrimaryGeneratedColumn("increment")
  // id: string;

  @PrimaryColumn()
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

  @Column({ length: 10, nullable: true, default:"" })
  codigo: string;

  @BeforeInsert()
  async antesDeInserir() {
    const dataDeHoje = new Date();

    const formatar = dataDeHoje.toLocaleString("pt-BR", { timeZone: "UTC" });

    this.data = formatar;

    const entregasRepositorio: Repository<Entregas> =
      AppDataSource.getRepository(Entregas);

    const ultimaEntrega = await entregasRepositorio
      .createQueryBuilder("entregas")
      .orderBy("entregas.id", "DESC")
      .limit(1)
      .getOne();

    if (!ultimaEntrega) {
      this.id = 1;
    } else if (ultimaEntrega) {
      this.id = ultimaEntrega.id + 1;
    }
  }
}

export { Entregas };
