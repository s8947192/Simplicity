export const number = value =>
  value && isNaN(Number(value))
    ? 'Must be a number'
    : undefined

export const tooOld = value =>
  value && value > 65
    ? 'You might be too old for this'
    : undefined

export const aol = value =>
  value && /.+@aol\.com/.test(value)
    ? 'Really? You still use AOL for your email?'
    : undefined

export const alphaNumeric = value =>
  value && /[^a-zA-Z0-9 ]/i.test(value)
    ? 'Only alphanumeric characters'
    : undefined

export const nameCheck = value =>
  value && /[^a-zA-Z ]/i.test(value)
    ? 'Invalid name'
    : undefined

export const phoneNumber = value =>
  value && !/^(0|[1-9][0-9]{9})$/i.test(value)
    ? 'Invalid phone number, must be 10 digits'
    : undefined

export const emailCheck = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export const passwordsMatchCheck = (value, allValues, props, asd) =>
  value !== allValues.get('password')
    ? 'Passwords dont match'
    : undefined

const maxLength = max => value =>
  value && value.length > max
    ? `Must be ${max} characters or less`
    : undefined

const minLength = min => value =>
  value && value.length < min
    ? `Must be ${min} characters or more`
    : undefined

const minValue = min => value =>
  value && value < min
    ? `Must be at least ${min}`
    : undefined

export const requiredCheck = value => (value ? undefined : 'required')
export const maxLength12Check = maxLength(12)
export const minLength6Check = minLength(6)
export const minValue18 = minValue(18)
