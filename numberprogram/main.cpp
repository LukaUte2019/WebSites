#include <iostream>
#include <string>

int main() {
    std::string number1, number2;

    std::cout << "Enter Number 1: ";
    std::getline(std::cin, number1);
    std::cout << "Enter Number 2: ";
    std::getline(std::cin, number2);

    // If and else case
    if (number1 != number2) {
        std::cout << "The numbers are different!" << std::endl;
    } else {
        std::cout << "The numbers are the same!" << std::endl;
    }

    // Multiple cases if and else
    // The first case that is true, will be executed. If all are false, else is executed
    if (number1 == "0" && number2 == "0") {
        std::cout << "Both numbers are zero!" << std::endl;
    } else if (number1 != number2) {
        std::cout << "The numbers are different!" << std::endl;
    } else {
        std::cout << "The numbers are the same!" << std::endl;
    }

    // Two separate if statements
    // Both might be true and both might write something in the console, since they are separate
    if (number1 == "0" && number2 == "0") {
        std::cout << "Both numbers are zero!" << std::endl;
    }

    if (number1 != number2) {
        std::cout << "The numbers are different!" << std::endl;
    } else {
        std::cout << "The numbers are the same!" << std::endl;
    }

    // Nested if statements
    // If the first if is true, then the second nested one can be executed. Otherwise the nested if is skipped and the second else is executed
    try {
        std::stod(number1);
        std::stod(number2);
        if (number1 != number2) {
            std::cout << "The numbers are different!" << std::endl;
        } else {
            std::cout << "The numbers are the same!" << std::endl;
        }
    } catch (const std::invalid_argument&) {
        std::cout << "Error. Wrong format. Please enter numbers." << std::endl;
    }

    return 0;
}

