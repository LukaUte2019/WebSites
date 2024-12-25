#include <iostream>
#include <vector>

int main() {
    std::vector<int> grades;
    int exams = 5;

    for (int index = 0; index < exams; index++) {
        int grade;
        std::cout << "Enter a grade for exam: ";
        std::cin >> grade;
        grades.push_back(grade);
    }

    int sum = 0;
    for (int i = 0; i < grades.size(); i++) {
        sum += grades[i];
    }

    std::cout << "Grades: ";
    for (int grade : grades) {
        std::cout << grade << " ";
    }
    std::cout << std::endl;

    std::cout << "Sum: " << sum << std::endl;

    double average = static_cast<double>(sum) / exams;
    const double passingAv = 50;

    if (average <= passingAv) {
        std::cout << "You have failed the exam" << std::endl;
    } else {
        std::cout << "You have passed the exam" << std::endl;
    }

    return 0;
}

