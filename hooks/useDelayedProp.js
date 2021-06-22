import { useState, useEffect } from "react"
const FLASH_MS = 200
const FLASH_S = FLASH_MS / 1000

const useDelayedProp = (value, delayMs = FLASH_MS) => {
  const [residualValue, setResidualValue] = useState(value)

  useEffect(() => {
    const timeout = setTimeout(() => setResidualValue(value), delayMs)
    return () => clearTimeout(timeout)
  }, [value])

  return residualValue
}

export { useDelayedProp, FLASH_MS, FLASH_S }
