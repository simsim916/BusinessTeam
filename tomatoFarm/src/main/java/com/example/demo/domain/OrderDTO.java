package com.example.demo.domain;

import java.time.LocalDate;
import java.util.List;
import java.util.Random;

import javax.persistence.Column;

import com.example.demo.entity.Item;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderDTO {
	
	private List<ItemDTO> itemList; 
	private String address1;
	private String address2;
	private Integer address_code;
	private Integer phonenumber;
	private String deliverymessage;
	private Integer price;
	private Integer discount;
	private Integer delivery;
	private Integer point;
	
	private String id;
	


}
