package com.jyh.tomatoFarm;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;
//test
@Repository
public class ItemDAO {

	private static Connection cn = DBConnection.getConnection();
	private static PreparedStatement pst;
	private static ResultSet rs;
	private static String sql;

	public List<ItemDTO> selectItemList() {

		sql = "select * from mealkit";
		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();

			List<ItemDTO> list = new ArrayList<ItemDTO>();
			if (rs.next()) {
				do {
					ItemDTO dto = new ItemDTO();
					dto.setSort1(rs.getString(1));
					dto.setSort2(rs.getString(2));
					dto.setSort3(rs.getString(3));
					dto.setSort4(rs.getString(4));
					dto.setCode(rs.getInt(5));
					dto.setBrand(rs.getString(6));
					dto.setName(rs.getString(7));
					dto.setWeight(rs.getInt(8));
					dto.setStorage(rs.getString(9));
					dto.setPacking(rs.getString(10));
					dto.setDelivery(rs.getString(11));
					dto.setPrice(rs.getInt(12));
					dto.setSales(rs.getInt(13));
					dto.setStock(rs.getInt(14));
					dto.setEvent(rs.getString(15));
					dto.setDiscount(rs.getInt(16));
					dto.setAdmin(rs.getString(17));
					list.add(dto);
				} while (rs.next());

				return list;
			} else {
				System.out.println("selectItemList => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectItemList => :" + e.toString());
			return null;
		}

	}

