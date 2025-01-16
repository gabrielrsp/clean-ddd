// Value Object é uma forma de abstrair uma regra de negócio específica 
// de um único campo de uma entidade em uma classe separada

import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"
import { UniqueEntityID } from "../../core/entities/unique-entity-id"

interface QuestionProps {
  authorId: UniqueEntityID
  bestAnswerId: UniqueEntityID
  title: string
  content: string 
  slug: Slug
  createdAt: Date
  updatedAt?: Date
}

export class Question extends Entity<QuestionProps> {
}