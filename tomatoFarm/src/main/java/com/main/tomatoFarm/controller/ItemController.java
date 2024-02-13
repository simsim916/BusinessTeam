package com.main.tomatoFarm.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.main.tomatoFarm.domain.ItemDTO;
import com.main.tomatoFarm.domain.KeywordDTO;
import com.main.tomatoFarm.service.ItemService;
import com.main.tomatoFarm.service.KeywordService;
import com.main.tomatoFarm.service.SortService;

import lombok.AllArgsConstructor;

@AllArgsConstructor
@Controller
@RequestMapping("/item")
public class ItemController {

	ItemService itemService;
	SortService sortSerivce;
	KeywordService keywordService;

	@GetMapping("/list")
	public void list(Model model, @RequestParam("keyword") String keyword) {
		List<ItemDTO> list = itemService.selectItemListWhereKeyword(keyword);
		
		// 검색결과 개수
		if(list == null) {
			model.addAttribute("size", 0);
		} else {
			model.addAttribute("size", list.size());
		}
		
		// 검색키워드 등록
		if(keyword != null) {
			KeywordDTO test = new KeywordDTO();
			test.setKeyword(keyword);
			keywordService.updateKeywordCnt(test);
		}
		
		// 검색결과
		model.addAttribute("list", list);
		model.addAttribute("keyword", keyword);
		model.addAttribute("brandList", itemService.selectBrandList());
		model.addAttribute("sortList", sortSerivce.selectSortList());
		model.addAttribute("sortbList", sortSerivce.selectSortbList());
		
	}
	
	@GetMapping("/detail")
	public void detail(Model model , @RequestParam("code") int code) {
		ItemDTO dto = itemService.selectItem(code);
		model.addAttribute("dto", dto);
	}
	
	@GetMapping("/eventPage")
	public void eventPage(Model model) {
		  model.addAttribute("abc", keywordService.selectKeywordList());
		  // 이벤트 진행중인 브랜드 아이템들이 필요한 경우 이런식으로 전해주는게 맞는걸까?
		  // 테이블의 이벤트컬럼을 이용하려고 했더니 새로운 sql문이 필요하고 ~ 새로운 service,dao 를 만들어야하는데
		  // 어떤게 맞는 방법일까
		  //model.addAttribute("kimgoowon",itemService.selectItemListWhereBrand("김구원선생"));
		  //model.addAttribute("fresheasy",itemService.selectItemListWhereBrand("프레시지"));
		  //model.addAttribute("mychef",itemService.selectItemListWhereBrand("마이셰프"));
	}
	
}
