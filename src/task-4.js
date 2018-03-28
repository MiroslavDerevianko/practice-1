
export default function formatTime(seconds) {
    let time = seconds % 86400;
    let buffer = time % 3600;
    const hours = (time - buffer) / 3600;
    time = buffer;
    buffer = time % 60;
    const minutes = (time - buffer) / 60;
    const second = buffer;
    return createString(hours, minutes, second);
}

function formNumb(n) {
    const numbstr = n.toString();
    if (numbstr.length === 2) {
        return numbstr;
    }
    return `0${numbstr}`;
}

function createString(h, m, s) {
    const minutes = formNumb(m);
    const seconds = formNumb(s);

    let hours = (h < 13 ) ? formNumb(h) : formNumb(h - 12);
    hours = (h === 0) ? formNumb(12) : hours;

    let result = "";
    result = `${hours}:${minutes}:${seconds}`;
    result += (h < 12) ? " AM" : " PM";//?

    //before
    /*if (h === 0) {
        result = `${formNumb(12)}:${formNumb(m)}:${formNumb(s)} AM`;
    } else {
        if (h < 13) {
            result = `${formNumb(h)}:${formNumb(m)}:${formNumb(s)}`;
        } else {
            result = `${formNumb(h - 12)}:${formNumb(m)}:${formNumb(s)}`;
        }
        result += (h < 12) ? " AM" : " PM";
        /*if (h < 12) {
            result += " AM";
        } else {
            result += " PM";
        }
    }*/
    return result;
}



