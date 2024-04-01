package com.example.demo.entity;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name="chatbot")
@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class ChatBot {
	private Integer seq;
	private String wirter;
	private String contents;
	private Integer root;
	private LocalDateTime regdate;

}
