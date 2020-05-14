module.exports = `

    
  type Query { 
		Me: User
	}


  type Mutation { 
    SignIn(data:UserInput): User
    SignUp(data:UserInput): User
    SignOut: Boolean
    PasswordForgot(email:String):Boolean
    PasswordReset(password: String, tokenId: String): Boolean
    EmailValidate(tokenId: String):Boolean
	}
	
	    input UserInput {
		id: Int,
		email: String,
		password: String,
		salt: String,
		firstname: String,
		lastname: String,
		username: String,
		roles: String,
		created_at: String,
		updated_at: String,
		provider: String,
		provider_data: String,
		provider_data_plus: String,
		provider_ids: String,
		reset_password_token: String,
		reset_password_expires: String,
		email_verification_token: String,
		email_verified: Int,
	}
	
	    type User {
		id: Int,
		email: String,
		password: String,
		salt: String,
		firstname: String,
		lastname: String,
		username: String,
		roles: String,
		created_at: String,
		updated_at: String,
		provider: String,
		provider_data: String,
		provider_data_plus: String,
		provider_ids: String,
		reset_password_token: String,
		reset_password_expires: String,
		email_verification_token: String,
		email_verified: Int,
	}


    
`;