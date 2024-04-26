package com.example.demo;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.mapper.ItemMapper;
import com.example.demo.mapper.UserMapper;
import com.example.demo.module.SearchRequest;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ApiTest {

    @Autowired
    private UserMapper userMapper;
    @Autowired
    private ItemMapper itemMapper;

    @Test
    public void test1 (){
        System.out.println(userMapper.select());
    }

    @Test
    public void test2(){
        SearchRequest searchRequest = new SearchRequest();
        searchRequest.setKeyword2("simsim916");
        for(ItemDTO e : itemMapper.selectRecentItemWhereUserId(searchRequest))
        System.out.println(e);
    }
}