const key  = import.meta.env.VITE_OMDB_API_KEY;
class OMDBApi {
    constructor(apiKey) {
      this.apiKey = apiKey;
      this.baseUrl = "https://www.omdbapi.com/";
    }
  
    async fetchByID(id) {
      try {
        const response = await fetch(
          `${this.baseUrl}?i=${id}&apikey=${this.apiKey}`
        );
        const data = await response.json();
        return {
          success: data.Response === "True",
          data,
          error: data.Response === "True" ? null : data.Error,
        };
      } catch (error) {
        return { success: false, data: null, error: error.message };
      }
    }
  
    async fetchMoviesBySearch(query, page ) {
      try {
        const response = await fetch(
          `${this.baseUrl}?s=${encodeURIComponent(query)}&page=${page}&apikey=${
            this.apiKey
          }`
        );
        const data = await response.json();
        return {
          success: data.Response === "True",
          data: data,
          error: data.Response === "True" ? null : data.Error,
        };
      } catch (error) {
        return { success: false, data: [], error: error.message };
      }
    }
  }
 
  export const omdbApi = new OMDBApi(key);





  