import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CompanySizeType } from '../enums/company.enums';

@Entity()
export class Company {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;
  @Column({ type: 'text', nullable: false })
  description: string;
  @Column({ type: 'varchar', nullable: false })
  locatedAt: string[];
  @Column({ type: 'enum', enum: CompanySizeType, nullable: false })
  size: CompanySizeType;
  @Column({ type: 'date', nullable: false })
  foundedAt: Date;
  @Column({ type: 'varchar', nullable: true })
  website: string;
  @Column({ type: 'varchar', nullable: true })
  logo: string;
  //   founders: user[]
  // staff: user[]
}
