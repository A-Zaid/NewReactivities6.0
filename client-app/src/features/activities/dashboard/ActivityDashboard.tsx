import React from "react";
import { Grid } from "semantic-ui-react";
import Activity from "../../../app/models/activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface IProps {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  editMode: boolean;
  openForm: (id: string) => void;
  closeForm: () => void;
  handleCreateOrEdit:(activity: Activity) => void;
  handleDelete: (id: string) => void;
  submitting : boolean;
}
export default function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  editMode,
  openForm,
  closeForm,
  handleCreateOrEdit,
  handleDelete,
  submitting
}: IProps) {
  return (
    <Grid>
      <Grid.Column width="10">
        <ActivityList 
          activities={activities} 
          selectActivity={selectActivity} 
          handleDelete={handleDelete} 
          submitting = {submitting}
          />
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            cancelSelectedActivity={cancelSelectActivity}
            openForm={openForm}
          />
        )}
        {editMode && 
        <ActivityForm 
          closeForm={closeForm} 
          activity={selectedActivity} 
          handleCreateOrEdit={handleCreateOrEdit}
          submitting = {submitting}
          />
        }
      </Grid.Column>
    </Grid>
  );
}
