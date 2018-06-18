import moment from 'moment'

export const getCardType = paymentSource => {
  const type = paymentSource.get('cc_type') || ''
  return type.toLowerCase()
}

export const getLastDigits = paymentSource => {
  const digits = paymentSource.get('last_digits')
  return digits.padStart(12, '*')
}

export const getIsExpired = paymentSource => {
  const cardDate = moment(`${paymentSource.get('year')} ${paymentSource.get('month')}`, 'YYMM')
  const today = moment()
  return cardDate.isValid() && (today < cardDate.add(1, 'months'))
}
