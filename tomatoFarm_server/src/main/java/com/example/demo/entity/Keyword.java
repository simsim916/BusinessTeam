package com.example.demo.entity;

import java.time.LocalDate;
import java.time.LocalDateTime;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "keyword")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
@IdClass(KeywordID.class)
public class Keyword {
	
	@Id
	private String keyword;
	@Id
	@Column(name = "search_date")
	private LocalDate searchDate;
	@Id
	private String id;
	@Builder.Default
	private Integer search_count=1;
}
