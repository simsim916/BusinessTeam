package com.main.tomatoFarm.model;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.main.tomatoFarm.domain.KeywordDTO;

@Repository
public class KeywordDAO {

	private static Connection cn = DBConnection.getConnection();
	private static PreparedStatement pst;
	private static ResultSet rs;
	private static String sql;

	public int updateKeywordCnt(KeywordDTO dto) {
		sql = "select * from search where keyword =" + dto.getKeyword();

		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();

			if (rs.next()) {
				KeywordDTO object = new KeywordDTO();
				object.setKeyword(rs.getString(1));
				object.setCnt(rs.getInt(2));

				sql = "update search set cnt =" + object.getCnt() + 1 + "where keyword=" + object.getKeyword();
				pst = cn.prepareStatement(sql);

				return pst.executeUpdate();

			} else {
				sql = "insert into search(keyword) values(" + dto.getKeyword() + ")";
				pst = cn.prepareStatement(sql);

				return pst.executeUpdate();
			}

		} catch (Exception e) {
			System.out.println("updateKeywordCnt Error => " + e.toString());
			return 0;
		}

	}

	public List<KeywordDTO> selectKeywordList() {
		sql = "select * from search orderby cnt desc";
		try {
			pst = cn.prepareStatement(sql);
			rs = pst.executeQuery();

			List<KeywordDTO> list = new ArrayList<KeywordDTO>();
			if (rs.next()) {
				do {
					KeywordDTO dto = new KeywordDTO();

					dto.setKeyword(rs.getString(1));
					dto.setCnt(rs.getInt(2));

					list.add(dto);
				} while (rs.next());

				return list;
			} else {
				System.out.println("selectKeywordList => 출력할 데이터가 없다");
				return null;
			}
		} catch (Exception e) {
			System.out.println("selectKeywordList => :" + e.toString());
			return null;
		}

	}

}
