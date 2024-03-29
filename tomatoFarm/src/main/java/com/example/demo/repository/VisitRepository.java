package com.example.demo.repository;


import java.util.List;

import javax.persistence.EntityManager;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.entity.Visit_page;
import com.example.demo.entity.Visit_pageID;
import com.example.demo.module.SearchRequest;

import lombok.AllArgsConstructor;


public interface VisitRepository{


	public List<Visit_page> selectAll(Visit_page entity);
	public Visit_page update(Visit_page visitPage, Visit_pageID visitPageID) ;
}
