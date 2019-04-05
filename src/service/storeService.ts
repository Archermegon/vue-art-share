const store = {
  get(key: string) {
    return localStorage.getItem(key)
  },
  set(key: string, value: string) {
    return localStorage.setItem(key, value)
  },
  clearExcept(key: string) {
    for (let i = 0; i < localStorage.length; i++) {
      const itemKey: string | null = localStorage.key(i)
      if (itemKey && itemKey !== key) {
        localStorage.removeItem(itemKey)
      }
    }
  },
  clearAll() {
    for (const itemKey in localStorage) {
      if (itemKey) {
        localStorage.removeItem(itemKey)
      }
    }
  }
}

export default class StoreService {
  public static getAccountInfo() {
    const accountString: string | null = store.get('account')
    return accountString ? JSON.parse(accountString) : null
  }

  public static setAccountInfo(account: object) {
    return store.set('account', JSON.stringify(account))
  }

  public static getToken() {
    return store.get('token')
  }

  public static setToken(token: string) {
    store.set('token', token)
  }

  public static clearExcept(key: string) {
    store.clearExcept(key)
  }

  public static clearAll() {
    store.clearAll()
  }

  public static getData(key: string) {
    return store.get(key)
  }

  public static setData(key: string, value: string) {
    store.set(key, value)
  }
}
