module.exports = `

    input FilmCategoryInput { 
		film_id: Int,
		category_id: Int,
		last_update: String,
	}

    type Query { 
		FilmCategoryList(where: String, limit: Int, offset: Int, sort: String): [FilmCategory]
		FilmCategory(id:String!): FilmCategory
		FilmCategoryExists(id: String!): Boolean
		FilmCategoryFindOne(where: String!): FilmCategory
		FilmCategoryCount(where: String!): Int
		FilmCategoryDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [FilmCategory]
		FilmCategoryGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [FilmCategoryGroupBy]
		FilmCategoryAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [FilmCategoryAggregate]
		FilmCategoryDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		FilmCategoryCreate(data:FilmCategoryInput): FilmCategory
		FilmCategoryUpdate(id:String,data:FilmCategoryInput): FilmCategory
		FilmCategoryDelete(id:String): FilmCategory
		FilmCategoryCreateBulk(data: [FilmCategoryInput]): [Int]
		FilmCategoryUpdateBulk(data: [FilmCategoryInput]): [Int]
		FilmCategoryDeleteBulk(data: [FilmCategoryInput]): [Int]
	},


    type FilmCategory { 
		film_id: Int,
		category_id: Int,
		last_update: String,

		Film(id:String): Film
		Category(id:String): Category
	}
type FilmCategoryGroupBy { 
		film_id: Int,
		category_id: Int,
		last_update: String,
		count: Int
	}
type FilmCategoryAggregate { 
		film_id: Int,
		category_id: Int,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;