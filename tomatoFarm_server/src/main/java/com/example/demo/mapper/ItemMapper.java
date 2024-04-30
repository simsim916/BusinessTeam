package com.example.demo.mapper;

import com.example.demo.item.item.domain.ItemDTO;
import com.example.demo.item.item.service.ItemService;
import com.example.demo.module.SearchRequest;
import com.example.demo.user.user_cart.domain.UserCartDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface ItemMapper extends ItemService {
    List<ItemDTO> selectRecentItemWhereUserId(SearchRequest searchRequest);
    List<ItemDTO> selectItemWhereKeyword(SearchRequest searchRequest);
    List<ItemDTO> selectItemListStringWhereTypeNotNull(SearchRequest searchRequest);
    List<ItemDTO> selectItemListWhereBrand(SearchRequest searchRequest);
}
