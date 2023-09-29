import { create } from "zustand"
import tw from "../lib/tailwind"

const LIGHT: State = {
  primary: tw.color('text-green-600'),
  primary2: tw.color('text-green-400')
}

const DARK: State = {
  primary: tw.color('text-green-600'),
  primary2: tw.color('text-green-400')
}

type State = {
  primary: string,
  primary2: string
}

type Actions = {
  toggleColorTheme: (theme: 'light' | 'dark') => void
}

const useTheme = create<State & Actions>((set, get) => ({
  ...LIGHT,
  toggleColorTheme: (data) => set(data == 'light' ? LIGHT : DARK),
})
)

export default useTheme