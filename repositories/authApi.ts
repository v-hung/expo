export const login = async () => {

}

export const logged = async () => {
  const user = await new Promise(res => setTimeout(() => {
    res(1)
  }, 1000))

  return user
}