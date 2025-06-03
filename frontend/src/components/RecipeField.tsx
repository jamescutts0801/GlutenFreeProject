import { FC } from 'react'

interface InputProps {
    label: string
}

const RecipeField: FC<InputProps> = ({
  label
}) => {
  return (
    <div className="input-wrapper">
      <p>{label}</p>
    </div>
  )
}

export default RecipeField;