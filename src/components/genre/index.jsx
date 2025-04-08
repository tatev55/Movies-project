const genreMovies = {
    "Action": "💥",
    "Adventure": "🌍",
    "Animation": "🎬",
    "Comedy": "😆",
    "Drama": "🎭",
    "Fantasy": "🧙‍♂️",
    "Horror": "👻",
    "Mystery": "🎩",
    "Romance": "❤️",
    "Sci-Fi": "🚀",
    "Thriller": "😱",
    "Documentary": "🎥",
    "Music": "🎶",
    "Musical": "🎶",
    "Crime": "🕵️‍♀️",
    "Family": "👨‍👩‍👧‍👦",
    "Historical": "🏰",
    "Western": "🤠",
    "Sport" : "⛳",
    "Talk-Show": "🍿",
    "Biography": "📖",
    "Short": "⌛️",
    "Reality-TV": "🙋‍♀️"
  }
  

export const Genre = ({genre})=>{
    return (
        <span style =  {{ marginLeft: "5px", fontSize: "20px"}}>
            {genreMovies[genre] ?genreMovies[genre]  + " ": genre + ","}
            
        </span>
    )
}