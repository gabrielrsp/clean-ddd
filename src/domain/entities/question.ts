// Value Object é uma forma de abstrair uma regra de negócio específica 
// de um único campo de uma entidade em uma classe separada

import {  randomUUID } from "node:crypto"
import { Slug } from "./value-objects/slug"

interface QuestionProps {
  title: string
  content: string 
  authorId: string
  slug: Slug
}

export class Question {
  public title: string
  public content: string
  public id: string
  public authorId: string
  public slug: Slug

  constructor (props: QuestionProps, id?: string ) {
    this.title = props.title
    this.authorId = props.authorId
    this.content = props.content
    this.slug = props.slug
    this.id = id ?? randomUUID()
  }
}