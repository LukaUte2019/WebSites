#include <iostream>
#include <string>

class Hotel {
public:
    std::string name;
    int numOfRooms;
    int bookedRooms;
    int numOfStars;
    bool gym;

    Hotel(std::string hotelName, int rooms, int booked, int stars, bool hasGym)
        : name(hotelName), numOfRooms(rooms), bookedRooms(booked), numOfStars(stars), gym(hasGym) {}

    bool isAvailable(int numOfRoomsToReserve) {
        int freeRooms = numOfRooms - bookedRooms;
        if (freeRooms >= numOfRoomsToReserve) {
            std::cout << "We reserved " << numOfRoomsToReserve << " rooms to you in " << name << std::endl;
            return true;
        } else {
            std::cout << "Sorry we are booked" << std::endl;
            return false;
        }
    }
};

int main() {
    Hotel hotel("Hotel Palas", 30, 20, 4, false);
    hotel.isAvailable(4); // Example usage
    return 0;
}

