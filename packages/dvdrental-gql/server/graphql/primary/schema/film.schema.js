module.exports = `

    input FilmInput { 
		film_id: Int,
		title: String,
		description: String,
		release_year: String,
		language_id: Int,
		original_language_id: Int,
		rental_duration: Int,
		rental_rate: Float,
		length: Int,
		replacement_cost: Float,
		rating: String,
		special_features: String,
		last_update: String,
	}

    type Query { 
		FilmList(where: String, limit: Int, offset: Int, sort: String): [Film]
		Film(id:String!): Film
		FilmExists(id: String!): Boolean
		FilmFindOne(where: String!): Film
		FilmCount(where: String!): Int
		FilmDistinct(columnName: String, where: String, limit: Int, offset: Int, sort: String): [Film]
		FilmGroupBy(fields: String, having: String, limit: Int, offset: Int, sort: String): [FilmGroupBy]
		FilmAggregate(columnName: String!, having: String, limit: Int, offset: Int, sort: String, func: String!): [FilmAggregate]
		FilmDistribution(min: Int, max: Int, step: Int, steps: String, columnName: String!): [distribution]
	}
,

    type Mutation { 
		FilmCreate(data:FilmInput): Film
		FilmUpdate(id:String,data:FilmInput): Film
		FilmDelete(id:String): Film
		FilmCreateBulk(data: [FilmInput]): [Int]
		FilmUpdateBulk(data: [FilmInput]): [Int]
		FilmDeleteBulk(data: [FilmInput]): [Int]
	},


    type Film { 
		film_id: Int,
		title: String,
		description: String,
		release_year: String,
		language_id: Int,
		original_language_id: Int,
		rental_duration: Int,
		rental_rate: Float,
		length: Int,
		replacement_cost: Float,
		rating: String,
		special_features: String,
		last_update: String,

		FilmActorList: [FilmActor]
		FilmActorCount: Int
		FilmCategoryList: [FilmCategory]
		FilmCategoryCount: Int
		InventoryList: [Inventory]
		InventoryCount: Int

		Language(id:String): Language
	}
type FilmGroupBy { 
		film_id: Int,
		title: String,
		description: String,
		release_year: String,
		language_id: Int,
		original_language_id: Int,
		rental_duration: Int,
		rental_rate: Float,
		length: Int,
		replacement_cost: Float,
		rating: String,
		special_features: String,
		last_update: String,
		count: Int
	}
type FilmAggregate { 
		film_id: Int,
		title: String,
		description: String,
		release_year: String,
		language_id: Int,
		original_language_id: Int,
		rental_duration: Int,
		rental_rate: Float,
		length: Int,
		replacement_cost: Float,
		rating: String,
		special_features: String,
		last_update: String,
		count: Int,
		avg: Float,
		min: Float,
		max: Int,
		sum: Float
	}


    
`;