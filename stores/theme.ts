import { create } from "zustand"
import tw from "../lib/tailwind"

const LIGHT: State = {
  primary: tw.color('text-blue-500')
}

const DARK: State = {
  primary: tw.color('text-blue-600')
}

type State = {
  primary: string
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