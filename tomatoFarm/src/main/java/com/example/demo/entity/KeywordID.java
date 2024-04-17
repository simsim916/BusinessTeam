package com.example.demo.entity;

import java.io.Serializable;
import java.time.LocalDate;

import javax.persistence.Embeddable;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Embeddable
@Builder
@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class KeywordID implements Serializable{

	private String keyword;
	private String id;
	private LocalDate searchDate;
	
}
