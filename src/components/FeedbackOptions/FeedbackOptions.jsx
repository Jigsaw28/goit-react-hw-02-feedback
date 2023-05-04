import { ButtonGroup, ListItem, Button } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonGroup>
      {options.map(option => {
        return (
          <ListItem key={option}>
            <Button type="button" onClick={onLeaveFeedback} name={option}>{option}</Button>
          </ListItem>
        );
      })}
    </ButtonGroup>
  );
};
