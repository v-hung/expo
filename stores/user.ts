import { create } from "zustand"

type State = {
  settings: any[]
}

type Actions = {
  setSettings: (data: any[]) => void,
  findSettingByName: (name: string) => any
}

const useUser = create<State & Actions>((set, get) => ({
  settings: [],
  setSettings: (data) => set({
    settings: data
  }),
  findSettingByName: (name) => {
    return get().settings.find(v => v.name == name)?.value || undefined
  }
})
)

export default useUser