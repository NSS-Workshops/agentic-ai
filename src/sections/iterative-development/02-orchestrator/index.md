## Flow Orchestrator Mode: Your AI Workflow Conductor

In RooCode, the **Flow Orchestrator** mode acts as your intelligent workflow conductor, seamlessly coordinating specialized AI modes to tackle complex development tasks. Instead of manually switching between **Architect**, **Code**, **Debug**, and **Ask** modes, Flow Orchestrator automatically determines the most appropriate mode for each step of your task and manages the transitions. This intelligent orchestration significantly reduces cognitive overhead, allowing you to focus on your development goals while RooFlow handles the intricate workflow management behind the scenes.

Flow Orchestrator is designed to streamline multi-phase projects, ensuring that planning, implementation, testing, and documentation are executed efficiently and cohesively. It leverages the strengths of each specialized mode, creating a powerful, integrated development experience.

### Orchestrating a Feature Development Workflow

Imagine you need to implement a new user profile management feature, including data storage, API endpoints, and a user interface. Here's how you might instruct Flow Orchestrator, and how it would switch between modes:

**Developer Prompt to Flow Orchestrator:**

"Orchestrate the complete development of a 'User Profile Management' feature. This includes designing the database schema and API, implementing the backend endpoints, creating the frontend UI components, and ensuring all new code is thoroughly tested and any issues are resolved. Document the entire process."

**Flow Orchestrator's Workflow (Mode Switching Example):**

1.  **Initial Phase: Planning and Design (Flow Architect Mode)**
    *   **Orchestrator Action:** Switches to **Flow Architect** mode.
    *   **Architect Task:** Designs the database schema for user profiles (e.g., `users` table with fields like `id`, `username`, `email`, `profile_picture_url`). Defines the RESTful API endpoints for CRUD operations (e.g., `GET /users/{id}`, `POST /users`, `PUT /users/{id}`, `DELETE /users/{id}`). Creates documentation for the schema and API contract in a new file, e.g., [`USER_PROFILE_DESIGN.md`](USER_PROFILE_DESIGN.md).
    *   **Output:** Detailed design document, API contract, and initial architectural decisions.

2.  **Implementation Phase: Backend Development (Flow Code Mode)**
    *   **Orchestrator Action:** Transitions to **Flow Code** mode, using the design from Architect mode.
    *   **Code Task:** Implements the backend logic for the user profile API endpoints. This involves creating models, controllers, and service layers to interact with the database. Generates code for data validation and error handling.
    *   **Output:** Functional backend code for user profile management.

3.  **Implementation Phase: Frontend Development (Flow Code Mode)**
    *   **Orchestrator Action:** Remains in **Flow Code** mode.
    *   **Code Task:** Develops the necessary React components for the user interface, such as a `UserProfileForm` for editing and a `UserProfileDisplay` component. Integrates these components with the newly created backend API.
    *   **Output:** Frontend UI components and integration logic.

4.  **Testing and Debugging Phase (Flow Debug Mode)**
    *   **Orchestrator Action:** Switches to **Flow Debug** mode.
    *   **Debug Task:** Writes unit and integration tests for both backend and frontend components. Identifies and resolves any bugs or performance issues found during testing. Analyzes error logs and provides fixes.
    *   **Output:** Passing tests, bug fixes, and potentially optimized code.

5.  **Documentation and Review Phase (Flow Architect Mode)**
    *   **Orchestrator Action:** Switches back to **Flow Architect** mode.
    *   **Architect Task:** Updates the [`USER_PROFILE_DESIGN.md`](USER_PROFILE_DESIGN.md) with implementation details, lessons learned, and any deviations from the initial plan. Ensures all new components and APIs are properly documented for future maintenance and team collaboration.
    *   **Output:** Comprehensive, updated documentation for the completed feature.

This example demonstrates how Flow Orchestrator provides a cohesive and efficient development experience by intelligently leveraging the specialized capabilities of each RooFlow mode.