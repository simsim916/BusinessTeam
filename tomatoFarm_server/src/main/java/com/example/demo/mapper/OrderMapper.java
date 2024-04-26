package com.example.demo.mapper;

import com.example.demo.module.SearchRequest;
import com.example.demo.order.domain.OrderDTO;
import com.example.demo.user.user.entity.User;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface OrderMapper {
    List<OrderDTO> selectOrderListByUserId(SearchRequest searchRequest);
}
