import { defineStore } from 'pinia'

interface Data {
  id: number
  tags: string[]
  type: string
  login: string
  pass: string | null
}

interface Option {
  text: string
  value: string
}

interface AccountState {
  data: Data[]
  options: Option[]
  errors: Record<number, Record<string, boolean>>
}

export const useAccountStore = defineStore('account', {
  persist: true,
  state: (): AccountState => ({
    data: [],
    options: [
      { text: 'LDAP', value: 'A' },
      { text: 'DAP', value: 'B' },
      { text: 'Local', value: 'C' },
    ],
    errors: {},
  }),
  actions: {
    setNullPass(type: string, id: number): void {
      if (type === 'Local') {
        const account = this.data.find((acc) => acc.id === id)
        if (account) {
          account.pass = null
        }
      }
    },

    addData(): void {
      const genId = this.data.length + 1
      this.data.push({
        id: genId,
        tags: [],
        type: '',
        login: '',
        pass: null,
      })
    },

    deleteData(id: number): void {
      this.data = this.data.filter((acc) => acc.id !== id)
      this.data.forEach((acc, index) => {
        acc.id = index + 1
      })
    },
  },
})
