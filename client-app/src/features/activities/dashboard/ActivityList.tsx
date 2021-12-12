import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import Activity from "../../../app/models/activity";

interface IProps {
  activities: Activity[];
  selectActivity : (id : string) => void;
  handleDelete: (id: string) => void;
  submitting : boolean;
}

export default function ActivityList({ activities, selectActivity, handleDelete, submitting }: IProps) {
  const [target, setTarget] = useState('');
  function handleActivitiyDelete (e : SyntheticEvent<HTMLButtonElement>, id : string){
    setTarget(e.currentTarget.name);
    handleDelete(id);
  }
  return (
    <Segment>
      <Item.Group divided>
        {activities.map((activity) => (
          <Item key={activity.id}>
              <Item.Content>
                  <Item.Header as='a'>{activity.title}</Item.Header>
                  <Item.Meta>{activity.date}</Item.Meta>
                  <Item.Description>
                      <div>{activity.description}</div>
                      <div>{activity.city}, {activity.venue}</div>
                  </Item.Description>
                  <Item.Extra>
                      <Button onClick={() => selectActivity(activity.id)} floated='right' content='View' color='blue' />
                      <Button 
                        name={activity.id}
                        loading={submitting && target === activity.id} 
                        onClick={(e) => handleActivitiyDelete(e, activity.id)} 
                        floated='right' 
                        content='Delete' 
                        color='red' />
                      <Label basic content={activity.category} />
                  </Item.Extra>
              </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}
