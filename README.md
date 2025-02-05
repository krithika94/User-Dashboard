
# Users & Posts Dashboard

This is a Next.js application that fetches and displays a list of user profiles and their related posts. Users can search, sort, and paginate through the data. The app integrates with the JSONPlaceholder API to simulate real user and post data.


## Features

Responsive Design: Optimized for mobile, tablet, and desktop screens.
- User Profiles: Display a list of user profiles with details like name, email, address, and company.
- Posts: Display posts authored by a selected user.
- Search: Filter user profiles by name or email.
- Sorting: Sort user profiles by name or company.
- Pagination: Paginate through posts for a selected user.
- Responsive Design: Optimized for mobile, tablet, and desktop screens.


## Setup and Run Locally

Clone the project

```bash
  git clone https://github.com/krithika94/User-Dashboard.git
```

Go to the project directory

```bash
  cd user-dashboard
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Open the app:

```bash
Visit http://localhost:3000 in your browser to view the app.
```


## Approach and Assumptions

  ### Approach
  
  #### API Integration:

Used the JSONPlaceholder API to fetch user and post data.

Implemented React Query for data fetching, caching, and state management.

#### Search and Sorting:

Added a search feature to filter users by name or email.

Implemented sorting to order users by name or company.

#### Pagination:

Added pagination for posts to handle large datasets.

#### Responsive Design:

Used Tailwind CSS for styling and responsive design.

Ensured the layout adapts to mobile, tablet, and desktop screens.

#### Error Handling:

Implemented error handling for API failures and edge cases (e.g., no users or posts found).

### Assumptions
- The JSONPlaceholder API is reliable and always returns the expected data structure.

- The app is designed for internal use, so advanced error handling (e.g., retries) is not implemented.

- The search and sorting features are client-side only, as the API does not support server-side filtering or sorting.


## Testing the API Integrations

To test the API integrations:

#### Fetch Users:

Verify that the list of users is displayed correctly.

Check that the search feature filters users by name or email.

#### Fetch Posts:

Select a user and verify that their posts are displayed.

#### Error Handling:

Simulate an API failure (e.g., by modifying the API URL) and verify that an error message is displayed.

#### Responsive Design:

Test the app on different screen sizes (mobile, tablet, desktop) to ensure the layout adapts correctly.
## Additional Notes

### Design

Tailwind CSS: Used for styling and responsive design.

DaisyUI: Used for pre-built UI components (e.g., buttons, cards).

Focus Management: Removed focus outlines for mouse interactions while preserving accessibility for keyboard users.

### Functionality
Search and Sort:

The search feature filters users dynamically as the user types.

The sorting feature updates the user list immediately when a new criteria is selected.

### Pagination:

Pagination is implemented for posts to improve performance and usability.

### Loading States:

Skeleton loaders are displayed while data is being fetched.

### Error States:

User-friendly error messages are displayed for API failures.
## Tech Stack

Next.js, React Query, Tailwind CSS, DaisyUI, TypeScript 





