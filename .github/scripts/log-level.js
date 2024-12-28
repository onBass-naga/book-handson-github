module.exports = async (github) => {
  console.log(JSON.stringify(github))
  const labelName = github?.event?.label?.name
  console.log(labelName)
  return labelName == null || !lastName.startsWith('log-level/')
    ? 'info'
    : labelName.replace('log-level/', '')
}
