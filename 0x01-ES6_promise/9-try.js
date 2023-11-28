export default function guardrail(mathFunction) {
  let result;

  try {
    result = mathFunction();
  } catch (err) {
    result = `Error: ${err.message}`;
  }

  return [result, 'Guardrail was processed'];
}
