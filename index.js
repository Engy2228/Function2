function getSumOfNumbers(number, type = "odd") {
  // Принудительное преобразование в число
  number = +number;

  let sum = 0;

  // Суммируем числа в зависимости от типа
  for (let i = 0; i <= number; i += 1) {
      if (type === "odd" && i % 2 !== 0) {
          sum += i; // добавляем нечетные числа
      } else if (type === "even" && i % 2 === 0) {
          sum += i; // добавляем четные числа
      } else if (type === "") {
          sum += i; // добавляем все числа
      }
  }
  // Возвращаем сумму
  return sum;
}

// Примеры использования
console.log(getSumOfNumbers(10, "odd"));  // 25
console.log(getSumOfNumbers(10, "even")); // 30
console.log(getSumOfNumbers(10, ""));     // 55
console.log(getSumOfNumbers("not a number")); // NaN
console.log(getSumOfNumbers());            // NaN
