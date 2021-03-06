export default function convertHoursInMinutes(time: String) {
    
    const [hours, minutes] = time.split(":").map(Number)

    const timeInMinutes = (hours * 60) + minutes

    return timeInMinutes
}
