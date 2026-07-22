# Whole-Lab Reservation Policy And Staff Workflow

Last reviewed: 2026-07-22

This is the internal operating procedure for teaching exercises, orientations, organized group activities, maintenance, and other approved activities that require coordinated or exclusive use of the Breakerspace instrument lab.

## Policy

* Whole-lab reservations are staff-mediated and are not available through the public self-service instrument calendars.
* Requests must arrive at `dmse-breakerspace@mit.edu` at least one week in advance. Encourage earlier planning for recurring sessions, large groups, multi-instrument activities, or work requiring staff support, training, access changes, or sample review.
* A request is not a reservation until Breakerspace staff have reviewed it and sent written confirmation.
* Approval depends on existing reservations, staffing, safety, access, the proposed activity, and whether exclusive use is actually necessary.
* Routine instrument use and individual project work remain subject to normal instrument reservations.
* Include setup and cleanup in the blocked period. Add additional buffer when room reset, sample staging, or equipment changes require it.

## Information Required From The Organizer

1. Course, program, or activity name.
2. Requested date and full time range, including setup and cleanup.
3. Expected attendance.
4. Instruments and parts of the lab involved.
5. Responsible instructor or organizer and participating teaching staff.
6. Participant training and access status.
7. Samples, hazards, unusual workflows, and staff-support needs.
8. Alternative dates or times when possible.

## Scheduling Workflow

1. Acknowledge the request and collect any missing information.
2. Check every affected instrument calendar for existing reservations, as well as other teaching, maintenance, and staffing commitments.
3. Resolve conflicts before approval. Do not displace an existing user without direct staff coordination and notice.
4. Confirm the activity, staffing model, trained operators, sample compatibility, room capacity, and setup or reset requirements.
5. Add the teaching activity or closure to the appropriate shared calendar so staff and participants can see the lab commitment.
6. In the Spaces/Seats booking layer, create staff-controlled blocks or administrative reservations for every affected instrument for the complete interval. Until a tested LibCal configuration proves otherwise, do not assume that assigning an Event to the room automatically closes its instrument seats.
7. Check the signed-out public reservation view for every affected instrument. The reserved interval must be unavailable to ordinary users before the organizer receives confirmation.
8. Send written confirmation stating the approved date and time, setup access, responsible staff contacts, participant preparation, and any conditions.
9. If the activity changes or is canceled, update both the shared event and every instrument block, then verify the public grids again.

## LibCal Configuration To Verify

LibCal publicly presents Events and Spaces/Seats as distinct functions. Confirm with the MIT LibCal administrator or Springshare Support whether this site supports any tested parent-room, linked-resource, or bulk-blocking behavior that can close all instrument seats from one staff action.

Questions to test:

* Does associating a LibCal Event with the Breakerspace room affect Spaces/Seats availability at all?
* Can the whole lab be represented as a parent space whose staff booking blocks all nested instrument seats?
* Is there a staff-only bulk block, availability exception, or recurring closure that can apply to all instruments for a partial day?
* Can a single administrative booking reserve multiple instrument resources without sending misleading user confirmations?
* How are existing bookings surfaced when a staff block overlaps them?

Keep the separate event-plus-instrument-block workflow until the public booking grids have been tested and a simpler configuration is proven reliable.
