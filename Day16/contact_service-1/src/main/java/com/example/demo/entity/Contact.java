package com.example.demo.entity;

public class Contact {
	private int cId;
	private String name;
	private String mobileNo;
	private String emailId;
	private String message;
	public int getcId() {
		return cId;
	}
	public void setcId(int cId) {
		this.cId = cId;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getMobileNo() {
		return mobileNo;
	}
	public void setMobileNo(String mobileNo) {
		this.mobileNo = mobileNo;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	public Contact(int cId, String name, String mobileNo, String emailId, String message) {
		super();
		this.cId = cId;
		this.name = name;
		this.mobileNo = mobileNo;
		this.emailId = emailId;
		this.message = message;
	}
	public Contact()
	{
		
	}


}
