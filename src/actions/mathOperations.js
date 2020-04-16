export const ADD_NUMBER = "ADD_NUMBER";
export const SUBTRACT_NUMBER = "SUBTRACT_NUMBER";
export const MULTIPLY_NUMBER = "MULTIPLY_NUMER"
export const DIVIDE_NUMBER = "DIVIDE_NUMBER";

export function addNumber(number) {
  return {
    type: ADD_NUMBER,
    number // number: number
  }
}

export const subtract = num => ({
  type: SUBTRACT_NUMBER,
  num
})

export const divide = num => ({
  type: DIVIDE_NUMBER,
  num
})

export const multiply = num => ({

  type: MULTIPLY_NUMBER,
  num

})