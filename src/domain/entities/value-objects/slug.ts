export class Slug {
  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Receives a string and normalize it as a slug
   *
   * Example "An example title" => "an-example-title"
   *
   * Lembre-se: A keyword "static" define que o método (pode ser usado para propriedades)
   * pertence diretamente à classe e não a sua instância, podendo ser chamado diretamente
   * sem a necessidade de se criar uma instância. Ex: Slug.createfromText("exemplo")
   *
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize('NFKD')
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-')
      .replace(/[^\w-]+/g, '')
      .replace(/_/g, '-')
      .replace(/--+/g, '-')
      .replace(/-$/g, '')

    return new Slug(slugText)
  }
}
