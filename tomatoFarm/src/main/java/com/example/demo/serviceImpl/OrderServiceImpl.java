package com.example.demo.serviceImpl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Service;

import com.example.demo.domain.ItemDTO;
import com.example.demo.domain.OrderDTO;
import com.example.demo.entity.Itemorder;
import com.example.demo.entity.OrderDetail;
import com.example.demo.entity.UserCart;
import com.example.demo.repository.ItemorderRepository;
import com.example.demo.repository.OrderDetailRepository;
import com.example.demo.repository.UserCartRepository;
import com.example.demo.service.OrderService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class OrderServiceImpl implements OrderService {

	private final ItemorderRepository itemorderRepository;
	private final OrderDetailRepository orderdetailRepository;
	private final UserCartRepository userCartRepository;

	@Transactional
	@Override
	public Itemorder order(OrderDTO dto, String userId) {

		Itemorder itemorder = Itemorder.builder()
				.id(userId)
				.addressCode(dto.getAddress_code())
				.address1(dto.getAddress1())
				.address2(dto.getAddress2())
				.price(dto.getPrice())
				.delivery(dto.getDelivery())
				.point(dto.getPoint())
				.orderDate(LocalDateTime.now())
				.order_message(dto.getDeliverymessage())	
				.size(dto.getItemList().size())
				.item_code(dto.getItemList().get(0).getCode())
				.item_name(dto.getItemList().get(0).getItem_name())
				.build();

		itemorder = itemorderRepository.merge(itemorder);

		List<OrderDetail> list = new ArrayList<OrderDetail>();
		List<Integer> item_list = new ArrayList<Integer>();
		
		for (ItemDTO e : dto.getItemList()) {
			item_list.add(e.getCode());
			list.add(OrderDetail.builder()
					.order_code(itemorder.getCode())
					.item_code(e.getCode())
					.item_amount(e.getAmount())
					.discount(e.getDiscount())
					.build());
		}
		
		orderdetailRepository.batchInsert(list);
		
		List<UserCart> userCart_list = userCartRepository.selectCartWhereUserIDItemList(dto.getId(), item_list);
		for(UserCart e : userCart_list) {
			e.setAmount(0);
		}
		userCartRepository.mergeAll(userCart_list);
		
		return itemorder;
	}

}
