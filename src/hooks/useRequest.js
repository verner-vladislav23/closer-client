import { useEffect, useState } from 'react'

const useRequest = (request) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)

  useEffect(() => {
    let canceled = false
    const fetchData = async () => {
      setLoading(true)

      try {
        const response = await request()

        !canceled && setResult(response)
      } catch (error) {
        !canceled && setError(error)
      }

      setLoading(false)
    }

    fetchData()
    return () => (canceled = true)
  }, [request])

  return { result, loading, error }
}

export default useRequest
