interface ValidationResult {
  valid: boolean,
  errorMessages: Array<string>
}

export class Validator<T extends string | number> {
  constructor(
    public regularExpression: RegExp,
    public include: Array<T> = [],
    public exclude: Array<T> = [],
    public throwErrors: boolean = true
  ) {
    /*\
     *  remove duplicates and intersection if arrays are present
     *  example: [0, 1, 2, 3, 3] (include array) and [-2, -2, -1, 0] (exclude array) become [1, 2, 3] (include array) and [-2, -1] (exclude array)
    \*/
    if (include.length && exclude.length ) {
      [include , exclude] = [include, exclude].map( (arr, idx) =>
        [...new Set(arr)].filter( el =>
          !(idx == 0 ? exclude : include).includes(el)
        )
      )
    }
  }

  public validate(value: T): ValidationResult {
    let valid = true
    const errorMessages: Array<string> = []

    const validate = (passIf: boolean, errorMessage: string) => {
      if (!passIf) {
        errorMessages.push(errorMessage)
        valid = false
      }
    }

    if (this.include.length) {
      validate(this.include.includes(value), `"${ value }" should be one of: ${ this.include }.`)
    } else {
      validate(this.regularExpression.test(`${ value }`), `${ JSON.stringify(value) } is not passing regular expression "${ this.regularExpression }".`)
    }

    if (this.exclude.length) {
      validate(!this.exclude.includes(value), `"${ value }" should not be one of: ${ JSON.stringify(this.exclude) }.`)
    }

    this.throwErrors && errorMessages.forEach( errorMessage => {
      throw new Error(errorMessage)
    } )

    return {
      valid,
      errorMessages
    }
  }
}
