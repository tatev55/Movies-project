import{ Card, CardContent, Typography} from "@mui/material"
import styles from "./index.module.css"

const PromptCard = ({ onSelect, text, icon }) => {
    return (
      <Card
        className={styles.promptCard}
        onClick={() => onSelect(text)}
        variant="outlined"
        sx = {{backgroundColor: "#1B1F3F"}}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "space-between",
            color: '#B9C1D5'
          }}
        >
          <Typography variant="body1">{text}</Typography>
          <span className={styles["promptCardIcon"]} >{icon}</span>
        </CardContent>
      </Card>
    );
  };

export default PromptCard;