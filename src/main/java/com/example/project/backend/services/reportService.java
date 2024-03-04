package com.example.project.backend.services;

import com.example.project.backend.dtos.reportDto;

import java.util.List;

public interface reportService {
    reportDto createReport(reportDto reportDto);
    reportDto getReportById(int reportId);
    List<reportDto> getAllReports();
}