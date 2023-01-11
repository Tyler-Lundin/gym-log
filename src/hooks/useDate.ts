

type Month = number
type Day = number
type Year = number

const useDate = (M: Month, D: Day, Y: Year) => {
    if (M > 12 || M < 1) {
        throw new Error('Month must be between 1 and 12')
    }
    if (D > 31 || D < 1) {
        throw new Error('Day must be between 1 and 31')
    }
    if (Y < 0) {
        throw new Error('Year must be greater than 0')
    }

    const date = new Date(Y, M - 1, D)
    return date
}


export default useDate;
