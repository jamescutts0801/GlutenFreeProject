import { ChangeEvent, FC } from 'react'

interface InputProps {
  type: 'text'
  label: string
  value: string | number
  name: string
  placeholder: string
  disabled?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const TextField: FC<InputProps> = ({
  type,
  label,
  value,
  name,
  placeholder,
  disabled,
  onChange,
}) => {
  return (
    <div className="input-wrapper">
      <label htmlFor={label}>{label}</label>
      <input
        type={type}
        id={label}
        value={value}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  )
}

export default TextField;