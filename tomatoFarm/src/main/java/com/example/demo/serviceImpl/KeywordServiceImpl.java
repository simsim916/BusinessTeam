package com.example.demo.serviceImpl;

import com.example.demo.domain.UserToken;
import com.example.demo.entity.Keyword;
import com.example.demo.entity.KeywordID;
import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;
import com.example.demo.module.SearchRequest;
import com.example.demo.repository.KeywordRepository;
import com.example.demo.repostoryImpl.VisitRepositoryImpl;
import com.example.demo.service.KeywordService;
import com.example.demo.service.VisitService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@AllArgsConstructor
@Service
public class KeywordServiceImpl implements KeywordService {

	KeywordRepository keywordRepository;

	@Override
	@Transactional
	public List<String> selectall(Keyword entity, String userId) {

		List<Keyword> keyword_list =keywordRepository.findByIdOrderBySearchDateDesc(userId);
		List<String> keyword = new ArrayList<>();
		for (Keyword e : keyword_list){
			keyword.add(e.getKeyword());
		}
		return keyword;
	}
}
