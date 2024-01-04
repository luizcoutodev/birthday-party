AOS.init();

const eventDate = new Date("Jun 2, 2024 20:00:00");
const eventTimeStamp = eventDate.getTime();

const hourCount = setInterval(function() {
    const now = new Date();
    const actualTimeStamp = now.getTime();

    const timeUntilEvent = eventTimeStamp - actualTimeStamp;

    const dayConversor = 1000 * 60 * 60 *24;
    const hourConversor = 1000 * 60 * 60;
    const minuteConversor = 1000 * 60;

    const daysUntilEvent = Math.floor(timeUntilEvent / dayConversor);
    const hoursUntilEvent = Math.floor((timeUntilEvent % dayConversor) / hourConversor );
    const minutesUntilEvent = Math.floor((timeUntilEvent % hourConversor) / minuteConversor );
    const secondsUntilEvent = Math.floor((timeUntilEvent % minuteConversor) / 1000 );

    console.log (daysUntilEvent);
    console.log (hoursUntilEvent);
    console.log (minutesUntilEvent);
    console.log (secondsUntilEvent);

    document.getElementById('counter').innerHTML = `Faltam ${daysUntilEvent}d ${hoursUntilEvent}h ${minutesUntilEvent}m ${secondsUntilEvent}s`;

    if (timeUntilEvent < 0) {
        clearInterval(hourCount);
        document.getElementById('counter').innerHTML = `O evento já foi realizado.`;
    }
},1000);