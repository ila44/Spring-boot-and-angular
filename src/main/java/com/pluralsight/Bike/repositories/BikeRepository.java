package com.pluralsight.Bike.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.pluralsight.Bike.models.Bike;

public interface BikeRepository extends JpaRepository<Bike, Long> {

}
