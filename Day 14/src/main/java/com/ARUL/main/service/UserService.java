package com.kavin.main.service;


import java.util.List;

import com.kavin.main.dto.request.UserRequest;
import com.kavin.main.dto.response.CountResponse;
import com.kavin.main.dto.response.UserResponse;

public interface UserService {

    List<UserResponse> getAllUsers();

    UserResponse getUser(Long uid);

    UserResponse updateUser(UserRequest request, Long uid);

    boolean deleteProduct(Long uid);

    CountResponse userCount();

}
