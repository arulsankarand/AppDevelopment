package com.kavin.main.repository;


import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kavin.main.model.Product;

public interface ProductRepository extends JpaRepository<Product, Long> {

    Optional<Product> findByProductName(String productName);

    Product findByPid(Long pid);

    void deleteByPid(Long pid);

}

