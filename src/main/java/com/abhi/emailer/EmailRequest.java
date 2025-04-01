package com.abhi.emailer;


import lombok.Data;

@Data
public class EmailRequest {
    private String emailContent;
    private String tone;
    private boolean subject;

//    public EmailRequest() {
//    }
//
//    public EmailRequest(String emailContent, String tone, boolean subject) {
//        this.emailContent = emailContent;
//        this.tone = tone;
//        this.subject = subject;
//    }
//
//    public String getEmailContent() {
//        return emailContent;
//    }
//
//    public void setEmailContent(String emailContent) {
//        this.emailContent = emailContent;
//    }
//
//    public String getTone() {
//        return tone;
//    }
//
//    public void setTone(String tone) {
//        this.tone = tone;
//    }
//
//    public boolean isSubject() {
//        return subject;
//    }
//
//    public void setSubject(boolean subject) {
//        this.subject = subject;
//    }
}
