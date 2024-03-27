package com.example.demo.entity;

import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

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
public class Keyword {

	@EmbeddedId
	private KeywordID keywordID;
	@Builder.Default private Integer search_count=1;
}
