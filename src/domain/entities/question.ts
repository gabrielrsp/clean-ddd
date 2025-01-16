// Value Object é uma forma de abstrair uma regra de negócio específica 
// de um único campo de uma entidade em uma classe separada

import { Slug } from "./value-objects/slug"
import { Entity } from "../../core/entities/entity"

interface QuestionProps {
  title: string
  content: string 
  authorId: string
  slug: Slug
}

export class Question extends Entity<QuestionProps> {
}