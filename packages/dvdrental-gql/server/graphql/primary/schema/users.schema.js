module.exports = `

    input UsersInput { 
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

    type Query { 
		UsersList(where: String, limit: Int, offset: Int, sort: String): [Users]
		UsersRead(id:String): Users
		UsersExists(id: String): Boolean
		UsersFindOne(where: String): Users
		UsersCount(where: String): Int
		UsersDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Users]
		UsersGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [UsersGroupBy]
		UsersAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [UsersAggregate]
		UsersDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		UsersCreate(data:UsersInput): Users
		UsersUpdate(id:String,data:UsersInput): Users
		UsersDelete(id:String): Users
		UsersCreateBulk(data: [UsersInput]): [Int]
		UsersUpdateBulk(data: [UsersInput]): [Int]
		UsersDeleteBulk(data: [UsersInput]): [Int]
	},


    type Users { 
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
type UsersGroupBy { 
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
		count: Int
	}
type UsersAggregate { 
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
		count: Int,
		avg: Int,
		min: Int,
		max: Int,
		sum: Int
	}


    
`;