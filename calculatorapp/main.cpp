#include <iostream>
#include <string>

double calculate(double num1, double num2, char operation) {
    switch (operation) {
        case '/':
            return num1 / num2;
        case '*':
            return num1 * num2;
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        default:
            std::cout << "Invalid operation" << std::endl;
            return 0;
    }
}

int main() {
    double num1, num2;
    char operation;
    std::string input;

    std::cout << "Enter 1 number: ";
    std::cin >> num1;

    std::cout << "Enter 2 number: ";
    std::cin >> num2;

    std::cout << "Enter / (delenje), * (mnozenje), + (sobiranje), - (odzemanje): ";
    std::cin >> operation;

    double result = calculate(num1, num2, operation);
    std::cout << "Result: " << result << std::endl;

    return 0;
}

