import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { boolean } from 'zod';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  @Column({ type: 'varchar' })
  name: string;

  @Column({ type: 'varchar', unique: true })
  email: string;

  @Column({ type: 'varchar' })
  role: string;

  @Column({ type: 'boolean', name: 'is_onbording', default: false })
  isOnboarded: boolean;

  @Column({
    type: 'timestamp',
    name: 'created_at',
    default: new Date().toISOString()
  })
  createdAt?: string;

  @Column({ type: 'timestamp', name: 'updated_at', nullable: true })
  updatedAt?: string;

  @Column({ type: 'timestamp', name: 'deleted_at', nullable: true })
  deletedAt?: string;
}
