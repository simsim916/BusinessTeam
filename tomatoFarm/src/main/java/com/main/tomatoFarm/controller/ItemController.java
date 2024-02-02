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
		model.addAttribute("list", list);
		model.addAttribute("keyword", keyword);
		if(list == null) {
			model.addAttribute("size", 0);
		} else {
			model.addAttribute("size", list.size());
		}
		if(keyword != null) {
			KeywordDTO test = new KeywordDTO();
			keywordService.updateKeywordCnt(test);
		}
		// ======================검색어 업데이트==================
//		keywordService.updateKeywordCnt(dto);
//		if ( keywordService.updateKeywordCnt(dto) > 0 ) {}
		//=================================================
		model.addAttribute("brandList", itemService.selectBrandList());
		model.addAttribute("sortList", sortSerivce.selectSortList());
		model.addAttribute("sortbList", sortSerivce.selectSortbList());
		
	}

}
