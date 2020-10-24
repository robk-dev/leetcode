/**
 * not working
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function (mat, K) {
    const rows = mat.length;
    const cols = mat[0].length;

    const sub_sum = mat.map(el => Array.from(el, () => 0));

    for (let i = 0; i < rows; ++i) {
        let sum = 0;
        for (let j = 0; j < cols; ++j) {

            if (!j) {
                let c = 0;
                while (mat[i][c] && c <= K) {
                    sum += mat[i][c];
                    c++;
                }

            } else {
                if (j - K > 0) {
                    sum -= mat[i][j - K - 1];
                }
                if (j + K < cols) {
                    sum += mat[i][j + K];
                }
            }
            sub_sum[i][j] = sum;
        }
    }

    const res = mat.map(el => Array.from(el, () => 0));

    for (let j = 0; j < cols; ++j) {
        let sum = 0;

        for (let i = 0; i < rows; ++i) {

            if (!i) {
                for (let r = 0; r < rows && r <= K; ++r) {
                    sum += sub_sum[r][j];
                }
            } else {
                if (i - K - 1 > 0) sum -= sub_sum[i - K - 1][j];
                if (i + K < rows) sum += sub_sum[i + K][j];
            }
            res[i][j] = sum;
        }
    }

    return res;
};