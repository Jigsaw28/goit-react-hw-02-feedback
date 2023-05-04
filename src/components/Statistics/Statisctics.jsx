import { Stat, Text } from "./Statistics.styled"

export const Statistics = ({ good, neutral, bad, total, positivePercent }) => {
    return (
      <Stat>
          <Text>Good: {good}</Text>
          <Text>Neutral: {neutral}</Text>
          <Text>Bad: {bad}</Text>
          <Text>Total: {total}</Text>
          <Text>Positive feedback: {positivePercent}%</Text>
        </Stat>  
    )
}