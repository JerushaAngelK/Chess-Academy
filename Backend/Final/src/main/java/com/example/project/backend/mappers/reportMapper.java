package com.example.project.backend.mappers;


import java.util.Base64;

import com.example.project.backend.dtos.reportDto;
import com.example.project.backend.models.report;


public class reportMapper {


    public static reportDto mapToReportDto(report report) {
        String base64Screenshot = Base64.getEncoder().encodeToString(report.getScreenshot().getBytes());
        return new reportDto(
                report.getId(),
                base64Screenshot,
                report.getComplaint());
    }

    public static report mapToReport(reportDto reportDto) {
        return new report(
                reportDto.getId(),
                reportDto.getScreenshot(),
                reportDto.getComplaint());
    }
}