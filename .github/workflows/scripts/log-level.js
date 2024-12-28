module.exports = async (context) => {
  console.log(JSON.stringify(context))
  // console.log(JSON.stringify(process.env))

  const labelName = context?.payload?.label?.name
  console.log(labelName)

  const level =
    !labelName || !labelName.startsWith('log-level/')
      ? 'info'
      : labelName.replace('log-level/', '')

  console.log(`level: ${labelName}`)
  return level
}
