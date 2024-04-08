package com.example.demo.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Data
@Builder
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ChatBotDTO {
	private Integer seq;
	private String writer;
	private String content;
	private String type;
	private Integer root;
	private Integer ing;
	private LocalDateTime regdate;

	private Integer user_level;
}


