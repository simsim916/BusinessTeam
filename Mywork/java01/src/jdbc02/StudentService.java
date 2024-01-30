package jdbc02;

import java.util.List;

//** Service
//=> Controller 요청에 해당하는 DAO 의 메서드를 실행
//=> Controller 와 DAO의 중간에 위치하면서
//	 이 둘의 의존성을 낮추어줌.
public class StudentService {

	// ** 전역변수 정의

	StudentDAO dao = new StudentDAO();

	// ** selectList
	public List<StudentDTO> selectList() {
		return dao.selectList();
	}

	// ** selectOne
	public StudentDTO selectOne(int sno) {
		return dao.selectOne(sno);
	}
	
	public void selectOne(StudentDTO dto) {
		dao.selectOne(dto);
	}
	
	

	// ** insert
	public int insert(StudentDTO dto) {
		
		return dao.insert(dto);
	}

//	public int insert(StudentDTO dto) {
//
//		return dao.insert(dto);
//	}

	// ** update
	public int update(StudentDTO dto) {
		return dao.update(dto);
	}

	// ** delete
	public int delete(int sno) {
		return dao.delete(sno);
	}
	


} // class
