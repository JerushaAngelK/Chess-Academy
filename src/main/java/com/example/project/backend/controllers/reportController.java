package com.example.project.backend.controllers;

import com.example.project.backend.dtos.reportDto;
import com.example.project.backend.services.reportService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/reports")
public class reportController {

    private reportService reportService;

    public reportController(reportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping
    public ResponseEntity<reportDto> createReport(@RequestBody reportDto reportDto) {
        reportDto savedReport = reportService.createReport(reportDto);
        return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<reportDto> getReportById(@PathVariable("id") int reportId) {
        reportDto reportDto = reportService.getReportById(reportId);
        return ResponseEntity.ok(reportDto);
    }

    @GetMapping
    public ResponseEntity<List<reportDto>> getAllReports() {
        List<reportDto> reports = reportService.getAllReports();
        return ResponseEntity.ok(reports);
    }
}