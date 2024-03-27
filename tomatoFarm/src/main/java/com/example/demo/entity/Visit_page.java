package com.example.demo.entity;


import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Embeddable;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;


@Entity
@Table(name = "visit_page")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@ToString
@Data
public class Visit_page {

	@EmbeddedId
	Visit_pageID visit_pageID;
	@Builder.Default 
	private Integer visit_count = 1;
}

