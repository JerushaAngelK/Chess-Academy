package com.example.project.backend.controllers;

import com.example.project.backend.dtos.notificationsDto;
import com.example.project.backend.services.notificationsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/notifications")
public class notificationsController {

    private notificationsService notificationsService;

    public notificationsController(notificationsService notificationsService) {
        this.notificationsService = notificationsService;
    }

    @PostMapping
    public ResponseEntity<notificationsDto> createNotifications(@RequestBody notificationsDto notificationsDto) {
        notificationsDto savedNotifications = notificationsService.createNotifications(notificationsDto);
        return new ResponseEntity<>(savedNotifications, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<notificationsDto> getNotificationsById(@PathVariable("id") int notificationsId) {
        notificationsDto notificationsDto = notificationsService.getNotificationsById(notificationsId);
        return ResponseEntity.ok(notificationsDto);
    }

    @GetMapping
    public ResponseEntity<List<notificationsDto>> getAllNotifications() {
        List<notificationsDto> notifications = notificationsService.getAllNotifications();
        return ResponseEntity.ok(notifications);
    }
}