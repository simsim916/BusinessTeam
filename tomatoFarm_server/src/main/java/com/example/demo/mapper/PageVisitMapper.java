package com.example.demo.mapper;

import com.example.demo.module.SearchRequest;
import com.example.demo.page.page_visit.domain.PageVisitCNTDTO;

import java.util.List;

public interface PageVisitMapper {

    List<PageVisitCNTDTO> selectVisitCountGroupByDate(SearchRequest searchRequest);
}
