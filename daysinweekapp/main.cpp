#include <iostream>
#include <string>

int main() {
    std::string value;
    std::cout << "Enter the number of days in a week (0-7): ";
    std::getline(std::cin, value);

    int input = std::stoi(value);

    switch (input) {
        case 1:
            std::cout << "Monday" << std::endl;
            break;
        case 2:
            std::cout << "Tuesday (Into the Groove)" << std::endl;
            break;
        case 3:
            std::cout << "Wednesday (Hip-Hop don't Stop, Super Radio Love)" << std::endl;
            break;
        case 4:
            std::cout << "Thursday (MAK Top 10, Super Radio Clubbing)" << std::endl;
            break;
        case 5:
            std::cout << "Friday (Addictive vibes, Colors of freedom)" << std::endl;
            // No break here to fall through to case 6
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
