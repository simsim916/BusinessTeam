package com.example.demo.service;

import com.example.demo.entity.Keyword;
import com.example.demo.entity.UserAddress;

import java.util.List;

public interface KeywordService {
	List<String> selectall(Keyword entity, String userId);
}
