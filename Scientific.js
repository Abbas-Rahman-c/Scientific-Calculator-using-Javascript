function appendToExpression(value) {
    document.getElementById('text').value += value;
  }
  
  function clearExpression() {
    document.getElementById('text').value = '';
  }
  
  function deleteLastCharacter() {
    let currentExpression = document.getElementById('text').value;
    document.getElementById('text').value = currentExpression.slice(0, -1);
  }
  
  function calculateResult() {
    try {
      let expression = document.getElementById('text').value;
      const result = math.evaluate(expression);
      document.getElementById('text').value = result;
    } catch (error) {
      console.error(error); // Log the error for debugging purposes
      document.getElementById('text').value = 'Error: Invalid expression';
    }
  }
  
  function computeDerivative() {
    try {
      let expression = document.getElementById('text').value;
      let derivative = math.derivative(expression, 'x');
      document.getElementById('text').value = derivative.toString();
    } catch (error) {
      document.getElementById('text').value = 'Error: Invalid expression';
    }
  }
  
  
  