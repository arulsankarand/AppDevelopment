package com.kavin.main.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.kavin.main.model.OrderMapping;

public interface OrderMappingRepository extends JpaRepository<OrderMapping, Long> {

}

