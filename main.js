const containerCol = document.querySelector("#containerCol");
const screenResult = document.getElementById("screenResult");
let currentValue = [];
let valueAcumulator = [];
const result = document.getElementById("result");


const add = document.getElementById("add");
const substract = document.getElementById("substract");
const multiplication = document.getElementById("mulplication");
const division = document.getElementById("division");
const porcent = document.getElementById("porcent");
const exponents = document.getElementById("exponents");
let signos;

const cleaner = document.getElementById("cleaner");
const clean = document.getElementById("clean");

const botons = document.querySelectorAll(".botons");

botons.forEach((boton) => {
  const input = document.querySelector("#currentValue");
  boton.addEventListener("click", (e) => {
    if (boton.value === "." && input.value.includes(".")) {
      return ponleFocus();
    }
    input.value += boton.value;
    ponleFocus();
  });
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === "=") {
    result.click();
  }
  if (e.key === "Delete") {
    cleaner.click();
  }
});

add.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#currentValue").value;
  if (isNaN(input) || input === "" || input === null) return ponleFocus();
  if (currentValue.length === 0) {
    currentValue.push(parseFloat(input));
    valueAcumulator.push(suma(currentValue));
    console.log("Hola", currentValue);
  } else {
    currentValue = [];
    currentValue = valueAcumulator;
    currentValue.push(parseFloat(input));
    valueAcumulator = [];
    let result = suma(currentValue);
    valueAcumulator.push(result);
    console.log(valueAcumulator);
  }
  signos = add.value;
  cleanScreen();
  showResult();
});

substract.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#currentValue").value;
  if (isNaN(input) || input === "" || input === null) return ponleFocus();
  if (currentValue.length === 0) {
    currentValue.push(parseFloat(input));
    [valor] = currentValue;
    valueAcumulator.push(valor);
    console.log(valor);
  } else {
    currentValue = [];
    currentValue = valueAcumulator;
    currentValue.push(parseFloat(input));
    console.log(currentValue);
    valueAcumulator = [];
    let result = resta(currentValue);
    valueAcumulator.push(result);
    console.log(valueAcumulator);
  }
  signos = substract.value;
  cleanScreen();
  showResult();
});

multiplication.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#currentValue").value;
  if (isNaN(input) || input === "" || input === null) return ponleFocus();
  if (currentValue.length === 0) {
    currentValue.push(parseFloat(input));
    valueAcumulator.push(multi(currentValue));
  } else {
    currentValue = [];
    currentValue = valueAcumulator;
    currentValue.push(parseFloat(input));
    valueAcumulator = [];
    let result = multi(currentValue);
    valueAcumulator.push(result);
  }
  signos = multiplication.value;
  cleanScreen();
  showResult();
});

division.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#currentValue").value;
  if (isNaN(input) || input === "" || input === null) return ponleFocus();
  if (currentValue.length === 0) {
    currentValue.push(parseFloat(input));
    valueAcumulator.push(divi(currentValue));
  } else {
    currentValue = [];
    currentValue = valueAcumulator;
    currentValue.push(parseFloat(input));
    valueAcumulator = [];
    let result = divi(currentValue);
    valueAcumulator.push(result);
  }
  signos = division.value;
  cleanScreen();
  showResult();
});

porcent.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#currentValue").value;
  if (isNaN(input) || input === "" || input === null) return ponleFocus();
  if (currentValue.length === 0) {
    currentValue.push(parseFloat(input));
    valueAcumulator.push(porcents(currentValue));
  } else {
    currentValue = [];
    currentValue = valueAcumulator;
    currentValue.push(parseFloat(input));
    valueAcumulator = [];
    let result = porcents(currentValue);
    valueAcumulator.push(result);
  }
  signos = porcent.value;
  cleanScreen();
  showResult();
});

exponents.addEventListener("click", (e) => {
  e.preventDefault();
  const input = document.querySelector("#currentValue").value;
  if (isNaN(input) || input === "" || input === null) return ponleFocus();
  if (currentValue.length === 0) {
    currentValue.push(parseFloat(input));
    valueAcumulator.push(exponent(currentValue));
  } else {
    currentValue = [];
    currentValue = valueAcumulator;
    currentValue.push(parseFloat(input));
    valueAcumulator = [];
    let result = exponent(currentValue);
    valueAcumulator.push(result);
  }
  signos = exponents.value;
  cleanScreen();
  showResult();
});

result.addEventListener("click", (e) => {
  e.preventDefault();
  switch (signos) {
    case "+":
      add.click();
      signos = "";
      break;
    case "-":
      substract.click();
      signos = "";
      break;
    case "*":
      multiplication.click();
      signos = "";
      break;
    case "/":
      division.click();
      signos = "";
      break;
    case "%":
      porcent.click();
      signos = "";
      break;
    case "^":
      exponents.click();
      signos = "";
      break;
    default:
      ponleFocus();
      break;
  }
  // showResult();
});

cleaner.addEventListener("click", (e) => {
  e.preventDefault();
  currentValue = [];
  valueAcumulator = [];
  cleanScreen();
});

clean.addEventListener("click", (e) => {
  e.preventDefault();
  cleanOne();
});

const suma = (numero = []) => {
  const total = numero.reduce((a, b) => a + b, 0);
  return total;
};

const resta = (numero = []) => {
  const total = numero.reduce((a, b) => {
    return -a - b;
  }, 0);
  return total;
};

const multi = (numero = []) => {
  const total = numero.reduce((a, b) => {
    return a * b;
  });
  return total;
};

const divi = (numero = []) => {
  const total = numero.reduce((a, b) => {
    return a / b;
  });
  return total;
};

const porcents = (numero = []) => {
  const total = numero.reduce((a, b) => {
    return (a / 100) * b;
  });
  return total;
};

const exponent = (numero = []) => {
  const total = numero.reduce((a, b) => {
    return a ** b;
  });
  return total;
};

const cleanScreen = () => {
  let input = document.querySelector("#currentValue");
  input.value = "";
  screenResult.innerHTML = "";
  ponleFocus();
};
const cleanOne = () => {
  let input = document.querySelector("#currentValue");
  let valor = input.value.toString().slice(0, -1);
  input.value = valor;
  ponleFocus();
};

function ponleFocus() {
  document.querySelector("#currentValue").focus();
}
const showResult = () => {
  screenResult.innerHTML = valueAcumulator;
};