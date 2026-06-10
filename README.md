# Work Activity Tracker

A lightweight browser-based application for logging, managing, and tracking work activities across projects. Built with pure HTML, CSS, and JavaScript, the application stores data locally in the browser and provides export/import functionality for backups and reporting.

## Overview

Work Activity Tracker helps individuals and teams maintain structured records of project activities, progress updates, and work notes. It offers a simple interface for recording daily work, monitoring project status, and reviewing historical activities.

The application requires no server, database, or internet connection. All files are fully self-contained and bundled for offline use, making it ideal for freelancers, developers, project managers, business owners, and internal teams.

---

## Features

### Activity Logging

Create and manage work activity records with:

* Project Name
* Activity Date
* Status Tracking
* Detailed Context / Notes with rich text formatting and inline image support

### Rich Text Editor

The Context / Notes field supports full inline formatting:

* Bold, Italic, Underline
* Bullet lists and numbered lists
* Hyperlink insertion
* Image upload and inline embedding
* Clear formatting

Images embedded in notes appear as thumbnails in the history table. Click any image to open it fullscreen in a lightbox overlay.

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

#### XLSX Export

Generate a formatted Excel `.xlsx` file with:

* Auto-fit column widths based on content
* Text wrap enabled on the Context / Notes column
* Bold header row
* Plain text context (HTML stripped for clean spreadsheet output)
* Powered by SheetJS (bundled offline — no CDN required)

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

| Technology           | Purpose                          |
| -------------------- | -------------------------------- |
| HTML5                | Structure                        |
| CSS3                 | User Interface Styling           |
| JavaScript (Vanilla) | Application Logic                |
| Local Storage API    | Data Persistence                 |
| SheetJS v0.18.5      | XLSX export (bundled offline)    |

SheetJS is bundled directly into `xlsx.full.min.js` — no CDN or internet connection required.

---

## Installation

### Option 1: Direct Usage

1. Download all project files into the **same folder**.
2. Open `index.html` in your web browser.
3. Start tracking activities immediately.

> !! All four files (`index.html`, `style.css`, `app.js`, `xlsx.full.min.js`) must stay in the same folder for the application to work correctly.

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
Export to Excel (XLSX)
```

to download activity records as a formatted `.xlsx` Excel file with auto-fit columns.

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
work-activity-tracker/
│
├── index.html            -  page structure and layout
├── style.css             -  all dark mode styles and CSS variables
├── app.js                -  all app logic (save, edit, delete, export, render)
├── xlsx.full.min.js      -  SheetJS library (bundled, fully offline)
├── LICENSE
└── README.md
```

All application logic is separated across files for easier maintenance. `app.js` is fully decoupled from `index.html`.

---

## Advantages

* Lightweight
* Fully Offline — no internet required
* Responsive Design
* Dark Mode UI
* Rich Text Notes with Image Support
* Easy Deployment
* No Database Required
* No Backend Required
* Fast Performance
* Secure Local Storage
* Backup & Restore Support
* Excel XLSX Export with Auto-fit Columns
* Separated, Maintainable Codebase

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
* Filtering by Status or Project
* Project Categories
* User Authentication
* Multi-User Support
* Cloud Synchronization
* PDF Export
* Reporting Dashboard
* Advanced Analytics
* Tags / Labels

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