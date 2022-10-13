import { ExtractPropTypes } from 'vue'

export const ButtonType = ['default', 'primary', 'success', 'warning', 'danger']

export const ButtonSize = ['large', 'normal', 'small', 'mini'];

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
  // ExtractPropTypes接收一个类型，然后把对应的vue3所接收的props类型提供出来
  export type ButtonProps = ExtractPropTypes<typeof buttonProps>