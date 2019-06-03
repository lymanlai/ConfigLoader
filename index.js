const ConfigLoader = {
  isGenerateString: false,
  envList: [],
  ensureAndGetEnvArr (...keyArr) {
    const valArr = []
    for (let key of keyArr) {
      valArr.push(ConfigLoader.ensureAndGetEnv(key))
    }
    return valArr
  },
  ensureAndGetEnv (key) {
    if (ConfigLoader.isGenerateString) {
      ConfigLoader.envList.push(key)
      return
    }
    if (!process.env[key]) {
      throw Error(`process.env.${key} is required`)
    }
    return process.env[key]
  },
  printEnv () {
    const arr = ConfigLoader.envList.map(key => `- ${key}=`)
    console.log(arr.join('\n'))
  }
}

export default ConfigLoader
