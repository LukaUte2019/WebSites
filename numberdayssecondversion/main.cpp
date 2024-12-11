#include <iostream>
#include <string>
#include <limits>

int main() {
    std::string value1;
    int input1;

    std::cout << "Enter the number of days in a week (0-7): ";
    std::getline(std::cin, value1);

    try {
        input1 = std::stoi(value1);
    } catch (const std::invalid_argument& e) {
        std::cout << "Invalid input" << std::endl;
        return 1;
    } catch (const std::out_of_range& e) {
        std::cout << "Invalid input" << std::endl;
        return 1;
    }

    switch (input1) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            std::cout << "Workday" << std::endl;
            // Fall through intentional
        case 6:
            std::cout << "Saturday (Disco Heaven)" << std::endl;
            break;
        case 7:
            std::cout << "Sunday (Cacactua top 20)" << std::endl;
            break;
        default:
            std::cout << "Invalid input" << std::endl;
    }

    return 0;
}

