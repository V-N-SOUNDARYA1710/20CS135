import React, { useState } from "react";

function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  let i = 5;
  while (i * i <= num) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
    i += 6;
  }
  return true;
}

function PrimeNumbers() {
  const [limit, setLimit] = useState(50);
  const [primes, setPrimes] = useState([]);

  const handleLimitChange = (event) => {
    setLimit(Number(event.target.value));
  };

  const generatePrimes = () => {
    const primeList = [];
    for (let i = 2; i <= limit; i++) {
      if (isPrime(i)) {
        primeList.push(i);
      }
    }
    setPrimes(primeList);
  };

  return (
    <div>
      <h2>Prime Numbers</h2>
      <div>
        <label htmlFor="limit">Limit:</label>
        <input
          type="number"
          id="limit"
          value={limit}
          onChange={handleLimitChange}
        />
        <button onClick={generatePrimes}>Generate Primes</button>
      </div>
      <div>
        <h3>Primes:</h3>
        <ul>
          {primes.map((prime) => (
            <li key={prime}>{prime}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default PrimeNumbers;
