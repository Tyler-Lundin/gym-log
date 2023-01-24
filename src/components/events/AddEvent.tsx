import useAddEvent from '../../hooks/useAddEvent'
import { AiOutlinePlus } from 'react-icons/ai'
import Events from './Events'

const AddEvent = () => {
  const { open, isOpen, theme, styles } = useAddEvent()

    if (isOpen) return <Events />

  return (
      <button
        onClick={open}
        className={`${styles.button} ${theme.color === 'black' ? styles.black : styles.white}`}>
        <AiOutlinePlus color={theme.color} />
      </button>
  )
}

export default AddEvent
