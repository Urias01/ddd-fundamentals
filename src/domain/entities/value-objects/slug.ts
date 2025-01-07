
export class Slug {

  public value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Receives a string and normalize it as a slug
   * 
   * Example: "An example title" => "an-example-title"
   * 
   * @param text {string}
   */
  static createFromText(text: string) {
    const slugText = text
      .normalize("NFKD")
      .toLowerCase()
      .trim()
      .replace(/\s+/g, '-') // All spaces
      .replace(/[^\w-]+/g, '') // All Symbols
      .replace(/_/g, '-') // All underscores
      .replace(/--+/g, '-') // Unique hyphen
      .replace(/-$/, '') // Remove the last hyphen if it is the last word

    return new Slug(slugText)
  }
}