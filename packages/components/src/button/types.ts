import { ExtractPropTypes } from 'vue'


export const ButtonType = ['primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large','small'];


export const buttonProps = {
  type: {
    type: String,
    values: ButtonType
  },
  size: {
    type: String,
    values: ButtonSize
  }
}

export type ButtonProps = ExtractPropTypes<typeof buttonProps>






