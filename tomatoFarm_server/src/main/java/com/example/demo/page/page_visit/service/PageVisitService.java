package com.example.demo.page.page_visit.service;

import java.util.List;

import com.example.demo.page.page_visit.domain.PageVisitCNTDTO;
import com.example.demo.page.page_visit.entity.PageVisit;
import com.example.demo.module.SearchRequest;


public interface PageVisitService {

	PageVisit update(PageVisit entity);
	List<PageVisitCNTDTO> select(SearchRequest searchRequest);
	List<PageVisit> selectWhere(SearchRequest searchRequest);
}
