package com.example.demo.page.page_visit.domain;

import lombok.Data;


@Data
public class PageVisitCNTDTO {
	
	private String visitDate;
	private int homeCount;
	private int listCount;
	private int detailCount;
	private int orderCount;

}
