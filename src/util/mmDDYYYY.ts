const mmDDYYYY = (date: Date) => {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    if (month < 10 && day < 10) return `0${month}/0${day}/${year}`;
    if (month < 10) return `0${month}/${day}/${year}`;
    if (day < 10) return `${month}/0${day}/${year}`;
    return `${month}/${day}/${year}`;
}


export default mmDDYYYY;
