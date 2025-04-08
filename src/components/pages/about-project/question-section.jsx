import React from 'react';
import QuestionBlock from './question-block';
import { Box, Typography} from '@mui/material';

const QuestionsSection = () => {
  return (
    <Box sx={{ padding: 3 , width: '80%', margin: "20px auto", }}>
      <QuestionBlock
        question={<Typography variant='body1' sx = {{fontSize: '20px', fontWeight: "bold"}}>"What can I do in the 'Search Movies' tab?"</Typography>}
        answer="The 'Search Movies' tab allows you to explore a wide range of movies. You can search for movies by title, genre, or actor, and find detailed information such as descriptions, ratings, and release years."
      />
      <QuestionBlock
        question={<Typography variant='body1' sx = {{fontSize: '20px', fontWeight: "bold"}}>"What is the 'My Movies List' tab?"</Typography>}
        answer="The 'My Movies List' tab is where you can save movies you're interested in watching. You can create a personalized list of movies to watch later, track your favorites, and keep everything organized in one place."
      />
      <QuestionBlock
        question={<Typography variant='body1' sx = {{fontSize: '20px', fontWeight: "bold"}}>"What is the 'Quiz' tab for?"</Typography>}
        answer="The 'Quiz' tab offers fun and interactive movie trivia quizzes. Test your knowledge of movies, directors, actors, and more. Challenge yourself or compete with friends to see who knows the most about films."
      />
      <QuestionBlock
        question={<Typography variant='body1' sx = {{fontSize: '20px', fontWeight: "bold"}}>"How do I add movies to my 'My Movies List'?"</Typography>}
        answer="Simply click the 'Bookmark' button on any movie page to add it to your 'My Movies List.' You can easily access and manage your list from the 'My Movies List' tab."
      />
      <QuestionBlock
        question={<Typography variant='body1' sx = {{fontSize: '20px', fontWeight: "bold"}}>"Where can I find more details about a movie?"</Typography>}
        answer="Click on any movie card from the 'Search Movies' tab, and you'll be able to view detailed information such as the plot summary, cast, release date, and more."
      />
      <QuestionBlock
        question={<Typography variant='body1' sx={{ fontSize: '20px', fontWeight: "bold" }}>"What is the 'AI' tab for?"</Typography>}
        answer="The 'AI' tab is designed to help you choose a movie if you're not sure what to watch. It uses AI to recommend movies based on your preferences, mood, or genre interests. Just tell the AI what you're in the mood for, and it will suggest movies tailored to you!"
      />
    </Box>
  );
};

export default QuestionsSection;
