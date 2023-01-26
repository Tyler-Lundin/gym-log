import { useAppSelector } from '../../hooks'
import useAddEvent from '../../hooks/useAddEvent'

const AddButton = () => {
    const { open, theme } = useAddEvent()
    const { selectedEvent } = useAppSelector(state => state.app)
    const c = theme.color
    const n = c === 'black' ? 'white' : 'black'
  return (
      <button
        onClick={open}
        className={`bg-${c} text-${n} rounded-full w-fit mx-auto text-xl relative
            hover:bg-${n} hover:text-${c} focus:outline-none focus:bg-${n} focus:text-${c}
            focus:scale-110 transition-all duration-300 ease-in-out
        `}>
        add {selectedEvent}
      </button>
  )
}

export default AddButton;
