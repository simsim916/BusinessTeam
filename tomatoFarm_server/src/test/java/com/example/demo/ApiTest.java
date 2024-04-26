package com.example.demo;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.mapper.ItemMapper;
import com.example.demo.mapper.UserMapper;
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
        for(ItemDTO e : itemMapper.selectRecentItemWhereUserId("simsim916"))
        System.out.println(e);
    }
}