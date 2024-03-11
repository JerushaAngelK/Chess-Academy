package com.example.project.backend.controllers;

import java.util.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import com.example.project.backend.dtos.AuthRequest;
import com.example.project.backend.models.register;
import com.example.project.backend.repositories.registerRepository;
import com.example.project.backend.services.JwtService;
import com.example.project.backend.services.registerService;

@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private registerService service;
    
    @Autowired
    private registerRepository repository;
    @Autowired
    private JwtService jwtService;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/welcome")
    public String welcome() {
        return "Welcome this endpoint is not secure";
    }

    @PostMapping("/new")
    public String addNewUser(@RequestBody register registerinfo) {
        registerinfo.setPassword(passwordEncoder.encode(registerinfo.getPassword()));
        repository.save(registerinfo);
       return "User Created";
    }

    // @PostMapping("/authenticate")
    // public String authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
    //     Authentication authentication = authenticationManager.authenticate(
    //             new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
    //     if (authentication.isAuthenticated()) {
    //         return jwtService.generateToken(authRequest.getUsername());
    //     } else {
    //         throw new UsernameNotFoundException("invalid user request !");
    //     }

    // }
        @PostMapping("/authenticate")
    public ResponseEntity<Map<String, Object>> authenticateAndGetToken(@RequestBody AuthRequest authRequest) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(authRequest.getUsername(), authRequest.getPassword()));
            String token = jwtService.generateToken(authRequest.getUsername());
            Optional<register> optionalUser = repository.findByEmail(authRequest.getUsername());
            if (optionalUser.isPresent()) {
    register user = optionalUser.get();
    String role = user.getRoles();
        Map<String, Object> response = new HashMap<>();
        response.put("token", token);
        response.put("role", role);
        return ResponseEntity.ok(response);

}
            return null;

  }

}
 