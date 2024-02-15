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
			keywordService.updateKeywordCnt(keyword);
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
	
	
	
}
