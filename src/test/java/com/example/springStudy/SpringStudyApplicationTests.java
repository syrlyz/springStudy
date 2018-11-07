package com.example.springStudy;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.util.FileCopyUtils;

import java.io.File;
import java.io.IOException;

@RunWith(SpringRunner.class)
@SpringBootTest
public class SpringStudyApplicationTests {

	@Test
	public void contextLoads() {
	}

	@Value("${web.upload-path}")
	private String path;

	@Test
	public void  upload() throws IOException {
		File f = new File("D:\\code\\github\\springStudy\\README.md");
		FileCopyUtils.copy(f,new File(path+"\\read.md"));
	}
}
