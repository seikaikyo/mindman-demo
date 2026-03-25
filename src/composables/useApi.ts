import { ref } from 'vue'

const API_BASE = 'https://dashai-api.onrender.com/factory'

export function useApi<T>(endpoint: string) {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref('')

  async function fetch_data() {
    loading.value = true
    error.value = ''
    try {
      const res = await fetch(`${API_BASE}${endpoint}`)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = await res.json()
      data.value = json.data ?? json
    } catch (e) {
      error.value = e instanceof Error ? e.message : 'Unknown error'
    }
    loading.value = false
  }

  return { data, loading, error, fetch_data }
}

export { API_BASE }
