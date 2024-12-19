import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  name: string

  @Column({ unique: true })
  email: string

  @Column()
  role: string

  @Column({ name: 'is_onbording' })
  isOnboarded: string

  @Column({ name: 'created_at' })
  createdAt: string

  @Column({ name: 'updated_at' })
  updatedAt: string

  @Column({ name: 'deleted_at' })
  deletedAt: string
}
