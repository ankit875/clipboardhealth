# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Based on the information given, I'll breakdown the ticket into following subtasks:

1. Create a table to store agent custom ids.
2. Create a user interface/ api endpoint to allow facilities to Add/update custom id for agents.
3. Return agent custom ID as part of `getShiftsByFacility` method resonse.
4. Modify `generateReport` fuction to use **Custom ID** field.

### Task 1
**Name**: Create a table to store agent custom ids.
**Effort Estimates**: 10 hrs
**Implementation Details**: Create a new table named `Agent_Custom_Details` having following fields:
 - `internal_id`: internal database id for `Agent` table.
 - `facility_id`: internal database if from `facilty` table.
 - `custom_id`: Id added by facility for respective agent.

### Task 2
**Name**: Create User interface / API endpoint to add/update custom Id.
**Effort Estimates**: 18 hrs
**Implementation Details**: Create a user interface or api endpoint that allows facilities to add/update custom id for agents. 
Very basic implementation can be fetching all agents from table and providing a list view to select agent. select agent from list and add/update new id in text field.
above user interface should be in authenticated view so we have facility id available.

### Task 3
**Name**: Modify `getShiftsByFacility` to return `custom_id`
**Effort Estimates**: 4 hrs
**Implementation Details**: Add `custom_id` field as part of agent metadata response.


### Task 4
**Name**: Modify `generateReport` to use `custom_id`
**Effort Estimates**: 4 hrs
**Implementation Details**: Use `custom_id` field.

