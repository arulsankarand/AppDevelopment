package com.kavin.main.service;


import java.util.List;

import com.kavin.main.dto.request.ProductRequest;
import com.kavin.main.dto.response.CountResponse;
import com.kavin.main.dto.response.ProductResponse;
import com.kavin.main.model.Product;

public interface ProductService {

    boolean saveProduct(ProductRequest request);

    List<ProductResponse> getAllProducts();

    ProductResponse getProduct(Long pid);

    ProductResponse updateProduct(ProductRequest request, Long pid);

    boolean deleteProduct(Long pid);

    Product getProductModelId(Long pid);

    CountResponse productCount();

}
