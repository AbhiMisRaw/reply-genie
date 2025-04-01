package com.abhi.emailer;


import lombok.AllArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/email")
@CrossOrigin(origins = "*")
public class EmailGeneratorController {

    private final EmailGenService emailGenService;

    public EmailGeneratorController(EmailGenService emailGenService){
        this.emailGenService = emailGenService;
    }

    @PostMapping("/generate")
    public ResponseEntity<String> generateEmail(@RequestBody EmailRequest emailRequest){
         String response = emailGenService.generateEmailReply(emailRequest);
         return ResponseEntity.ok(response);

    }
}
