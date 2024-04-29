package com.example.demo;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.mapper.ItemMapper;
import com.example.demo.mapper.PageVisitMapper;
import com.example.demo.module.SearchRequest;
import com.example.demo.page.page_visit.domain.PageVisitCNTDTO;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import java.time.LocalDate;

@SpringBootTest
class ApiTest {

    @Autowired
    private PageVisitMapper userMapper;
    @Autowired
    private ItemMapper itemMapper;

    @Test
    public void test1 (){
        SearchRequest searchRequest = SearchRequest.builder()
                .startdate(LocalDate.now().minusDays(7))
                .enddate(LocalDate.now().plusDays(1))
                .build();
        for (PageVisitCNTDTO e : userMapper.selectVisitCountGroupByDate(searchRequest) )
        System.out.println(e);
    }

    @Test
    public void test2(){
        SearchRequest searchRequest = new SearchRequest();
        searchRequest.setKeyword2("simsim916");
        for(ItemDTO e : itemMapper.selectRecentItemWhereUserId(searchRequest))
        System.out.println(e);
    }
}