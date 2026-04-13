# Educational Platform Admin API

A full-stack web application designed for administrating online courses. Built with the NestJS framework, this project demonstrates server-side logic, database management, strict data validation, and server-side rendering (SSR) using Handlebars templates.

## Key Features

* **Complete CRUD Operations:** Full capability to Create, Read, Update, and Delete course records.
* **Server-Side Rendering:** Dynamic HTML views generated on the server using Handlebars (`.hbs`), providing a fast and SEO-friendly user interface.
* **Robust Data Validation:** Utilizes `class-validator` and `class-transformer` (DTOs) to ensure all incoming data (course titles, instructor names, durations) meets strict criteria before hitting the database.
* **Relational Database:** Integrated with SQLite via TypeORM for persistent, structured data storage.
* **Clean Architecture:** Follows the modular NestJS architecture (Controllers, Services, Modules) for scalable and maintainable code.

## Tech Stack

* **Backend Framework:** NestJS
* **Database & ORM:** SQLite, TypeORM
* **Template Engine:** Handlebars (hbs)
* **Validation:** `class-validator`, `class-transformer`

## Interface Overview

<img width="1009" height="301" alt="image" src="https://github.com/user-attachments/assets/a7062c15-2b1a-4447-9b46-bf69c2293ce2" />
<img width="500" height="506" alt="image" src="https://github.com/user-attachments/assets/323ce11f-c551-4e7b-9c35-abc908fe2abf" />
<img width="496" height="501" alt="image" src="https://github.com/user-attachments/assets/0f34ff66-081e-4193-8799-75747105251a" />
