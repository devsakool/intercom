// helpers/formatDate.js
export const formatDate = (dateString) => {
  const options = { year: '2-digit', month: 'short', day: '2-digit' };
  return new Date(dateString).toLocaleDateString('th-TH', options);
};