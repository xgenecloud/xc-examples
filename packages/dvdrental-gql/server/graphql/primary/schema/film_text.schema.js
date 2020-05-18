module.exports = `

    input FilmTextInput { 
		film_id: Int,
		title: String,
		description: String,
	}

    type Query { 
		FilmTextList(where: String, limit: Int, offset: Int, sort: String): [FilmText]
		FilmText(id:String!): FilmText
		FilmTextExists(id: String!): Boolean
		FilmTextFindOne(where: String!): FilmText
		FilmTextCount(where: String!): Int
		FilmTextDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [FilmText]
		FilmTextGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [FilmTextGroupBy]
		FilmTextAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [FilmTextAggregate]
		FilmTextDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		FilmTextCreate(data:FilmTextInput): FilmText
		FilmTextUpdate(id:String,data:FilmTextInput): FilmText
		FilmTextDelete(id:String): FilmText
		FilmTextCreateBulk(data: [FilmTextInput]): [Int]
		FilmTextUpdateBulk(data: [FilmTextInput]): [Int]
		FilmTextDeleteBulk(data: [FilmTextInput]): [Int]
	},


    type FilmText { 
		film_id: Int,
		title: String,
		description: String,
	}
type FilmTextGroupBy { 
		film_id: Int,
		title: String,
		description: String,
		count: Int
	}
type FilmTextAggregate { 
		film_id: Int,
		title: String,
		description: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;