package com.example.demo.item_ask.domain;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@Builder
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Item_askDTO {

	private Integer seq; //순번
	private Integer item_code; //제품코드
	private String writer;	//글쓴이
	private String title;	//제목
	private String type;	//유형
	private String contents;	//내용
	private String password; 	// 비밀글 비밀번호
	private String reply;	//답변
	private String reply_writer;	//답변
	private LocalDateTime regdate;	//날짜
	
	private Integer secret; //비밀글 유무
	
	private String item_name;
	
	
}
