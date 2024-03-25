package com.example.demo.domain;

import java.time.LocalDateTime;

import lombok.Builder;
import lombok.Data;
import lombok.Setter;

@Data
@Builder
@Setter
public class Item_askDTO {

	private int seq; //순번
	private int item_code; //제품코드
	private String writer;	//글쓴이
	private String title;	//제목
	private String contents;	//내용
	private String password; 	//비밀번호
	private String reply;	//답변
	private LocalDateTime regdate;	//날짜
	
}
