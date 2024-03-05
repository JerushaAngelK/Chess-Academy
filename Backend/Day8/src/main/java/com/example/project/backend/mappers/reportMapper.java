package com.example.project.backend.mappers;


import com.example.project.backend.dtos.reportDto;
import com.example.project.backend.models.report;


public class reportMapper {


    public static reportDto mapToReportDto(report report) {
        return new reportDto(
                report.getId(),
                report.getScreenshot(),
                report.getComplaint());
    }

    public static report mapToReport(reportDto reportDto) {
        return new report(
                reportDto.getId(),
                reportDto.getScreenshot(),
                reportDto.getComplaint());
    }
}