package com.example.demo.service;

import java.util.Random;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmailService {
	   private JavaMailSender emailSender;
	   
		public String createCode() {
			Random random = new Random();
			StringBuffer key = new StringBuffer();

			for (int i = 0; i < 8; i++) {
				int index = random.nextInt(4);

				switch (index) {
				case 0:
					key.append((char) ((int) random.nextInt(26) + 97));
					break;
				case 1:
					key.append((char) ((int) random.nextInt(26) + 65));
					break;
				default:
					key.append(random.nextInt(9));
				}
			}
			return key.toString();
		}
	   
	    public void sendMail(String id) throws MessagingException {
	        MimeMessage message = emailSender.createMimeMessage();
	        MimeMessageHelper helper = new MimeMessageHelper(message, false);
	        String code = createCode();
	        
	        System.out.println("===========================");
	        System.out.println(code);
	        System.out.println(id);
	        System.out.println("===========================");
	        //제목, 내용 설정
	        helper.setSubject("회원 가입 축하드립니다");
	        helper.setText("토마토팜 회원이 되신 걸 축하드립니다", false);
//	        helper.setText("<h2>토마토팜 회원이 되신 걸 축하드립니다</h2>", true);
//	        helper.setText("<div>"
//	        		+ "토마토팜 회원이 되신 걸 축하드립니다"
//	        		+ "<span>" + code + "</span>"
//	        		+ "</div>", true);

	        // 참조자 설정
	        helper.setCc("tomatofarm01234@gmail.com");
	        
	        // 발신자 설정(연동된 구글 계정으로 고정)
	        helper.setFrom("tomatofarm01234@gmail.com");

	        // 로컬 첨부 파일 설정
//	        File file = new File("파일 경로");
//	        FileItem fileItem = new DiskFileItem("mainFile", Files.probeContentType(file.toPath()), false, file.getName(), (int) file.length(), file.getParentFile());
//	        InputStream input = new FileInputStream(file);
//	        OutputStream os = fileItem.getOutputStream();
//	        IOUtils.copy(input, os);
//	        MultipartFile multipartFile = new CommonsMultipartFile(fileItem);
//	        String fileName = StringUtils.cleanPath(multipartFile.getOriginalFilename());
//	        helper.addAttachment(MimeUtility.encodeText(fileName, "UTF-8", "B"), new ByteArrayResource(IOUtils.toByteArray(multipartFile.getInputStream())));
	        
	         // AWS S3 첨부 파일 설정
//	        File file = new File("loginbg.jpeg");
//	        FileUtils.copyURLToFile(new URL("https://s3.ap-northeast-2.amazonaws.com/cloudtechflow.com/image/image/image.jpeg"), file);
//	        FileItem fileItem = new DiskFileItem("mainFile", Files.probeContentType(file.toPath()), false, file.getName(), (int) file.length(), file.getParentFile());
//	        InputStream input = new FileInputStream(file);
//	        OutputStream os = fileItem.getOutputStream();
//	        IOUtils.copy(input, os);
//	        MultipartFile multipartFile = new CommonsMultipartFile(fileItem);
//	        List<MultipartFile> multipartFileList = Arrays.asList(multipartFile);

	        //메일 전송(setTo 파라미터에 문자열 리스트를 넘기면 한번에 여러명에게 전송 가능)
	        helper.setTo(id);
	        emailSender.send(message);
	    }
	    
	    
}
