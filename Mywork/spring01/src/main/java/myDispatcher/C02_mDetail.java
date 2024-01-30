package myDispatcher;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import service.MemberService;

public class C02_mDetail implements MyController{

	@Override
	public String handleRequest(HttpServletRequest request, HttpServletResponse response) {
		MemberService service = new MemberService();
		//request.setAttribute("dto", service.selectOne((String)request.getSession().getAttribute("sid")));
		request.setAttribute("dto", service.selectOne("test") );
		return "member/memberDetail";
	}

}
