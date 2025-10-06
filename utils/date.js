const sinhalaMonths = [
  "ජනවාරි", "පෙබරවාරි", "මාර්තු", "අප්රේල්", "මැයි", "ජූනි",
  "ජූලි", "අගෝස්තු", "සැප්තැම්බර්", "ඔක්තෝබර්", "නොවැම්බර්", "දෙසැම්බර්"
];


const tamilMonths = [
  "ஜனவரி", "பிப்ரவரி", "மார்ச்", "ஏப்ரல்", "மே", "ஜூன்",
  "ஜூலை", "ஆகஸ்ட்", "செப்டம்பர்", "அக்டோபர்", "நவம்பர்", "டிசம்பர்"
];
function toDate(input = new Date()){
    if(input instanceof Date){
        return input;
    }

    return new Date(input);
}

function formatSinhalaDate(input = new Date()){
    const d = toDate(input);
    const  day = d.getDate();
    const month = sinhalaMonths[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${month} ${year}`;
}

function formatTamilDate(input = new Date()){
    const d = toDate(input);
    const  day = d.getDate();
    const month = tamilMonths[d.getMonth()];
    const year = d.getFullYear();

    return `${day} ${month} ${year}`;
}


module.exports = { formatSinhalaDate, formatTamilDate };