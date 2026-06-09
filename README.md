# Work Activity Tracker

A lightweight browser-based application for logging, managing, and tracking work activities across projects. Built with pure HTML, CSS, and JavaScript, the application stores data locally in the browser and provides export/import functionality for backups and reporting.

## Overview

Work Activity Tracker helps individuals and teams maintain structured records of project activities, progress updates, and work notes. It offers a simple interface for recording daily work, monitoring project status, and reviewing historical activities.

The application requires no server, database, or external dependencies, making it ideal for freelancers, developers, project managers, business owners, and internal teams.

---

## Features

### Activity Logging

Create and manage work activity records with:

* Project Name
* Activity Date
* Status Tracking
* Detailed Context / Notes

### Status Management

Supported activity statuses:

* In Progress
* Pending
* Done / Complete
* Hold / Cancelled

### Dashboard Analytics

View real-time statistics including:

* Total Activities
* In Progress Activities
* Pending Activities
* Completed Activities
* Hold / Cancelled Activities

### Activity History

Review all activity records in a structured table containing:

* Project
* Status
* Date
* Context / Notes
* Action Controls

### Record Management

* Create new activities
* Edit existing activities
* Delete activities
* Automatic timestamp tracking

### Local Data Storage

All records are stored using browser Local Storage.

Benefits include:

* No backend required
* No database setup
* Fast loading
* Offline capability
* Simple deployment

### Data Export

Export activity records to:

#### CSV Export

Generate Excel-compatible CSV files for:

* Reporting
* Auditing
* Data analysis
* Sharing with stakeholders

#### JSON Backup

Create complete backups of all activity data.

### Data Import

Restore previously exported JSON backups with a single click.

---

## Screenshots

### Main Features

* Activity Logging Form
* Dashboard Statistics
* Activity History Table
* Export & Backup Tools

---

## Technology Stack

| Technology           | Purpose                |
| -------------------- | ---------------------- |
| HTML5                | Structure              |
| CSS3                 | User Interface Styling |
| JavaScript (Vanilla) | Application Logic      |
| Local Storage API    | Data Persistence       |

No frameworks or third-party libraries are required.

---

## Installation

### Option 1: Direct Usage

1. Download the project files.
2. Open `index.html` in your web browser.
3. Start tracking activities immediately.

### Option 2: Host Online

Upload the HTML file to:

* GitHub Pages
* Netlify
* Vercel
* Any static web hosting provider

No additional configuration is required.

---

## Usage

### Create Activity

1. Enter a project name.
2. Select a status.
3. Choose a date.
4. Add context or notes.
5. Click **Save Activity**.

### Update Activity

1. Click **Edit**.
2. Modify the information.
3. Click **Update Activity**.

### Delete Activity

1. Click **Delete**.
2. Confirm the deletion.

### Export Activities

Click:

```text
Export to Excel (CSV)
```

to download activity records as a spreadsheet-compatible CSV file.

### Backup Data

Click:

```text
Backup JSON
```

to generate a full backup file.

### Restore Backup

1. Click **Restore JSON**.
2. Select a backup file.
3. Confirm restoration.

---

## Data Structure

Each activity record is stored in the following format:

```json
{
  "id": 1712345678901,
  "project": "Website Redesign",
  "status": "In Progress",
  "context": "Updated homepage layout and navigation.",
  "date": "2025-01-01",
  "createdAt": "2025-01-01T08:00:00Z",
  "updatedAt": "2025-01-01T08:00:00Z"
}
```

---

## Status Definitions

| Status           | Description                          |
| ---------------- | ------------------------------------ |
| In Progress      | Work is actively being performed     |
| Pending          | Awaiting action, review, or approval |
| Done / Complete  | Work has been completed successfully |
| Hold / Cancelled | Work has been paused or cancelled    |

---

## Project Structure

```text
project/
│
└── index.html
```

The entire application is self-contained within a single HTML file.

---

## Advantages

* Lightweight
* Responsive Design
* Offline Support
* Easy Deployment
* No Database Required
* No Backend Required
* Fast Performance
* Secure Local Storage
* Backup & Restore Support
* Excel-Compatible Export

---

## Use Cases

### Freelancers

Track client work and project progress.

### Developers

Maintain development logs and feature implementation records.

### Project Managers

Monitor project updates and task completion status.

### Business Owners

Maintain operational activity records and reporting history.

### Teams

Document daily work activities and project milestones.

---

## Future Improvements

Potential enhancements for future versions:

* Search Functionality
* Filtering by Status
* Project Categories
* User Authentication
* Multi-User Support
* Cloud Synchronization
* PDF Export
* Activity Attachments
* Reporting Dashboard
* Advanced Analytics
* Dark/Light Theme Switcher

---

## Browser Support

Compatible with:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Brave
* Opera

---

## License

MIT License

Permission is hereby granted to use, modify, distribute, and maintain this project for personal or commercial purposes.

---

## Author

Developed as a lightweight productivity and work-tracking solution for managing project activities and maintaining historical work records.
