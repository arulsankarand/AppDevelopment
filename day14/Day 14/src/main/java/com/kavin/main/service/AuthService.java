package com.kavin.main.service;


import com.kavin.main.dto.request.AuthenticationRequest;
import com.kavin.main.dto.request.RegisterRequest;
import com.kavin.main.dto.response.AuthenticationResponse;

public interface AuthService {
    boolean userRegistration(RegisterRequest request);

    AuthenticationResponse userAuthentication(AuthenticationRequest request);
}
