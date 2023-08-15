import i18n from '../../i18n'

export function string255NotRequired (value) {
  let error = null
  if (value && value.length > 255) {
    error = i18n.t('Max character limit is 255')
  } else if (/[<>]/.test(value)) {
    error = i18n.t('< and > characters not allowed')
  }
  return error
}

export function meetInviteEmail (value, values) {
  let error = null
  if (!value) {
    error = i18n.t('Email and Phone cannot be left blank at the same time')
  } else if (value && value.length > 255) {
    error = i18n.t('Max character limit is 255')
  } else if (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
    error = i18n.t('Invalid email address')
  }
  return error
}

