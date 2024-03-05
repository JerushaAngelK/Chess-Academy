package com.example.project.backend.services.serviceImplementation;

import com.example.project.backend.dtos.reportDto;
import com.example.project.backend.exception.ResourceNotFoundException;
import com.example.project.backend.mappers.reportMapper;
import com.example.project.backend.models.report;
import com.example.project.backend.repositories.reportRepository;
import com.example.project.backend.services.reportService;

import lombok.AllArgsConstructor;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@AllArgsConstructor
public class reportServiceImpl implements reportService {

    private reportRepository reportRepository;

    @Override
    public reportDto createReport(reportDto reportdto) {
        report report = reportMapper.mapToReport(reportdto);
        report savedReport = reportRepository.save(report);
        return reportMapper.mapToReportDto(savedReport);
    }

    @Override
    public reportDto getReportById(int reportId) {
        report report = reportRepository.findById(reportId)
                .orElseThrow(() -> new ResourceNotFoundException("Report is not exist with given id : " + reportId));

        return reportMapper.mapToReportDto(report);
    }

    @Override
    public reportDto updateReport(int id, reportDto reportDto) {
        report report = reportRepository.findById(id)
        .orElseThrow(() -> new ResourceNotFoundException("Report not found with id : " + id));
        
        // report.setId(reportDto.getId());
report.setScreenshot(reportDto.getScreenshot());
report.setComplaint(reportDto.getComplaint());
        report updatedReport = reportRepository.save(report);
        return reportMapper.mapToReportDto(updatedReport);
    }
    
    @Override
    public void deleteReport(int id) {
        reportRepository.deleteById(id);
    }
    @Override
    public List<reportDto> getAllReports() {
        List<report> reportList = reportRepository.findAll();

        List<reportDto> reportDtos = new ArrayList<>();
        for (report report : reportList) {
            reportDtos.add(reportMapper.mapToReportDto(report));
        }

        return reportDtos;
    }
}