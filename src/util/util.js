// blog reading time
export function readingTime(text) {
  const wpm = 225;
  const words = text.trim().split(/\s+/).length;
  const time = Math.ceil(words / wpm);
  return time;
}

// date format
export function makeDateFormat(timestamp) {
  const date = new Date(timestamp);
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const blogDate =
    date.getDate() + " " + month[date.getMonth()] + " " + date.getFullYear();
  return blogDate;
}

// get video duration
export function getVideoDuration(useRef) {
  const video = useRef.current;
  if (!video) return;
  return Math.ceil(secToMinConvert(video.duration));
}

// sec to min convert
export function secToMinConvert(sec) {
  const minutes = (1 / 60) * sec;
  return minutes;
}
