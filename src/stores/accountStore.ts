import { defineStore } from 'pinia';

interface Account {
  id: number;
  tags: string;
  type: string; 
  login: string;
  pass: string | null; 
}

interface Option {
  text: string;
  value: string;
}

interface AccountState {
  data: Account[];
  options: Option[];
  errors: Record<number, Record<string, boolean>>;
}

export const useAccountStore = defineStore('account', {
  state: (): AccountState => ({
    data: [
      { id: 1, tags: 'XXX', type: 'LDAP', login: 'icedevil', pass: '12321' },
      { id: 2, tags: 'YYY', type: 'DAP', login: 'gregory', pass: '42211' },
      { id: 3, tags: 'ZZZ', type: 'Local', login: 'user', pass: '12211' },
    ],
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
        const account = this.data.find((acc) => acc.id === id);
        if (account) {
          account.pass = null;
        }
      }
    },

    addData(): void {
      const genId = this.data.length + 1;
      this.data.push({
        id: genId,
        tags: '',
        type: '',
        login: '',
        pass: null,
      });
    },

    deleteData(id: number): void {
      this.data = this.data.filter((acc) => acc.id !== id);
      this.data.forEach((acc, index) => {
        acc.id = index + 1;
      });
    },
  },
});