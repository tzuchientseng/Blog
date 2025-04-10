const {
    createApp,
    ref
} = Vue;
createApp({
    setup() {
        const selectedTool = ref('');
        let quantity = ref(1);
        let min = ref(0);
        let max = ref(100);
        let randomNumbers = ref(null);

        let inputNumbers = ref('');
        let average = ref(null);
        let variance = ref(null);
        let standardDeviation = ref(null);

        let vectorA = ref('');
        let vectorB = ref('');
        let crossResult = ref(null);
        let dotResult = ref(null);

        let n = ref('');
        let r = ref('');
        let permResult = ref(null);
        let combResult = ref(null);
        let homProdResult = ref(null);

        let factorNumbers = ref('');
        let multipleCount = ref('');
        let factorResults = ref([]);
        let multipleResults = ref([]);
        let gcdResult = ref(null);
        let lcmResult = ref(null);

        let linear1A = ref('');
        let linear1B = ref('');
        let linear1C = ref('');
        let linear2A = ref('');
        let linear2B = ref('');
        let linear2C = ref('');
        let xSolution = ref(null);
        let ySolution = ref(null);

        const calculate = () => {
            if (selectedTool.value === 'random_number_generator') {
                const generatedNumbers = [];
                for (let i = 0; i < quantity.value; i++) {
                    const randomNumber = Math.floor(Math.random() * (max.value - min.value + 1)) + min.value;
                    generatedNumbers.push(randomNumber);
                }
                randomNumbers.value = generatedNumbers;
            } else if (selectedTool.value === 'average_variance_stdDev') {
                const numbers = inputNumbers.value.split(' ').map(Number);
                average.value = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
                const avg = average.value;
                variance.value = numbers.reduce((acc, curr) => acc + (curr - avg) ** 2, 0) / numbers.length;
                standardDeviation.value = Math.sqrt(variance.value);
            } else if (selectedTool.value === 'cross_dot_product') {
                const vectorAArray = vectorA.value.split(' ').map(Number);
                const vectorBArray = vectorB.value.split(' ').map(Number);

                const crossProduct = [
                    vectorAArray[1] * vectorBArray[2] - vectorAArray[2] * vectorBArray[1],
                    vectorAArray[2] * vectorBArray[0] - vectorAArray[0] * vectorBArray[2],
                    vectorAArray[0] * vectorBArray[1] - vectorAArray[1] * vectorBArray[0]
                ];

                crossResult.value = {
                    x: crossProduct[0],
                    y: crossProduct[1],
                    z: crossProduct[2]
                };
                dotResult.value = vectorAArray[0] * vectorBArray[0] + vectorAArray[1] * vectorBArray[1] + vectorAArray[2] * vectorBArray[2];
            } else if (selectedTool.value === 'discrete_mathematics') {
                const nVal = parseInt(n.value);
                const rVal = parseInt(r.value);
                // Permutation: P(n, r) = n! / (n-r)!
                const permutation = factorial(nVal) / factorial(nVal - rVal);
                const combination = factorial(nVal) / (factorial(rVal) * factorial(nVal - rVal));
                const homogeneousProduct = factorial(nVal + rVal - 1) / (factorial(rVal) * factorial(nVal - 1));
                permResult.value = permutation;
                combResult.value = combination;
                homProdResult.value = homogeneousProduct;
            } else if (selectedTool.value === 'factor_multiple_finder') {
                const nums = factorNumbers.value.split(' ').map(Number).filter(n => !isNaN(n));
                
                factorResults.value = nums.map(num => {
                    let factors = [];
                    for (let i = 1; i <= num; i++) {
                        if (num % i === 0) factors.push(i);
                    }
                    return {num, factors};
                });

                multipleResults.value = nums.map(num => {
                    if (!multipleCount.value) return null;
                    let multiples = [];
                    for (let i = 1; i <= multipleCount.value; i++) {
                        multiples.push(num * i);
                    }
                    return {num, multiples};
                });

                if (nums.length >= 2) {
                    gcdResult.value = nums.reduce((a, b) => gcd(a, b));
                    lcmResult.value = nums.reduce((a, b) => lcm(a, b));
                } else {
                    gcdResult.value = null;
                    lcmResult.value = null;
                }

                function gcd(a, b) {
                    return b === 0 ? a : gcd(b, a % b);
                }

                function lcm(a, b) {
                    return a * b / gcd(a, b);
                }
            } else if (selectedTool.value === 'linear_equation_solver') {
                // Convert input values to numbers
                const A1 = parseFloat(linear1A.value);
                const B1 = parseFloat(linear1B.value);
                const C1 = parseFloat(linear1C.value);
                const A2 = parseFloat(linear2A.value);
                const B2 = parseFloat(linear2B.value);
                const C2 = parseFloat(linear2C.value);

                // Calculate determinant
                const determinant = A1 * B2 - A2 * B1;

                if (determinant === 0) {
                    xSolution.value = null;
                    ySolution.value = null;
                    Swal.fire({
                        icon: "warning",
                        title: "No Unique Solution",
                        text: "This system has no unique solution (either no solution or infinitely many solutions).",
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: "OK"
                    });
                } else {
                    // Use Cramer's Rule
                    xSolution.value = (C1 * B2 - B1 * C2) / determinant;
                    ySolution.value = (A1 * C2 - C1 * A2) / determinant;
                }
            }

            function factorial(x) {
                if (x === 0) return 1;
                return x * factorial(x - 1);
            }
        };

        return {
            quantity,
            min,
            max,
            randomNumbers,
            selectedTool,
            inputNumbers,
            average,
            variance,
            standardDeviation,
            vectorA,
            vectorB,
            crossResult,
            dotResult,
            n,
            r,
            permResult,
            combResult,
            homProdResult,
            factorNumbers,
            multipleCount,
            factorResults,
            multipleResults,
            gcdResult,
            lcmResult,
            linear1A,
            linear1B,
            linear1C,
            linear2A,
            linear2B,
            linear2C,
            xSolution,
            ySolution,
            calculate
        };

    }
}).mount('#app');