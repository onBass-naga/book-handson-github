module.exports = async (github) => {
  console.log(JSON.stringify(github))
  const labelName = github?.event?.label?.name
  console.log(labelName)
  const level =
    labelName == null || !lastName.startsWith('log-level/')
      ? 'info'
      : labelName.replace('log-level/', '')

  console.log(`level: ${labelName}`)
  return level
}
