package com.example.project.backend.services.serviceImplementation;

import com.example.project.backend.dtos.notificationsDto;
import com.example.project.backend.models.notifications;
import com.example.project.backend.repositories.notificationsRepository;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.notificationsMapper;
import com.example.project.backend.services.notificationsService;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class notificationsServiceImpl implements notificationsService {

    private notificationsRepository notificationsRepository;

    @Override
    public notificationsDto createNotifications(notificationsDto notificationsdto) {
        notifications notifications = notificationsMapper.mapToNotifications(notificationsdto);
        notifications savedNotifications = notificationsRepository.save(notifications);
        return notificationsMapper.mapToNotificationsDto(savedNotifications);
    }

    @Override
    public notificationsDto getNotificationsById(int notificationsId) {
        notifications notifications = notificationsRepository.findById(notificationsId)
                .orElseThrow(() -> new ResourceNotFoundException("Notifications is not exist with given id : " + notificationsId));

        return notificationsMapper.mapToNotificationsDto(notifications);
    }

    @Override
    public List<notificationsDto> getAllNotifications() {
        List<notifications> notificationsList = notificationsRepository.findAll();

        List<notificationsDto> notificationsDtos = new ArrayList<>();
        for (notifications notifications : notificationsList) {
            notificationsDtos.add(notificationsMapper.mapToNotificationsDto(notifications));
        }

        return notificationsDtos;
    }
    @Override
    public notificationsDto updateNotifications(int id, notificationsDto notificationsDto) {
        notifications notifications = notificationsRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Notifications not found with id : " + id));

        // notifications.setId(notificationsDto.getId());
        notifications.setNoti(notificationsDto.getNoti());
        notifications.setRead(notificationsDto.isRead());

        notifications updatedNotifications = notificationsRepository.save(notifications);
        return notificationsMapper.mapToNotificationsDto(updatedNotifications);
    }

    @Override
    public void deleteNotifications(int id) {
        notificationsRepository.deleteById(id);
    }
}