	public List<ItemDTO> selectItemListWhereKeyword(String keyword) {

		sql = "select * from mealkit where name =? union all select * from mealkit where brand =?";
		try {
			pst = cn.prepareStatement(sql);
			pst.setString(1, keyword);
			pst.setString(2, keyword);
			rs = pst.executeQuery();

			List<ItemDTO> list = new ArrayList<ItemDTO>();
			if (rs.next()) {
				do {
					ItemDTO dto = new ItemDTO();
					dto.setSort1(rs.getString(1));
					dto.setSort2(rs.getString(2));
					dto.setSort3(rs.getString(3));
					dto.setSort4(rs.getString(4));
					dto.setCode(rs.getInt(5));
					dto.setBrand(rs.getString(6));
					dto.setName(rs.getString(7));
					dto.setWeight(rs.getInt(8));
					dto.setStorage(rs.getString(9));
					dto.setPacking(rs.getString(10));
					dto.setDelivery(rs.getString(11));
					dto.setPrice(rs.getInt(12));
					dto.setSales(rs.getInt(13));
					dto.setStock(rs.getInt(14));
					dto.setEvent(rs.getString(15));
					dto.setDiscount(rs.getInt(16));
					dto.setAdmin(rs.getString(17));
					list.add(dto);
				} while (rs.next());

				return list;
			} else {
				System.out.println("selectItemListWhereNameBrand => 검색할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectItemListWhereNameBrand => :" + e.toString());
			return null;
		}

	}

	public ItemDTO selectItem(int code) {

		sql = "select * from mealkit where code =" + code;
		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();

			if (rs.next()) {

				ItemDTO dto = new ItemDTO();
				dto.setSort1(rs.getString(1));
				dto.setSort2(rs.getString(2));
				dto.setSort3(rs.getString(3));
				dto.setSort4(rs.getString(4));
				dto.setCode(rs.getInt(5));
				dto.setBrand(rs.getString(6));
				dto.setName(rs.getString(7));
				dto.setWeight(rs.getInt(8));
				dto.setStorage(rs.getString(9));
				dto.setPacking(rs.getString(10));
				dto.setDelivery(rs.getString(11));
				dto.setPrice(rs.getInt(12));
				dto.setSales(rs.getInt(13));
				dto.setStock(rs.getInt(14));
				dto.setEvent(rs.getString(15));
				dto.setDiscount(rs.getInt(16));
				dto.setAdmin(rs.getString(17));

				return dto;
			} else {
				System.out.println("selectItem => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectItem => :" + e.toString());
			return null;
		}

	}

	// 이벤트진행중인 제품들만 뽑는 리스트
	public List<ItemDTO> selectEvent() {

		sql = "select * from mealkit where discount > 0 ";
		// 테이블 생성시 할인율에 Default 0 설정해둔다는 가정 하에 작성한 sql 구문
		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();

			List<ItemDTO> list = new ArrayList<ItemDTO>();
			if (rs.next()) {
				do {
					ItemDTO dto = new ItemDTO();
					dto.setSort1(rs.getString(1));
					dto.setSort2(rs.getString(2));
					dto.setSort3(rs.getString(3));
					dto.setSort4(rs.getString(4));
					dto.setCode(rs.getInt(5));
					dto.setBrand(rs.getString(6));
					dto.setName(rs.getString(7));
					dto.setWeight(rs.getInt(8));
					dto.setStorage(rs.getString(9));
					dto.setPacking(rs.getString(10));
					dto.setDelivery(rs.getString(11));
					dto.setPrice(rs.getInt(12));
					dto.setSales(rs.getInt(13));
					dto.setStock(rs.getInt(14));
					dto.setEvent(rs.getString(15));
					dto.setDiscount(rs.getInt(16));
					dto.setAdmin(rs.getString(17));
					list.add(dto);
				} while (rs.next());

				return list;
			} else {
				System.out.println("selectEvent => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectEvent => :" + e.toString());
			return null;
		}

	}

	// 판매량 순위
	public List<ItemDTO> selectSales() {

		sql = "select * from mealkit order by sales desc";
		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();

			List<ItemDTO> list = new ArrayList<ItemDTO>();
			if (rs.next()) {
				do {
					ItemDTO dto = new ItemDTO();
					dto.setSort1(rs.getString(1));
					dto.setSort2(rs.getString(2));
					dto.setSort3(rs.getString(3));
					dto.setSort4(rs.getString(4));
					dto.setCode(rs.getInt(5));
					dto.setBrand(rs.getString(6));
					dto.setName(rs.getString(7));
					dto.setWeight(rs.getInt(8));
					dto.setStorage(rs.getString(9));
					dto.setPacking(rs.getString(10));
					dto.setDelivery(rs.getString(11));
					dto.setPrice(rs.getInt(12));
					dto.setSales(rs.getInt(13));
					dto.setStock(rs.getInt(14));
					dto.setEvent(rs.getString(15));
					dto.setDiscount(rs.getInt(16));
					dto.setAdmin(rs.getString(17));
					list.add(dto);
				} while (rs.next());

				return list;
			} else {
				System.out.println("selectSales => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectSales => :" + e.toString());
			return null;
		}

	}

	public List<ItemDTO> selectItemListWhereBrand(String str) {

		sql = "Select * From mealkit Where brand =" + str + "Order By sales desc";
		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();

			List<ItemDTO> list = new ArrayList<ItemDTO>();
			if (rs.next()) {
				do {
					ItemDTO dto = new ItemDTO();
					dto.setSort1(rs.getString(1));
					dto.setSort2(rs.getString(2));
					dto.setSort3(rs.getString(3));
					dto.setSort4(rs.getString(4));
					dto.setCode(rs.getInt(5));
					dto.setBrand(rs.getString(6));
					dto.setName(rs.getString(7));
					dto.setWeight(rs.getInt(8));
					dto.setStorage(rs.getString(9));
					dto.setPacking(rs.getString(10));
					dto.setDelivery(rs.getString(11));
					dto.setPrice(rs.getInt(12));
					dto.setSales(rs.getInt(13));
					dto.setStock(rs.getInt(14));
					dto.setEvent(rs.getString(15));
					dto.setDiscount(rs.getInt(16));
					dto.setAdmin(rs.getString(17));
					list.add(dto);
				} while (rs.next());

				return list;
			} else {
				System.out.println("selectSales => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectSales => :" + e.toString());
			return null;
		}

	}

}
