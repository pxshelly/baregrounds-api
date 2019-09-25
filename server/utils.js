const sanitizeRecommendation = (rec, method) => {
  const sanitizedRecommendation = {
    method: method
  };
  const requiredFields = ['item', 'bin'];
  if (typeof rec !== 'object' || !rec) {
    return null;
  }
  for(let i = 0; i < requiredFields.length; i++) {
    const currentField =  requiredFields[i];
    if(rec[currentField] !== undefined) {
      sanitizedRecommendation[currentField] = rec[currentField]; 
    } else {
      return null;
    }
  }
  return sanitizedRecommendation;
}

module.exports = {sanitizeRecommendation};