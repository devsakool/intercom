// helpers/formatTime.js
export const formatTime = (timeString) => {
  const [hours, minutes] = timeString.split(':');
  return `${hours}.${minutes}`;

}