package com.example.demo.order.repository;

import javax.persistence.ColumnResult;
import javax.persistence.ConstructorResult;
import javax.persistence.EntityManager;
import javax.persistence.SqlResultSetMapping;

import com.example.demo.order.domain.OrderDTO;
import com.example.demo.order.entity.OrderA;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;

import lombok.AllArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;


@SqlResultSetMapping(
		name = "OrderDTOMapping",
		classes = @ConstructorResult(
				targetClass = OrderDTO.class,
				columns = {
						@ColumnResult(name = "seq", type = Integer.class),
						@ColumnResult(name = "userId", type = String.class),
						@ColumnResult(name = "addressCode", type = String.class),
						@ColumnResult(name = "address1", type = String.class),
						@ColumnResult(name = "address2", type = String.class),
						@ColumnResult(name = "orderprice", type = Integer.class),
						@ColumnResult(name = "deliveryprice", type = Integer.class),
						@ColumnResult(name = "usepoint", type = Integer.class),
						@ColumnResult(name = "orderdate", type = LocalDateTime.class),
						@ColumnResult(name = "status", type = Integer.class),
						@ColumnResult(name = "deliverydate", type = LocalDateTime.class),
						@ColumnResult(name = "orderMessage", type = String.class),
						@ColumnResult(name = "orderSize", type = Integer.class),
						@ColumnResult(name = "itemName", type = String.class)
				}
		)
)

@Repository
@AllArgsConstructor
public class ItemorderRepositoryImpl implements ItemorderRepository {

	private final EntityManager entityManager;
	private final JPAQueryFactory jPAQueryFactory;

	@Override
	public OrderA merge(OrderA entity) {
		return entityManager.merge(entity);
	}

	@Override
	public List selectOrderByCode(Integer seq){
		String query = "SELECT o.*, " +
				"(SELECT COUNT(od.item_code) " +
				"	FROM order_detail od " +
				"	WHERE od.order_seq = o.seq) as orderSize, " +
				"(SELECT i.name " +
				"	FROM order_detail od " +
				"	LEFT JOIN item i ON od.item_code = i.code " +
				"	WHERE od.order_seq = :seq LIMIT 1) as itemName " +
				"FROM order_a o WHERE o.seq = :seq";
		return entityManager.createNativeQuery(query, "OrderDTOMapping")
				.setParameter("seq",seq)
				.getResultList();
	}
}
