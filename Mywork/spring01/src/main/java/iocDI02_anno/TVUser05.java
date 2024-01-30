package iocDI02_anno;

import org.springframework.context.support.AbstractApplicationContext;
import org.springframework.context.support.GenericXmlApplicationContext;
import org.springframework.stereotype.Component;


//** Annotation, @, 애너테이션
//=> 컴파일러에게 알려줌 (지시어)

//** @ Annotation 애너테이션 활용방법 *********************

//1. xml 에 context 네임스페이스 추가 [NameSpaces] 이용
//=> Component-scan 설정  : 
//<context:component-scan base-package="d0714.iocEx05" />
//  
//2. 소스코드 
//=> import 확인 : org.springframework.context.support.*;
//=> 생성을 원하는 TV 클래스 위에 @Component("tv") 설정

//=> @Component("tv") 
//<bean ....> </bean> -> xml
//new 생성자() -> Java Code

//3.Test : 오류 메시지 확인 하기
//=> @ Test1 생성 -> <bean ... />
//=> @ Test2 id명 미 지정(둘다 beanName 없이) 
//=> ...NoSuchBeanDefinitionException: 
//           No bean named 'tv' is defined ....
//=> @ Test3 id명 중복되는 경우 (둘다 beanname  ("tv") 지정 )  
//=> id는 프로젝트 전체! 에서 유일해야 한다.
//=> ...annotation.ConflictingBeanDefinitionException: ....
//  ...non-compatible bean definition of same name and class ...


interface TV {
	void powerOn();

	void powerOff();

	void volumeUp();

	void volumeDown();
}

//@Component("tv")
class SsTVi implements TV {

	public SsTVi() {
		System.out.println("~~ SsTvi 기본생성자 ~~ ");
	}

	public void powerOff() {
		System.out.println("~~ SsTVi powerOff ~~");
	}

	public void powerOn() {
		System.out.println("~~ SsTVi powerOn ~~");
	}

	public void volumeDown() {
		System.out.println("~~ SsTVi volumeDown ~~");
	}

	public void volumeUp() {
		System.out.println("~~ SsTVi volumeUp ~~");
	}
}

// 컴포넌트 붙여주면 시작과 동시에 객체 생성
// 스프링 컨테이너처럼 객체를 생성해주는 모습이다.
//@Component("ltv")
class LgTVi implements TV {

	public LgTVi() {
		System.out.println("~~ LgTvi 기본생성자 ~~ ");
	}

	public void powerOff() {
		System.out.println("~~ LgTVi powerOff ~~");
	}

	public void powerOn() {
		System.out.println("~~ LgTVi powerOn ~~");
	}

	public void volumeDown() {
		System.out.println("~~ LgTVi volumeDown ~~");
	}

	public void volumeUp() {
		System.out.println("~~ LgTVi volumeUp ~~");
	}
}

public class TVUser05 {

	public static void main(String[] args) {
		
		// 1. BeanFactory(스프링 컨테이너) 생성
		AbstractApplicationContext sc = new 
				GenericXmlApplicationContext("iocDI02_anno/app05.xml");
		// => 설정화일(xml구문_요구사항 목록) 을 매개변수로 전달
		// => GenericXmlApplicationContext("app02.xml");
		// xml 문을 "src/main/resources" 에 두면 패키지는 생략가능

		
		// 2. 필요한 객체를 전달받고 서비스 실행
		// => 어노테이션 없다면 : NoSuchBeanDefinitionException 발생
		// => 어노테이션 중복시 : ConflictingBeanDefinitionException 발생
		// => 어노테이션(컴포넌트)를 지정해주면 객체 생성 자체는 무조건 되고,
		//    그 후에 해당하는 어노테이션 id를 찾게된다.
		//    매칭되는 id가 없다해도 생성자체는 되는 모습을 볼 수 있다.
		TV tv = (TV) sc.getBean("tv");
		if (tv != null) {
			tv.powerOn();
			tv.volumeDown();
			tv.volumeUp();
			tv.powerOff();
		} else
			System.out.println("** TV를 선택하지 않았습니다. **");
		System.out.println();
		System.err.println("** Program 정상 종료 **");
		
		
		sc.close();
	} // main

} // class
