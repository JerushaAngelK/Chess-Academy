package com.example.project.backend.controllers;

import com.example.project.backend.dtos.reportDto;
import com.example.project.backend.services.reportService;

import jakarta.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Base64;
@RestController
@CrossOrigin("*")
@RequestMapping("/api/reports")
public class reportController {

    private reportService reportService;

    public reportController(reportService reportService) {
        this.reportService = reportService;
    }

    @PostMapping("/post")
    public ResponseEntity<reportDto> createReport(@RequestParam("screenshot") MultipartFile screenshot,
                                                  @RequestParam("complaint") String complaint) {
        reportDto reportDto = new reportDto();
        try {
            // Convert MultipartFile to byte[]
            byte[] fileBytes = screenshot.getBytes();
            // Convert byte[] to Base64 String
            String base64Screenshot = Base64.getEncoder().encodeToString(fileBytes);
            // Set the Base64 String on the reportDto
            reportDto.setScreenshot(base64Screenshot);
        } catch (IOException e) {
            // Handle exception...
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
        reportDto.setComplaint(complaint);
        reportDto savedReport = reportService.createReport(reportDto);
        return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
    }

@GetMapping("/")
public ResponseEntity<List<reportDto>> getAllReports() {
    List<reportDto> reports = reportService.getAllReports();
    return ResponseEntity.ok(reports);
}

    // @PostMapping("/post")
    // public ResponseEntity<reportDto> createReport(@RequestBody reportDto reportDto) {
    //     reportDto savedReport = reportService.createReport(reportDto);
    //     return new ResponseEntity<>(savedReport, HttpStatus.CREATED);
    // }

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
    // @GetMapping("/")
    // public ResponseEntity<List<reportDto>> getAllReports() {
    //     List<reportDto> reports = reportService.getAllReports();
    //     return ResponseEntity.ok(reports);
    // }
}