package com.example.project.backend.mappers;

import com.example.project.backend.dtos.notificationsDto;
import com.example.project.backend.models.notifications;

public class notificationsMapper {

    public static notificationsDto mapToNotificationsDto(notifications notifications) {
        return new notificationsDto(
                notifications.getId(),
                notifications.getNoti(),
                notifications.isRead());
    }

    public static notifications mapToNotifications(notificationsDto notificationsDto) {
        return new notifications(
                notificationsDto.getId(),
                notificationsDto.getNoti(),
                notificationsDto.isRead());
    }
}