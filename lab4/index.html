const SortLib = {

    checkUndefined(arr) {
        let hasUndefined = false;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === undefined) {
                hasUndefined = true;
                break;
            }
        }
        if (hasUndefined) {
            console.log("Масив містить undefined елементи!");
        }
    },

    bubbleSort(arr, asc = true) {
        let a = [...arr];
        let comparisons = 0;
        let swaps = 0;

        this.checkUndefined(a);

        for (let i = 0; i < a.length - 1; i++) {
            for (let j = 0; j < a.length - i - 1; j++) {

                if (a[j] === undefined || a[j + 1] === undefined) continue;

                comparisons++;

                if ((asc && a[j] > a[j + 1]) || (!asc && a[j] < a[j + 1])) {
                    [a[j], a[j + 1]] = [a[j + 1], a[j]];
                    swaps++;
                }
            }
        }

        console.log("Bubble:", a);
        console.log("Порівнянь:", comparisons, "Обмінів:", swaps);
        return a;
    },

    selectionSort(arr, asc = true) {
        let a = [...arr];
        let comparisons = 0;
        let swaps = 0;

        this.checkUndefined(a);

        for (let i = 0; i < a.length - 1; i++) {
            let index = i;

            for (let j = i + 1; j < a.length; j++) {
                if (a[j] === undefined || a[index] === undefined) continue;

                comparisons++;

                if ((asc && a[j] < a[index]) || (!asc && a[j] > a[index])) {
                    index = j;
                }
            }

            if (index !== i) {
                [a[i], a[index]] = [a[index], a[i]];
                swaps++;
            }
        }

        console.log("Selection:", a);
        console.log("Порівнянь:", comparisons, "Обмінів:", swaps);
        return a;
    },

    insertionSort(arr, asc = true) {
        let a = [...arr];
        let comparisons = 0;
        let shifts = 0;

        this.checkUndefined(a);

        for (let i = 1; i < a.length; i++) {
            let key = a[i];
            let j = i - 1;

            while (j >= 0 && a[j] !== undefined && key !== undefined) {
                comparisons++;

                if ((asc && a[j] > key) || (!asc && a[j] < key)) {
                    a[j + 1] = a[j];
                    shifts++;
                    j--;
                } else break;
            }
            a[j + 1] = key;
        }

        console.log("Insertion:", a);
        console.log("Порівнянь:", comparisons, "Зсувів:", shifts);
        return a;
    },

    shellSort(arr, asc = true) {
        let a = [...arr];
        let comparisons = 0;
        let swaps = 0;

        this.checkUndefined(a);

        for (let gap = Math.floor(a.length / 2); gap > 0; gap = Math.floor(gap / 2)) {
            for (let i = gap; i < a.length; i++) {
                let temp = a[i];
                let j = i;

                while (j >= gap && a[j - gap] !== undefined && temp !== undefined) {
                    comparisons++;

                    if ((asc && a[j - gap] > temp) || (!asc && a[j - gap] < temp)) {
                        a[j] = a[j - gap];
                        swaps++;
                        j -= gap;
                    } else break;
                }
                a[j] = temp;
            }
        }

        console.log("Shell:", a);
        console.log("Порівнянь:", comparisons, "Переміщень:", swaps);
        return a;
    },

    quickSort(arr, asc = true) {
        let comparisons = 0;

        function qs(a) {
            if (a.length <= 1) return a;

            let pivot = a[Math.floor(a.length / 2)];
            let left = [];
            let right = [];
            let equal = [];

            for (let el of a) {
                if (el === undefined) continue;

                comparisons++;

                if (el < pivot) left.push(el);
                else if (el > pivot) right.push(el);
                else equal.push(el);
            }

            return asc
                ? [...qs(left), ...equal, ...qs(right)]
                : [...qs(right), ...equal, ...qs(left)];
        }

        let result = qs(arr);

        console.log("Quick:", result);
        console.log("Порівнянь:", comparisons);
        return result;
    }
};
