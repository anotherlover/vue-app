const toFix = (value, n) => {
  return parseFloat(value).toFixed(n)
}

const fnElipsis = value => {
  return value + '...'
}

export {
  toFix,
  fnElipsis
}
