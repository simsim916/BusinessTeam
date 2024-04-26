package com.example.demo.user.user.service;

import com.example.demo.mapper.UserMapper;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class UserServiceImplTest {

    @Autowired
    private UserMapper userMapper;

    @Test
    public void test (){
        System.out.println(userMapper.select());
    }
}