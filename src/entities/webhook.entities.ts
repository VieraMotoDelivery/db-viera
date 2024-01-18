import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("webhook")
class Webhook {
  @PrimaryGeneratedColumn("increment")
  id: string;

  @Column({ length: 10, nullable: true })
  iddatabase: string;

  @Column({ length: 20, nullable: true })
  telefone: string;

  @Column({ length: 255, nullable: true })
  entrega: string;

  @Column({ length: 150, nullable: true })
  entregaidfood: string;
}

export { Webhook };
