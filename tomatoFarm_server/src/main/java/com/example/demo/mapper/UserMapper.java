package com.example.demo.mapper;

import com.example.demo.user.user.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> select();
}
