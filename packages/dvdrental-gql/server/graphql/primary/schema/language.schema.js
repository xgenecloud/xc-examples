module.exports = `

    input LanguageInput { 
		language_id: Int,
		name: String,
		last_update: String,
	}

    type Query { 
		LanguageList(where: String, limit: Int, offset: Int, sort: String): [Language]
		Language(id:String!): Language
		LanguageExists(id: String!): Boolean
		LanguageFindOne(where: String!): Language
		LanguageCount(where: String!): Int
		LanguageDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Language]
		LanguageGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [LanguageGroupBy]
		LanguageAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [LanguageAggregate]
		LanguageDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		LanguageCreate(data:LanguageInput): Language
		LanguageUpdate(id:String,data:LanguageInput): Language
		LanguageDelete(id:String): Language
		LanguageCreateBulk(data: [LanguageInput]): [Int]
		LanguageUpdateBulk(data: [LanguageInput]): [Int]
		LanguageDeleteBulk(data: [LanguageInput]): [Int]
	},


    type Language { 
		language_id: Int,
		name: String,
		last_update: String,

		FilmList: [Film]
		FilmCount: Int
	}
type LanguageGroupBy { 
		language_id: Int,
		name: String,
		last_update: String,
		count: Int
	}
type LanguageAggregate { 
		language_id: Int,
		name: String,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;