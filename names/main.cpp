#include <iostream>
#include <vector>
#include <string>

int main() {
    std::vector<std::string> values = {"Zhanko", "Kliment", "Luka", "Jasmin", "Viktorija"};

    for (size_t i = 0; i < values.size(); i++) {
        if (values[i] == "Zhanko" || values[i] == "Kliment") {
            std::cout << "Trainer: " << values[i] << std::endl;
            continue;
        } else {
            std::cout << "Student: " << values[i] << std::endl;
        }
        std::cout << "hello!!" << std::endl;
    }

    return 0;
}

