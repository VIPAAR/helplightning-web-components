import { isValidPhoneNumber, emptyPhone } from "./phoneNumber"

export function dialCodePhoneNumber (t, value, values) {
  return (value, values) => isValidPhoneNumber(value) ? null : t('This is not a valid phone number')
}

export function meetInviteEmail (t, value, values) {
  return (value, values) => {
    let error = null
    if (!value && emptyPhone(values.phone)) {
      error = t('Email and Phone cannot be left blank at the same time')
    } else if (value && value.length > 255) {
      error = t('Max character limit is 255')
    } else if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
      error = t('Invalid email address')
    }
    return error
  }
}

export function string255NotRequired (t, value, values) {
  return (value, values) => {
    let error = null
    if (value && value.length > 255) {
      error = t('Max character limit is 255')
    } else if (/[<>]/.test(value)) {
      error = t('< and > characters not allowed')
    }
    return error
  }
}
