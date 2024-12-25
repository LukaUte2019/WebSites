#include <iostream>
#include <string>
#include <functional>

void storyTeller(const std::string& koj, const std::string& sto, const std::string& koga) {
    std::cout << koj << " was really strong " << sto << " in the " << koga << std::endl;
}

int main() {
    std::string who, what, when;

    // Simulating button click event
    std::cout << "Enter who: ";
    std::getline(std::cin, who);
    std::cout << "Enter what: ";
    std::getline(std::cin, what);
    std::cout << "Enter when: ";
    std::getline(std::cin, when);

    storyTeller(who, what, when);

    return 0;
}

