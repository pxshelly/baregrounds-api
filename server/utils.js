/**
 * Creates a sanitized object from a raw recommendation
 * 
 * @param rec {{ Object }} - An object that represents an item and its bin
 * @param method {{ String }} - A string that represents the HTTP method
 * @return - {{ Object }} - A database ready recommemdation object
 * 
 */



const sanitizeRecommendation = (rec, method) => {
  if (typeof rec !== 'object'
    || !rec 
    || !method
    || typeof method !== 'string' 
    || !method.match(/^(GET|POST|PUT|DELETE)$/)) {
    return null;
  };
  const sanitizedRecommendation = {
    method: method
  };
  const optionalFields = ['item_id'];
  const requiredFields = ['item', 'bin'];
  const allFields = optionalFields.concat(requiredFields);
  for(let i = 0; i < allFields.length; i++) {
    const currentField =  allFields[i];
    if(rec[currentField] !== undefined) {
      sanitizedRecommendation[currentField] = rec[currentField]; 
    } else if (requiredFields.includes(currentField)) {
      return null;
    }
  };
  return sanitizedRecommendation;
}

module.exports = {sanitizeRecommendation};