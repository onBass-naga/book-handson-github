module.exports = async (context) => {
  console.log(JSON.stringify(context))
  // console.log(JSON.stringify(process.env))

  return 'warn'
  // const labelName = context?.event?.label?.name
  // console.log(labelName)
  // const level =
  //   !labelName || !lastName.startsWith('log-level/')
  //     ? 'info'
  //     : labelName.replace('log-level/', '')

  // console.log(`level: ${labelName}`)
  // return level
}
