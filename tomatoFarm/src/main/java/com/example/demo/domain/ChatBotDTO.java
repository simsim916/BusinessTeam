package com.example.demo.domain;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;
import lombok.Setter;

@Data
@Builder
@Setter
public class ChatBotDTO {
	private Integer seq;
	private String writer;
	private String content;
	private Integer root;
	private Integer ing;
	private LocalDateTime regdate;

	private Integer user_level;
}
