package com.example.demo.domain;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Data
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class TestDTO {
	
	private Integer item_code;
	private Integer item_amount;
	
}
