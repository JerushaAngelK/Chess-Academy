package com.example.project.backend.controllers;

import com.example.project.backend.dtos.reportDto;
import com.example.project.backend.services.reportService;

import jakarta.validation.Valid;

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

    @PostMapping("/post")
    public ResponseEntity<reportDto> createReport(@RequestBody reportDto reportDto) {
        reportDto savedReport = reportService.createReport(reportDto);
        return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
    }

    @GetMapping("{id}")
    public ResponseEntity<reportDto> getReportById(@PathVariable("id") int reportId) {
        reportDto reportDto = reportService.getReportById(reportId);
        return ResponseEntity.ok(reportDto);
    }

    @PutMapping("/{id}")
    public ResponseEntity<reportDto> updateReport(@PathVariable(value = "id") int reportId,
                                                 @Valid @RequestBody reportDto reportDto) {
        reportDto updatedReport = reportService.updateReport(reportId, reportDto);
        return ResponseEntity.ok(updatedReport);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable(value = "id") int reportId) {
        reportService.deleteReport(reportId);
        return ResponseEntity.noContent().build();
    }
    @GetMapping("/")
    public ResponseEntity<List<reportDto>> getAllReports() {
        List<reportDto> reports = reportService.getAllReports();
        return ResponseEntity.ok(reports);
    }
}