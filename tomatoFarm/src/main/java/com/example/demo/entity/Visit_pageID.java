package com.example.demo.entity;
import java.io.Serializable;
import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.Embeddable;
import javax.persistence.Entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Data
@ToString
public class Visit_pageID implements Serializable{
	// implements Serializable 복합키 설정의 경우 필요
	private String page;
	private LocalDate visit_date;
}