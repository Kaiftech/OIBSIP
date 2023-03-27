const output = document.getElementById("output");

const addToOutput = (value) => (output.value += value);
const clearOutput = () => (output.value = "");
const deleteChar = () => (output.value = output.value.slice(0, -1));

const calculate = () => {
  try {
    const result = eval(output.value);
    isNaN(result)
      ? (() => {
          throw "Invalid input";
        })()
      : (output.value = result);
  } catch (error) {
    output.value = "Invalid input";
  }
};
