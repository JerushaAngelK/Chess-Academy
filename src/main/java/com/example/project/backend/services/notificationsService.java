package com.example.project.backend.services;

import com.example.project.backend.dtos.notificationsDto;

import java.util.List;

public interface notificationsService {
    notificationsDto createNotifications(notificationsDto notificationsDto);
    notificationsDto getNotificationsById(int notificationsId);
    List<notificationsDto> getAllNotifications();
}