export const calculateExpression = (expression: string): number => {
  // Sanitize input
  const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, '');
  
  // Validate expression
  if (!/^[\d+\-*/().]+$/.test(sanitizedExpression)) {
    throw new Error('Invalid expression');
  }

  try {
    // Using Function constructor for calculation
    const result = new Function(`return ${sanitizedExpression}`)();
    
    if (typeof result !== 'number' || !isFinite(result)) {
      throw new Error('Invalid result');
    }
    
    return result;
  } catch (error) {
    throw new Error('Calculation error');
  }
}; 