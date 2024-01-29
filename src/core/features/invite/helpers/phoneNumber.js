import bcCountries from 'bc-countries'
import countryLanguage from 'country-language'
import { PhoneNumberUtil } from 'google-libphonenumber'
const phoneUtil = PhoneNumberUtil.getInstance()

export function isValidPhoneNumber (value) {
  try {
    return emptyPhone(value) || phoneUtil.isValidNumber(parseNumber(value))
  } catch (err) {
    return false
  }
}

export function emptyPhone (value) {
  return !value || value.trim() === dialCode() || value.trim() === `+${dialCode()}`
}

export function formatPhoneNumber (value) {
  if (!value) { return value }
  // remove all non-numeric characters
  const phoneNumber = value.replace(/\D/g, '')
  if (!value.startsWith('+') && dialCode() !== '') {
    return '+' + dialCode() + phoneNumber.trim()
  } else {
    return '+' + phoneNumber.trim()
  }
}

export function dialCode () {
  const countryCode = defaultCountryCode()
  const country = bcCountries.getCountryByIso2Code(countryCode)
  if (country !== null) { return country.dialCode }
  return ''
}

export function parseNumber (value) {
  return phoneUtil.parseAndKeepRawInput(value, defaultCountryCode())
}

function defaultCountryCode () {
  const lans = navigator.language.split('-')
  if (lans.length === 0) { return '' }
  if (lans.length === 1) {
    const lang = countryLanguage.getLanguage(lans[0].toLowerCase())
    if (lang.langCultureMs.length === 1) {
      return lang.langCultureMs[0].langCultureName.split('-')[1].toLowerCase()
    }
    return ''
  }

  return lans[1].toLowerCase()
}
