#include <iostream>
#include <vector>
using namespace std;

int main() {
    int row1, col1, row2, col2;
    cin >> row1 >> col1;
    vector<vector<int>> mat1(row1, vector<int>(col1));
    for (int i = 0; i < row1; i++)
        for (int j = 0; j < col1; j++)
            cin >> mat1[i][j];

    cin >> row2 >> col2;
    vector<vector<int>> mat2(row2, vector<int>(col2));
    for (int i = 0; i < row2; i++)
        for (int j = 0; j < col2; j++)
            cin >> mat2[i][j];

    if (col1 != row2) {
        cout << "Matrix multiplication not possible" << endl;
        return 0;
    }

    vector<vector<int>> result(row1, vector<int>(col2, 0));
    for (int i = 0; i < row1; i++)
        for (int j = 0; j < col2; j++)
            for (int k = 0; k < col1; k++)
                result[i][j] += mat1[i][k] * mat2[k][j];

    for (int i = 0; i < row1; i++) {
        for (int j = 0; j < col2; j++)
            cout << result[i][j] << " ";
        cout << endl;
    }

    return 0;
}
