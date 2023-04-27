export function formatTimeInput(value) {
  // Remove any non-digit characters from the input
  const digitsOnly = value.replace(/\D/g, "");

  // Get the first 2 digits, or fewer if the input is shorter
  const hours = digitsOnly.slice(0, 2);

  // Get the next 2 digits, or fewer if the input is shorter
  let minutes = digitsOnly.slice(2, 4);

  // Get the next 2 digits, or fewer if the input is shorter
  let seconds = digitsOnly.slice(4, 6);

  // Ensure minutes and seconds are less than or equal to 59
  minutes = Math.min(parseInt(minutes, 10) || 0, 59);
  seconds = Math.min(parseInt(seconds, 10) || 0, 59);

  // Join the parts with colons, ignoring any trailing colons
  const parts = [hours, minutes, seconds].filter(Boolean);
  const formatted = parts.join(":");

  return formatted;
}

export function seconds_to_HH_MM_SS(seconds) {
  // get hh:mm:ss string
  return new Date(seconds * 1000).toISOString().slice(11, 19);
  // console.log(result); // "00:10:00" (hh:mm:ss)
}

export function HH_MM_SS_to_seconds(hh_mm_ss) {
  const [hours, minutes, seconds] = hh_mm_ss.split(':');
  return Number(hours) * 60 * 60 + Number(minutes) * 60 + Number(seconds);
}

export function convertToSeconds(time) {
  const parts = time.split(':').reverse().map(Number);
  if (parts.length === 1) {
    return parts[0];
  } else if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  } else if (parts.length === 3) {
    return parts[0] * 60 * 60 + parts[1] * 60 + parts[2];
  } else {
    throw new Error('Invalid time format: ' + time);
  }
}
