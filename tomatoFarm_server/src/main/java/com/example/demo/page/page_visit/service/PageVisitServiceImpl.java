package com.example.demo.page.page_visit.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;

import javax.transaction.Transactional;

import com.example.demo.mapper.PageVisitMapper;
import com.example.demo.page.page_visit.domain.PageVisitCNTDTO;
import com.example.demo.page.page_visit.entity.PageVisit;
import com.example.demo.page.page_visit.entity.PageVisitID;
import com.example.demo.page.page_visit.repository.PageVisitRepository;
import com.example.demo.page.page_visit.repository.PageVisitRepositoryImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import com.example.demo.module.SearchRequest;

import lombok.AllArgsConstructor;

@RequiredArgsConstructor
@Service
public class PageVisitServiceImpl implements PageVisitService {

    private final PageVisitRepository visitRepository;
    private final PageVisitMapper pageVisitMapper;

    @Override
    @Transactional
    public PageVisit update(PageVisit entity) {
        LocalDate now = LocalDateTime.now().toLocalDate();

        PageVisitID visitPageID = new PageVisitID().builder()
                .visitdate(now)
                .page(entity.getPage())
                .build();

        entity.setVisitdate(now);

        return visitRepository.update(entity, visitPageID);
    }

    @Override
    public List<PageVisitCNTDTO> select(SearchRequest searchRequest){
        return pageVisitMapper.selectVisitCountGroupByDate(searchRequest);
    }

    @Override
    public List<PageVisit> selectWhere(SearchRequest searchRequest) {
        if (searchRequest.getKeyword().matches("^[0-9]*$")) {
            return visitRepository.selectWhereNumber(searchRequest);
        } else {
            return visitRepository.selectWhereString(searchRequest);
        }
    }


}
