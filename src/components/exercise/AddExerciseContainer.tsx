import useAddExerciseContainer from '../../hooks/useAddExerciseContainer'
import AddExercise from './AddExercise'
import { AiOutlinePlus } from 'react-icons/ai'

const AddExerciseContainer = () => {
  const { open, isOpen, theme, styles } = useAddExerciseContainer()

  if (isOpen) return <AddExercise />

  return (
    <div className={styles.addExerciseContainer}>
      <button
        onClick={open}
        className={`${styles.button} ${theme.color === 'black' ? styles.black : styles.white}`}>
        <AiOutlinePlus color={theme.color} />
      </button>
    </div>
  )
}

export default AddExerciseContainer
