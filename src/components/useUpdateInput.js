import { useState } from "react"

export default function useUpdateInput (initialValue) {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    onChange: event => setValue(event.target.value),
  }
}